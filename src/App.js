import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import axiosInstance from "./api/axiosInterseptor";
import ImageCard from "./components/imageCard/ImageCard";


function App() {
  const [data] = useState({
    photos: [
      {
        id: 2325447,
        width: 5184,
        height: 3456,
        url: "https://www.pexels.com/photo/hot-air-balloon-2325447/",
        photographer: "Francesco Ungaro",
        photographer_url: "https://www.pexels.com/@francesco-ungaro",
        photographer_id: 21273,
        avg_color: "#85928B",
        src: {
          original:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg",
          large2x:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Hot air balloons float over the mesmerizing landscape of Cappadocia, Turkey at sunrise.",
      },
      {
        id: 886521,
        width: 4110,
        height: 2642,
        url: "https://www.pexels.com/photo/person-s-left-hand-holding-green-leaf-plant-886521/",
        photographer: "Alena Koval",
        photographer_url: "https://www.pexels.com/@alena-koval-233944",
        photographer_id: 233944,
        avg_color: "#DFE0D9",
        src: {
          original:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg",
          large2x:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "A hand painted green holds a fresh plant sprout against a light background, symbolizing growth and sustainability.",
      },
      {
        id: 1133957,
        width: 3579,
        height: 2389,
        url: "https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/",
        photographer: "Philippe Donn",
        photographer_url: "https://www.pexels.com/@philippedonn",
        photographer_id: 230606,
        avg_color: "#685456",
        src: {
          original:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
          large2x:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "A hummingbird hovers gracefully near a blooming red hibiscus, showcasing nature's delicate beauty.",
      },
      {
        id: 158063,
        width: 2200,
        height: 1376,
        url: "https://www.pexels.com/photo/green-leafed-tree-beside-body-of-water-during-daytime-158063/",
        photographer: "Pixabay",
        photographer_url: "https://www.pexels.com/@pixabay",
        photographer_id: 2659,
        avg_color: "#575C56",
        src: {
          original:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg",
          large2x:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "A beautiful spring garden landscape featuring vibrant pink flowers, a serene river, and a picturesque bridge.",
      },
      {
        id: 1386604,
        width: 2606,
        height: 3648,
        url: "https://www.pexels.com/photo/woman-holding-pink-tulips-1386604/",
        photographer: "Tuấn Kiệt Jr.",
        photographer_url: "https://www.pexels.com/@soldiervip",
        photographer_id: 312601,
        avg_color: "#827660",
        src: {
          original:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg",
          large2x:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "An elegant young woman holding pink tulips in a serene outdoor setting, embodying natural beauty and tranquility.",
      },
      {
        id: 459335,
        width: 2500,
        height: 3672,
        url: "https://www.pexels.com/photo/white-orchids-459335/",
        photographer: "Pixabay",
        photographer_url: "https://www.pexels.com/@pixabay",
        photographer_id: 2659,
        avg_color: "#B5A280",
        src: {
          original:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg",
          large2x:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/459335/pexels-photo-459335.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Delicate lily of the valley flowers arranged on textured paper, showcasing elegance and natural beauty.",
      },
      {
        id: 250591,
        width: 2736,
        height: 3648,
        url: "https://www.pexels.com/photo/low-angle-view-of-pink-flowers-against-blue-sky-250591/",
        photographer: "John-Mark Smith",
        photographer_url: "https://www.pexels.com/@jmark",
        photographer_id: 57844,
        avg_color: "#ACB0CF",
        src: {
          original:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg",
          large2x:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Beautiful cherry blossoms in full bloom on a clear spring day with a vibrant blue sky background.",
      },
      {
        id: 906150,
        width: 4176,
        height: 2771,
        url: "https://www.pexels.com/photo/pink-petaled-flower-plant-inside-white-hanging-pot-906150/",
        photographer: "Min An",
        photographer_url: "https://www.pexels.com/@minan1398",
        photographer_id: 206851,
        avg_color: "#9EADB4",
        src: {
          original:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg",
          large2x:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Capture of vibrant pink petunias in a hanging pot against a blurred natural background.",
      },
      {
        id: 247599,
        width: 7301,
        height: 4873,
        url: "https://www.pexels.com/photo/scenic-view-of-rice-paddy-247599/",
        photographer: "Pixabay",
        photographer_url: "https://www.pexels.com/@pixabay",
        photographer_id: 2659,
        avg_color: "#485749",
        src: {
          original:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
          large2x:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Lush green terraced rice fields with a rustic hut under soft sunlight.",
      },
      {
        id: 1108572,
        width: 7360,
        height: 4912,
        url: "https://www.pexels.com/photo/clear-light-bulb-planter-on-gray-rock-1108572/",
        photographer: "Singkham",
        photographer_url: "https://www.pexels.com/@singkham-178541",
        photographer_id: 178541,
        avg_color: "#50595F",
        src: {
          original:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
          large2x:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "A small plant sprouts in soil inside a light bulb, symbolizing eco-friendly and sustainable growth.",
      },
      {
        id: 757889,
        width: 2614,
        height: 3838,
        url: "https://www.pexels.com/photo/close-up-photography-flowers-in-a-vase-757889/",
        photographer: "Marianna OLE",
        photographer_url: "https://www.pexels.com/@mariannaole",
        photographer_id: 250262,
        avg_color: "#757B71",
        src: {
          original:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg",
          large2x:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "Vibrant purple lisianthus flowers bloom beautifully in a glass vase on an urban balcony.",
      },
      {
        id: 1955134,
        width: 4000,
        height: 6000,
        url: "https://www.pexels.com/photo/empty-highway-overlooking-mountain-under-dark-skies-1955134/",
        photographer: "Sebastian Palomino",
        photographer_url: "https://www.pexels.com/@sebastian-palomino-933481",
        photographer_id: 933481,
        avg_color: "#747576",
        src: {
          original:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg",
          large2x:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          large:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
          medium:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&h=350",
          small:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&h=130",
          portrait:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
          landscape:
            "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
          tiny: "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
        },
        liked: false,
        alt: "A scenic empty road stretches into snow-capped mountains under cloudy skies, offering a sense of adventure and tranquility.",
      },
    ],
  });



  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <p className="main-title">Beauty relies on pictures.</p>

        <div className="main-content">
          {data.photos.map((photo) => (
            <ImageCard photo={photo}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
