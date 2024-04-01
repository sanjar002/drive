import React from 'react';
import LogoSity from '../../public/logo-removebg-preview.png'
import './Header.css';

const Header = () => {
  return (
    <>
    <header>
      <div className='container'>
      <p className='logo-p-auto'>АвтоШкола</p>
        <div className='logo-obshiy'>
          
          <img className='img-div-logo' src={LogoSity} alt="" />
          <p className='logo-text'>АвтоСтартПлюс</p>
        </div>
        <div className='wrapper jjjjj'>
            {/* <h2 className='header_logo'>АвтоСтартПлюс</h2> */}
                <div className='header-text'>
                   <p className='header_text'>Получи права за  2,5 месяца в рассрочку на 4 недели </p>
                </div>
                
                <div>
                  <a href="#section7"> <button className='btn'>записаться</button> </a>
                </div>
<a href=""></a>
                <div className='header_p'>
                  <p className='header_p1'>без %</p>
                  <p className='header_p2'>начни всего с  1000 сом!</p>
                </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;