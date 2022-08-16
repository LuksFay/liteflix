import React from 'react'
import './ProgressBar.css'
const ProgressBar = ({error, setImage}) => {
  return (
    <>
    {error ?
            <span className='progressText'>¡ERROR! NO SE PUDO CARGAR LA PELÍCULA. El archivo supera los 5Mb</span>
            :
            <span className='progressText'>CARGADO!</span>} 
    <div className="progressBar">
        <div className={ error ? 'errorProgress' : 'progress'}></div>    
    </div>
    {error  ?
                <div className='progressButtonsDiv'>
                  <button
                    onClick={()=>setImage(false)}
                    className='progressButtons'
                  >
                      reintentar
                  </button>
                </div>
                : 
                <div className='progressButtonsDiv'>
                  <button 
                    onClick={()=>setImage(false)}
                    className='progressButtons'
                  >
                      cancelar
                  </button>
                  {/*<button className='progressButtons'>listo</button>*/}
                </div>}
    </>
  )
}

export default ProgressBar