import React, {useState} from 'react'
import './header.css'
import Web from './web/web'
import Mobile from './mobile/mobile'

function Header() {
  const [isOpen, setIsOpen]= useState(false);
  return(
    <div className='header'>
      <div className='logo'>Adil Omary</div>
      <div className='menu'>
        <div className='web-menu'>
          <Web />
        </div>
        <div className='mobile-menu'>
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen&&<Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
