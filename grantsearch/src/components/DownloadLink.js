import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import CSVService from '../services/CSVService';
import { useState } from 'react';

const DownloadLink = ({data, title}) => {

    const csvDownload = () => {
        console.log(JSON.stringify(data))
        const element = document.createElement("a")
        element.href = CSVService.convertJSON(data)
        element.download = "search " + title + ".csv"
        element.click()
    }

   return(
        <Button 
            variant="outlined" 
            startIcon={<DownloadIcon />} 
            onClick={csvDownload}>
            Download CSV
        </Button>
   )
}

export default DownloadLink