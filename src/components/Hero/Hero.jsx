import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // Импорт стилей AOS
import "./Hero.css"
const Hero = () => {

   
  useEffect(() => {
   AOS.init({
     duration: 1000, // Длительность анимации в миллисекундах
     once: true,     // Анимация срабатывает только один раз при скролле
   });
 }, []);

  return (
<>

<div className="section">
      <div className="container">
        <div className="hero__wrapper">
        <div  data-aos="flip-up" data-aos-deley="200" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="400" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="600" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
        <div  data-aos="flip-up" data-aos-deley="800" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="1000" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="1200" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
        <div  data-aos="flip-up" data-aos-deley="200" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="400" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="600" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
        <div  data-aos="flip-up" data-aos-deley="400" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="600" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="800" className="hero__box"></div>
        </div>
        <div className="hero__wrapper">
        <div  data-aos="flip-up" data-aos-deley="200" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="400" className="hero__box"></div>
        <div  data-aos="flip-up" data-aos-deley="600" className="hero__box"></div>
        </div>

      </div>
    </div>

</>
  )
}

export default Hero