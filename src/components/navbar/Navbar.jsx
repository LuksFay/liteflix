import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({setModalOpen, modalOpen}) => {
  const [show, handleShow] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', () =>{
      if (window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll', null);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"}`} id='nav'>

      <div className='nav_left_container'>
        <p className='nav_logo_bold'>Lite<span className='nav_logo_light'>flix</span></p>
        <button className='nav_button' onClick={()=>setModalOpen(!modalOpen)}>
         Agregar Pelicula
        </button>
      </div>


    <div className='nav_right_container'>
      <div className='nav_menu_container'>
        <ul className='nav_links'>
          <li className='nav_item'>Inicio</li>
          <li className='nav_item'>Series</li>
          <li className='nav_item'>Películas</li>
          <li className='nav_item'>Agregadas recientemente</li>
          <li className='nav_item'>Populares</li>
          <li className='nav_item'>Mis películas</li>
          <li className='nav_item'>Mi lista</li>
          <li className='nav_item agregar' onClick={()=>setModalOpen(!modalOpen)}>Agregar película</li>
          <li className='nav_item'>Cerrar sesión</li>
        </ul>
        <a href="#nav" className='nav_hamburguer'>
          <img src={require('../../assets/menu.png')} className='nav_menu icon_size' alt='menu'/>
        </a>
        <a href="#nowhere" className='nav_close'>
          <img src={require('../../assets/menu_close.png')} className='nav_menu_close icon_size' alt='menu' />
        </a>
      </div>
      <img src={require('../../assets/notification.png')} className='nav_notification icon_size'alt='notifications'/>
      <img src={require('../../assets/profile.png')} className='nav_profile icon_size' alt='profile'/>
    </div>

    </nav>
  )
}

export default Navbar