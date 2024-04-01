import React from 'react';

import './Section2.css';

const Section2 = () => {
  return (
    <div>
        <section className='section2'>
            <div className='container'>

                <div className='section1'>
                    <h2 className='section2-text'>Выбери свой формат обучения</h2>
                </div>
                    <div className="bosex_obchiyy">
                <div className='boxes_ob'>
                 <div className='boxes'>
                    <div className='box_1'>
                        <div className='box_title'>
                            <h2 className='box_text'>Стандарт</h2>
                            <ul>
                                <li>Курс теории</li>
                                <li>Курс вождения</li>
                                <li>Вежливые инструкторы</li>
                                <li>Кофе и печеньки</li>
                                <li>Пособие по ПДД, рабочая <br /> тетрадь и ручка </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='boxes'>
                    <div className='box_2'>
                        <div className='box_title'>
                        <h2 className='box_text'>Выходной <span className='box-text-span'>день</span> </h2>
                            <ul>
                                <li>Курс теории</li>
                                <li>Курс вождения</li>
                                <li>Вежливые инструкторы</li>
                                <li>Кофе и печеньки</li>
                                <li>Пособие по ПДД, рабочая <br /> тетрадь и ручка</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='boxes'>
                    <div className='box_3'>
                        <div className='box_title'>
                        <h2 className='box_text'>Обнови знания</h2>
                            <ul>
                                <li>Курс теории онлайн или оффлайн</li>
                                <li>Курс вождения на вашем или нашем авто</li>
                                <li>Вежливые инструкторы</li>
                                <li>Кофе и печеньки</li>
                                <li>Пособие по ПДД, рабочая <br /> тетрадь и ручка</li>
                            </ul>
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

export default Section2;