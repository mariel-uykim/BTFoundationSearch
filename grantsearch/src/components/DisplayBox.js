import React from 'react'
import '../style/App.css'


const DisplayBox = (props) => {
  return (
    <div className='displayBox'>
        <h2>{props.name}</h2>
    </div>
  )
}

export default DisplayBox