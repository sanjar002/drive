import React from 'react';
import LogoCar from '../assets/unnamed-19.png';
import './Section6.css';


const Section6 = () => {
  return (
    <div>
        <section>
            <div className='container'>
                <div className='div-contacty'>

                    <div className='img-div'>
                      <img className='img-section6' src={LogoCar} alt="" />
                    </div>

                <div className="div-nenah">
                  <h2 className="h2-nenav">ЗАПИШИСЬ СЕЙЧАС И <br /> ПОЛУЧИ ПОЛНЫЙ <br /> ТЕОРЕТИЧЕСКИЙ <br /> ОНЛАЙН-КУРС <br />  <span className='span-podarok'>В ПОДАРОК</span> 
                  </h2>
               </div>
                  
                <div>
                  <a href="#section-posled"> <button className='section6-btn btn-6'>Стартуем</button> </a> 
                </div>

                </div>
            </div>
        </section>
    </div>
  );
};

export default Section6;