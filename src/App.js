import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Modal from './components/modal/Modal';
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  
  return (
    <>
    <div className='app'>
      <Navbar 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
      />
      <Banner   
      />
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
       />
    </div>
    </>
  );
}

export default App;
