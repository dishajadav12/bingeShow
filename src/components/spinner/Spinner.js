import React from 'react'
import spinner from './loader.gif'

 const Spinner =() => {
    return (
      <div className='text-center' >
        <img className='my-3' src={spinner} alt="spinner" style={{height:'50px'}} />
      </div>
    )
  
}
export default Spinner