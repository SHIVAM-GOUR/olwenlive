import { Carousel } from 'antd';
import { useState } from 'react';

const Slider = () => {
    const poster1 = require('../assets/images/poster1.jpg');
    const poster2 = require('../assets/images/poster2.jpg');
    const poster3 = require('../assets/images/poster3.jpg');
    const poster4 = require('../assets/images/poster4.jpg');
    const poster5 = require('../assets/images/poster5.jpg');
    const poster6 = require('../assets/images/poster6.jpg');

    return (
        <div className="sliderContainer">
            <Carousel autoplay className='carousel slider'>
                <img src={poster1} className='carouselImg' />
                <img src={poster2} className='carouselImg' />
                <img src={poster3} className='carouselImg' />
                <img src={poster4} className='carouselImg' />
                <img src={poster5} className='carouselImg' />
                <img src={poster6} className='carouselImg' />
            </Carousel>
        </div>
    )
}

export default Slider;