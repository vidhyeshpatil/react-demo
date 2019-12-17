import React from 'react';
import Carousel from '../components/Carousel';
import { BASE_IMAGE_PATH } from '../utils/config';

export default class Dashboard extends React.Component {
  state = {
    sliderImages: [
      {
          imgSrc: `${BASE_IMAGE_PATH}/1.jpeg`,
          imgName: "Sunset",
          imgAltText: "Sunset"
      },
      {
          imgSrc: `${BASE_IMAGE_PATH}/2.jpeg`,
          imgName: "Morning",
          imgAltText: "Morning"
      },
      {
          imgSrc: `${BASE_IMAGE_PATH}/3.jpeg`,
          imgName: "Autumn",
          imgAltText: "Autumn"
      },
      {
          imgSrc: `${BASE_IMAGE_PATH}/4.jpeg`,
          imgName: "Sky",
          imgAltText: "Sky"
      }
    ],
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      initialSlide: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    }

    return (
      <React.Fragment>
        <div className = "image-container">
          <Carousel settings = {settings} sliderImages = {this.state.sliderImages} />
        </div>
      </React.Fragment>
    );
  }
}
