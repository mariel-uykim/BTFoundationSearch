import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import CSVService from '../services/CSVService';

const DownloadLink = ({data, title}) => {

    const csvDownload = () => {
        const element = document.createElement("a")
        element.href = CSVService.convertJSON(data)
        element.download = "search-" + title + ".csv"
        element.click()
    }

   return(
        <Button
            sx={{ margin: 2 }} 
            variant="contained" 
            startIcon={<DownloadIcon />} 
            onClick={csvDownload}>
            Download CSV
        </Button>
   )
}

export default DownloadLink