require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const {google} = require('googleapis')
const config = require('../config.js')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const customsearch = google.customsearch('v1')

app.get('/', (request,response) => {
    response.send('<h1>this is a web server</h1>')
})
app.get('/search', (request, response, next) => {
    const{q,start,num} = request.query
    console.log(q,start,num)
    customsearch.cse.list({
        auth:config.GKey,
        cx:config.GCx,
        q,start,num
    })
    .then(result => result.data)
    .then((result) => {
        const { queries, items, searchInformation } = result;
        const page = (queries.request || [])[0] || {};
        const previousPage = (queries.previousPage || [])[0] || {};
        const nextPage = (queries.nextPage || [])[0] || {};
        const data = {
            q,
            totalResults: page.totalResults,
            count: page.count,
            startIndex: page.startIndex,
            nextPage: nextPage.startIndex,
            previousPage: previousPage.startIndex,
            time: searchInformation.searchTime,
            items: items.map(o => ({
                link: o.link,
                title: o.title,
                snippet: o.snippet,
            }))
      }
      // res.status(200).send(result);
      response.status(200).send(data);
    })
    .catch((err) => {
        console.log(err)
        response.status(500).send(err)
    })
})

const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })