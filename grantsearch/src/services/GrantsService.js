import axios from 'axios'

const getAll = () => {
    const response = axios.get("/search")
    return response.data
}
const getGrants = async (query) => {
    const response = await axios.get("/search/" + query)
    console.log(response)
    return response.data
}

const grantsService = {getAll, getGrants}

export default grantsService;