import React, { useState } from 'react';
import FileUpload from '../form/FileUpload';
import FileUploaded from '../form/FileUploaded';
import './Modal.css';

const Modal = ({modalOpen, setModalOpen}) => {

    const [formComplete, setFormComplete] = useState(false)
        
  return (
    <>
    {modalOpen && 
        <div className='overlay'> 
            <div className='modalContainer'>
                <div className='modalHeader'>
                {formComplete ?  <h4 className='nav_logo_bold'>Lite<span className='nav_logo_light'>flix</span></h4>  :   <h4>Agregar Película</h4> }
                </div>
                <button className='closeButton' onClick={()=>setModalOpen(!modalOpen)}>
                    <img src={require('../../assets/menu_close.png')} alt="close"/>
                </button>
                { formComplete ?  
                    <FileUploaded setModalOpen={setModalOpen} modalOpen={modalOpen} setFormComplete={setFormComplete}/>  :  
                    <FileUpload 
                        setFormComplete={setFormComplete}
                    />}            
            </div>
        </div>
    }
    </>
  )
}

export default Modal