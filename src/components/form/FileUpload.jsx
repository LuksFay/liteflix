import React, { useState } from 'react';
import ProgressBar from '../progressbar/ProgressBar';
import './FileUpload.css'
import '../columnmovies/Column.css';


const FileUpload = ({setFormComplete}) => {

    const [form, setForm] = useState({
        title: '',
        backdrop_path: '',
      });
    const[image, setImage] = useState(false)
    const [error, setError] = useState(false)
    

    // FUNCION CARGAR IMAGEN
    const handleImage = (files) => {
        console.log(files)
        if(files.size > 5000000){
          setError(true)
        }else{setError(false)}


          const fileReader = new FileReader();
          fileReader.onloadend = () => {
            if (fileReader.readyState === 2) {
              setForm({ ...form, backdrop_path: fileReader.result });
             
            }
          };
        fileReader.readAsDataURL(files);
        setImage(true)
        return image
    };


    //FUNCION CARGAR EL FORMULARIO 

    const onSubmit = (e) => {
      e.preventDefault();
      const { title, backdrop_path } = form;
      if (title === '' || backdrop_path === '') return;
      const uploadedMovies = JSON.parse(
        localStorage.getItem('MyUploadedMovies') || "[]"
      )
      uploadedMovies.push({ title: title, backdrop_path: backdrop_path })
      localStorage.setItem('MyUploadedMovies', JSON.stringify(uploadedMovies));
      setFormComplete(true)
    };

      //FUNCION REACT ONDROP
    const handleDragOver = (event) => {
      event.preventDefault()
    }

     
    const handleDrag = (event) => {
      event.preventDefault()
    }

    const handleDrop = (ev) => {
      ev.preventDefault();
      if (ev.dataTransfer.items) {
        // DataTransferItemList accede a los archivos
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // Si los elementos descartados no son archivos, rechazados!
          if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            handleImage(file)
          }
        }
      } else {
        // DataTransferItemList accede a los archivos
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          handleImage(ev.dataTransfer.files[i])
        }
      }
    }
  return (
    <>
      <div className='fileContainer'>

        <form className='formClass' id='frm'>

          { image ?
                  <ProgressBar error={error} setError={setError} setImage={setImage}/>
                  :
                  <div className='fileImgContainer'
                    onDragOver={handleDragOver}
                    onDragStart={handleDrag}
                    onDrop={handleDrop}
                  >
                    <label htmlFor="imgfiles" className='fileImgLabel'>
                    Agregá un archivo o arrastralo y soltalo aquí
                    </label>  
                    <input
                        className='fileImgInput'
                        id='imgfiles'
                        type='file'
                        defaultValue=''
                        accept='image/png,image/jpeg'
                        onChange={(e) => handleImage(e.target.files[0])}
                        required="required"
                    />
                  </div> 
          }

              <div className='fileInputContainer'>
                <input
                  className='fileTitleInput'
                  value={form.title}
                  placeholder='Título'
                  type='text'
                  required="required"
                  onChange={(e) => setForm({ ...form, title: e.target.value})}
                />
              </div>

              <div className='buttonContainer'>
                <input
                  className='fileImgButton'
                  type='submit'
                  onClick={(e) => onSubmit(e)}
                  value="Subir película"
                  id='btns'
                />
              </div>

          </form>
      </div>
    </>
  )
}
export default FileUpload