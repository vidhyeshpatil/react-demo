import React from 'react';
import Carousel from '../components/Carousel';
import CardView from '../components/CardView';
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
          imgSrc: `${BASE_IMAGE_PATH}/4.jpeg`,
          imgName: "Sky",
          imgAltText: "Sky"
      },
      {
          imgSrc: `${BASE_IMAGE_PATH}/3.jpeg`,
          imgName: "Autumn",
          imgAltText: "Autumn"
      }
    ],
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
    }

    return (
      <React.Fragment>
        <Carousel settings = {settings} sliderImages = {this.state.sliderImages} />
        <CardView />
      </React.Fragment>
    );
  }
}
