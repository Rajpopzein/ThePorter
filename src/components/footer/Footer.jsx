import React from 'react'

const Footer = ({data, page, setPage}) => {
  return (
    <div className="pagination">
                <button
                  className="prev"
                  onClick={() => {
                    if (page > 1) {
                      setPage(page - 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  disabled={page === 1}
                >
                  Previous
                </button>
                <button
                  className="next"
                  onClick={() => {
                    console.log(data.photos.length);
                    if (data.photos.length === 20) {
                      setPage(page + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                >
                  Next
                </button>
              </div>
  )
}

export default Footer
