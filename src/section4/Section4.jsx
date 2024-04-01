import React from 'react';
import Cars from '../assets/ext-front_tcm-3020-1767644 5.png';
import '../section4/Section.css';

const Section4 = () => {
  return (
    <div>
        <section  className='section4'>
            <div className='container'>
              <div className='section4-obchiyyyy'>

                <div className='section4-logo'>
                  <h2 className='section4-h2'>Первое пробное занятие в <br /> автошколе <span className='section4-span'>БЕСПЛАТНО</span></h2>
                </div>

                <div>
                  <a href="#section-jeti" > <button className='btn section4-btn'>Узнать подробности</button> </a>   
                </div>

                <div className='section4-img'>
                   <img  src={Cars} alt="" />
                </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Section4;