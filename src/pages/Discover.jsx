import React, {useRef} from 'react'
import { house } from '../data';
import '../Style/hero.css'
import disoverleft from '../assets/.svg'
import discoverright from '../assets/ (2).svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css/navigation";


const Discover = () => {

    const sliderRef = useRef(null);

    const settings = {
        dots: false, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 4,
        slidesToScroll: 1, 

        responsive: [
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
            },
          },
        ],
        
      };
  

    return (
        <>
            <main>
                <section className = 'container py-4'>
                    <h1 className = 'text-center py-4 g'>Discover Our Popular Properties</h1>
                    <section className = 'py-4 position-relative slider-contain'>
                        <div className = 'div-outside'>
      
                            <Slider ref={sliderRef} {...settings} className = 'house ' >
                            {house.map((pro)=> {
                                const {id, img, house, amount,beds, bath, size, iconic, location} = pro
                                return (
                                    <div key = {id}  className='div-inside  omo-flex'>
                                        <div className = 'omo-fle' >
                                          <div className = 'divss'>
                                            <img src= {img} alt="" className = 'div-img'/>
                                          </div>
                                        <div className = 'div-flex'>
                                                <h5 className = 'house-div'>{house}</h5>
                                               <h6 className = 'amount-div'>{amount}</h6>
                                             <div className = 'd-flex gap-2'>
                                                  <div className = ' d-flex gap-1 '>
                                                   <span className = 'beds'>{beds}</span>
                                                   <span className = 'lines'>|</span>
                                                 </div>
                                                 <div className = 'bedss'>
                                                   <span>{bath}</span>
                                                  </div>
                                                  <div className = ' d-flex gap-1'>
                                                     <span className = 'lines'>|</span>
                                                     <span className = 'beds'>{size}</span>
                                                  </div>
                                                </div>
                                               <div className = 'd-flex gap-2'>
                                                  <img src= {iconic} alt=""/>
                                                  <span className = 'locate'>{location}</span>
                                               </div>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}

                            </Slider>
                
                        </div>
                            <div>
                                <div className = 'd-flex justify-content-center align-items-center discover-left ' onClick={() => sliderRef.current.slickPrev()} >
                                    <img src= {disoverleft} alt="" className = 'dis'/>
                                </div>
                                <div className = 'd-flex justify-content-center align-items-center discover-right 'onClick={() => sliderRef.current.slickNext()} >
                                    <img src= {discoverright} alt="" className = 'dis'/>
                                </div>
                            </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default Discover
