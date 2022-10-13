import axios from 'axios'

const getAll = () => {
    const response = axios.get("/search")
    return response.data
}
const getGrants = async (query) => {
    console.log("fetching "+JSON.stringify(query)+ "...")
    var response= ""
    try{
        response = await axios.get("/search/" + query)
    }
    catch(e) {
        response = e
    }
    console.log("received response!")
    return response.data
}

const grantsService = {getAll, getGrants}

export default grantsService;