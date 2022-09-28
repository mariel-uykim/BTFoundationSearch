import React from 'react'
import '../style/App.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Stack }from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const DisplayBox = (props) => {
  const openLink = url => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  return (
    <div className='result-card'>
        <Typography gutterBottom variant="h5" component="div">
          {props.name.length > 50 ?
              `${props.name.substring(0, 40)}...` : props.name
            }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc.length > 140 ?
            `${props.desc.substring(0, 120)}...` : props.desc
          }
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
            <LocationOnIcon color='disabled' fontSize='small'/>
            <Typography variant="subtitle2" color="text.secondary">{props.loc ? props.loc : "ALL"}</Typography>
        </Stack>
        <CardActions>
        <Button size="small" onClick={() => openLink(props.siteURL)}>Open Webpage</Button>
      </CardActions>
    </div>
  )
}

export default DisplayBox