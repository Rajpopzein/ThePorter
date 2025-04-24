import "./App.css";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import axiosInstance from "./api/axiosInterseptor";
import ImageCard from "./components/imageCard/ImageCard";
import { debounce } from "lodash";
import Loader from "./components/loader/Loader";
import Footer from "./components/footer/Footer";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("car");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setSearch(value);
        setPage(1);
      }, 200),
    []
  );

  const handleSearch = useCallback(
    (e) => {
      setQuery(e.target.value);
      if (
        e.target.value === "" ||
        e.target.value === " " ||
        e.target.value === null
      ) {
        setSearch("car");
        debouncedSearch("car");
      }
      debouncedSearch(e.target.value);
    },
    [debouncedSearch]
  );

  const handlePageChange = useCallback((e) => {
    setPage(e);
  }, []);

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/search?page=${page}\u0026per_page=${perPage}\u0026query=${search}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page, perPage]);

  return (
    <div className="App">
      <Navbar handleSearch={handleSearch} value={query} />
      {loading ? (
        <Loader />
      ) : (
        <div className="main-container">
          <p className="main-title">Beauty relies on pictures.</p>
          {data.photos && data.photos.length > 0 ? (
            <>
              <div className="main-content">
                {data.photos &&
                  data.photos.map((photo) => (
                    <ImageCard photo={photo} key={photo.id} />
                  ))}
              </div>
              <Footer page={page} data={data} setPage={handlePageChange} />
            </>
          ) : (
            <>
              <div className="no-data">
                <img
                  src="/assets/notfound.png"
                  alt="No data"
                  className="no-data-image"
                  width="200"
                  height={200}
                />
                <p className="no-data-text">No data found</p>
                <p className="no-data-text">Try searching for something else</p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
