import React from 'react';
import Slider from 'react-slick';

export default class Carousel extends React.Component {
    render() {
        const { settings, sliderImages } = this.props;

        return (
            <Slider {...settings} >
                <div className = "slick-prev" />
                <div className = "slick-next" />
                <div className = "image-parent">
                {sliderImages.map((item, i) => (
                    <img key = {`${item.name}_${i}`} src = {item.imgSrc} alt = {item.imgAltText} />
                ))}
                </div>
            </Slider>
        );
    }
}