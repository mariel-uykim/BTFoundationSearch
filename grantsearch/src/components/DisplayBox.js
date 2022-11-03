import React from 'react'
import '../style/App.css'
import { Typography }from '@mui/material'

const DisplayBox = (props) => {
  const openLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='result-card'>
      <a href={props.siteURL}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name.length > 50 ?
              `${props.name.substring(0, 40)}...` : props.name
            }
        </Typography>
      </a>
      <Typography variant="body2" color="text.secondary">
        {props.desc.length > 1000 ?
          `${props.desc.substring(0, 1000)}...` : props.desc
        }
      </Typography>
    </div>
  )
}

export default DisplayBox