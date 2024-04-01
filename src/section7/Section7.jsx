import React, { useState } from 'react';

// import Carss from '../assets/pngwing.com.png';
import Carss from '../assets/remo7857-e4ce-4cdd-92d9-091c5fc36e09-removebg-preview.png';

import Znak from '../assets/5199594129884981925.webp';

import './Section.css';

const Section7 = () => {
   
    const  [firstName, setFirstName] = useState('');
    const  [lastName, setLastName] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName.length == 0 || lastName.length == 0) {
            setError(true)
        }
        if (firstName && lastName)
        {
        console.log("Имя: ",firstName,"\nТелефон: ", lastName);
        }
    };

  return (
    <div>
        <section id='section7'>
            <section id='section-jeti'>
                <section id='section-posled'>
            <div className='container'>
                <div className='section7-text'>
                    <p className='text-nami'>С<span className='section7-span'>ты точно <br /> получишь</span> своё <br /> водительское <br /> удостоверение!</p>
                </div>

                <form action="https://formsubmit.co/sanjarkairatkeldiev@gmail.com" method="POST" /* onSubmit={handleSubmit}*/ className='section7-input'>
                    <div className='input-p'>
                        <input   onChange={e => setFirstName(e.target.value)} 
                               type="text" 
                               placeholder='Как тебя зовут?' 
                               name='name'
                                />
                    </div>
                    {error && firstName.length <= 0? 
                    <label>Введите имя</label>: ""}

                    <div className='p-inpit'>
                          <input onChange={e => setLastName(e.target.value)}   
                                 type="tel" 
                                 placeholder='0700 00-01-00'
                                 name='phone'
                                  />
                    </div>
                    {error && lastName.length <= 0?
                    <label>Введите телефон</label>: "" }

                    <div className='btn-posled'>
                       <button type='submit' className=' section6-btn section7-btn'>Отправить заявку</button>
                    </div>
                    </form> 

                        <img className='images-carss' src={Carss} alt="" />
               <div className='arrow'>
                    <span></span>
                    <span></span>
                    <span></span>
                     <img className='znak' src={Znak} alt="" />
               </div>
            </div>
              </section>
            </section>
        </section>
        </div>
  )
}

export default Section7
