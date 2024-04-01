import React from 'react';
// IMG НАЧЛОО
import Mash from '../assets/901e3d971fd4fe6d8f23b337f1afc6ac-1.png'
import bus from '../assets/bus1-servis.png'
import Kamaz from '../assets/Kategoriy C.png'
import Avtobusspric from '../assets/Avtobusspric-removebg-preview.png'
import gruzo from '../assets/31690.png'

import './section.css';

const Section = () => {
  return (
    <div className='section_div '>
    <section>
      <div className='container'>
          <div className='wrapper logo-wrapper'>
            <h2 className='section_logo'>Что ты получишь в автошколе АвтоСтартПлюс?</h2>
            <div className="obchiy">
            <div className="boxes-two">

             <div className="boxes-second">
                <div className="box-one">
                  <div className='box-images'>
                      <img className='mash' src={Mash} alt="" />
                      <div className='kategoriy'>
                      <p className='kategoriy-b'>Категория <span>В</span>  за 2,5 месяц</p>
                      </div>
                  </div>
                </div>
             </div>

             <div className="boxes-tree">
                <div className="box-one">
                  <img className='bus' src={bus} alt="" />
                  <div>
                    <div className='kategoriy_2'>
                    <p className='kategoriy-d'>Категория <span>Д</span> за 1,5 месяц</p>
                    </div>
                  </div>
                </div>
             </div>

             <div className="boxes-foure">
                <div className="box-one3">
                <img className='kamaz' src={Kamaz} alt="" />
                <div className="kategoriy3">
                  <p className='kategoriy-ce'>Категория <span>СЕ</span> за 1,5 месяцев</p>
                </div>
                </div>
             </div>
             
            </div>  
          <div className='div-tire'></div>

            <div className="block-2-section8">
             <div className="boxes-five">
                <div   className="box-one4">
                <img className='avtobusspric' src={Avtobusspric} alt="" />
                <div className="kategoriy4">
                  <p className='kategoriy-de'>Категория <span>DE</span> за 1,5 месяц </p>
                </div>
                </div>
             </div>

             <div className="boxes-sixe">
                <div className="box-one5">
                <img className='universal' src={gruzo} alt="" />
                <div className="kategoriy5">
                  <p className='kategoriy-bc'>Категория  <span>C</span> за 1,5 месяц </p>
                </div>
                </div>
             </div>
            </div>
            </div>
          </div>
      </div>
    </section>

    </div>
  )
};

export default Section;