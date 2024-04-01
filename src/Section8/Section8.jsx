import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import './Section8.css';

const Section8 = () => {
  return (
    <div>
      <section className='section8'>
        <div className="container">
          <div className="sectio8_obshiyy">
          

            <div className='ssylka-footer'>
              <a href="tel:+996500443423">+996 500 65-56-95</a>
              <a href="tel:+996707089470">+996 707 08-94-70</a>
            </div>
            <LocalPhoneIcon 
          sx={{color: "#fff",
          fontSize: "40px",
          cursor: "pointer",
            // width: "100px",
            // marginLeft: "10px",
            marginTop: "-100px" 
          }}
          />
            <div className='grafik'>
              <ul className='ul_obsh'>
                <li>Время работы:</li>
                <li>Пн-Сб: 11:00 - 20:00</li>
                <li>Вс:11:00 - 14:00</li>
                <li>г.Бишкек, ул.Фрунзе,278/Суюнбаева</li>
              </ul>
            </div>

            <div className='obshiy-icons'>
            <div className='icons'>
               <a href='https://instagram.com/almazovvv.00?igshid=YmMyMTA2M2Y='> 
                 <i className="bi bi-instagram"></i>  
               </a> 
               </div>
            <div className='icons-telega'>
               <a href='https://t.me/+996500443423'> 
                 <i class="bi bi-telegram"></i> 
               </a> 
               </div>
            <div className='icons-whats'>
               <a href='https://wa.me/+996702038656'> 
                 <i class="bi bi-whatsapp"></i>  
               </a> 
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section8;
