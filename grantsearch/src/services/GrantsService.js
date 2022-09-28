import axios from 'axios'

const getAll = () => {
    return axios.get("/search")
                .then(response => response.data)
}
const getGrants = (query) => {
    return axios.get("search/" + query)
                .then(response => response.data)
                .then(data => console.log("hello" + data))
}

const grantsService = {getAll, getGrants}

export default grantsService;