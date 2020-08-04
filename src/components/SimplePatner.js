
import React, {
  useState,
  useEffect
} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../css/SimpleTemp.css';
import Slider from "react-slick";


function SimplePatner() {
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      setSuggestions(data);
    })
  });

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  }
  return (
    <div className="py-5 my-5 bg-secondary" id="patnership">
      <div className="container">
        <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center pb-2">
          <h2 className="display-5 text-light">
            Sekolah yg telah PKL di UPTD Tikomdik
              </h2>
          {suggestions.length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
              <Slider {...settings}>
                {suggestions.map(current => (
                  <div className="out" key={current.id}>
                    <div className="cardTemp">
                      <img className="rounded-circle" alt={"users here"} src={`https://source.unsplash.com/random/${current.id}`} height={56} width={56} />
                      <div className="card-body">
                        <h5 className="card-title">{current.username}</h5>
                        <small className="card-text text-sm-center text-muted">In your contacts</small>
                        <br />

                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}




        </div>
      </div>
    </div>

  );
};

export default SimplePatner;