import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactLogo from '../assets/partner_logo/react.svg';
import DellLogo from '../assets/partner_logo/dell.png';
import HpLogo from '../assets/partner_logo/hp.png';
import HuaweiLogo from '../assets/partner_logo/huawei.png';
import IbmLogo from '../assets/partner_logo/ibm.png';
import LenovoLogo from '../assets/partner_logo/lenovo.png';
import NvidiaLogo from '../assets/partner_logo/nvidia.png';
import SamsungLogo from '../assets/partner_logo/samsung.png';
import UberLogo from '../assets/partner_logo/uber.png';
import ZoomLogo from '../assets/partner_logo/zoom.png';

const logos = [
    ReactLogo, DellLogo, HpLogo, HuaweiLogo, IbmLogo,
    LenovoLogo, NvidiaLogo, SamsungLogo, UberLogo, ZoomLogo,
];

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <div className="w-full max-w-7xl mt-6 py-4 bg-white rounded-lg overflow-hidden h-[200px]">
            <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index} className="rounded-lg">
                        <img
                            src={logo}
                            alt={`logo-${index}`}
                            className="w-20 h-20 object-contain mx-auto"
                            loading="lazy"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoSlider;