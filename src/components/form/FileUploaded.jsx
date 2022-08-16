import React from 'react'

const FileUploaded = ({setModalOpen, modalOpen, setFormComplete}) => {
  const finishedForm = () =>{
    setModalOpen(!modalOpen)
    setTimeout(function(){
      setFormComplete(false);
  }, 1000);
  }
  return (
    <>
        <div className="fileContainer text">
            <p className='congrats'>¡Felicitaciones!</p>
            <p className='congratsInfo'>Su película fue correctamente subida.</p>
        </div>
        
        <div className='buttonContainer'>
            <button
            className='fileImgButton'
            type='submit'
            onClick={finishedForm}
            >
            Ir a Home
            </button>
        </div>
    </>
  )
}

export default FileUploaded