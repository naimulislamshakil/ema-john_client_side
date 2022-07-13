import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-2">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/banner (1).jpg"
              className="d-block w-100"
              alt="..."
              width={1250}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/banner (2).jpg"
              className="d-block w-100"
              alt="..."
              width={1250}
              height={500}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/banner (4).jpg"
              className="d-block w-100"
              alt="..."
              width={1250}
              height={500}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
