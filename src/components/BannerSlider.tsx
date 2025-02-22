// src/components/BannerSlider.tsx
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ihavecpu1 from '../assets/ihavecpu1.jpg';
import ihavecpu2 from '../assets/ihavecpu2.jpg';
import ihavecpu3 from '../assets/ihavecpu3.jpg';

const images = [
    ihavecpu1,
    ihavecpu2,
    ihavecpu3,
];

// const BannerSlider: React.FC = () => {
const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        customPaging: () => (
            <div className="w-4 h-4 grid justify-items-center bg-gray-400 rounded-full hover:bg-gray-600"></div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div style={{
                position: 'absolute',
                top: '50%',            /* จัดให้อยู่ตรงกลางแนวตั้ง */
                left: '50%',           /* จัดให้อยู่ตรงกลางแนวนอน */
                transform: 'translate(-50%, 20%)', /* เลื่อนให้จุดอยู่ตรงกลางพอดี */
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ul style={{ display: 'flex', gap: '10px', padding: 0, listStyle: 'none' }}>
                    {dots}
                </ul>
            </div>
        )
    };

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full h-[400px]">
                            <img
                                src={src}
                                alt={`banner-${index}`}
                                className="w-full h-full object-cover rounded-lg"
                                loading="lazy"
                                />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BannerSlider;
