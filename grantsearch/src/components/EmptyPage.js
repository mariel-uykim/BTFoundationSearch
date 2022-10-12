import React from 'react'
import '../style/App.css'

const EmptyPage = () => {
  return (
    <div className='error-msg'>
        <img src={require('../assets/error.png')} alt='icons8 image not available'/>
        <h2>Cannot retrieve data</h2>
    </div>
  )
}

export default EmptyPage