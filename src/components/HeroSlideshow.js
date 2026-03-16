import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"; // import navigation hook

function HeroSlideshow() {
  const images = [
    "/FRIEND.jpg",
    "/accra.jpg",
    "/castle.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
  };

  const navigate = useNavigate(); // initialize navigation

  return (
    <div className="hero-slideshow">
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i}>
            <img src={src} alt={`slide-${i}`} className="slide-img" />
          </div>
        ))}
      </Slider>
      <div className="hero-overlay">
        <h1>Experience Ghana: Culture, Events & Investment</h1>
        <div className="cta-buttons">
          <button onClick={() => navigate("/events")}>Explore Events</button>
          <button onClick={() => navigate("/tourism")}>Tourism Highlights</button>
          <button onClick={() => navigate("/investment")}>Investment Opportunities</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSlideshow;