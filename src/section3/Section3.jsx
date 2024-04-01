import React from 'react';
import './Section3.css';
import Images from '../assets/fuel-gauge 1.png';


const Section3 = () => {
  return (
    <div>
        <section className='section3'>
            <div className='container'>
            <div className='section3-obchiyyy'>
                <div className='section3-text'>
                <h2 className='section3-logo'>Проверь свои знания</h2>
                <p className='section3_text'>Подготовься к сдаче экзамена <br/> онлайн c помощью тренировки </p>
                </div>

                <button className='btn section3-btn' 
                onClick={()=>{ 
                  // const url = 'https://jackschoolkg.ru/pddonline'
                  // const icons = icons.html
                  // const link = "index.html"
                  // console.log("link: ", link);
                  // if (link){
                    
                  // }
                  let linkLogo = document.querySelector(`link[rel=icon]`)
                  location.href = 'https://jackschoolkg.ru/pddonline'
                }} >Начать тест</button>
                
                <div className='section3-img'>
                <img src={Images} alt="" />
                </div>
              </div>
            </div>
        </section>
    </div>
  );
};
//  href="/vite.svg" 
export default Section3;