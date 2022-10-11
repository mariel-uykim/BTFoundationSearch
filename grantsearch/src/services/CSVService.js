
const convertJSON = (data) => {
    // const csvFile = makeCSV(JSON.parse(JSON.stringify(data)))
    const csvFile = convert(data)
    const dataBlob = new Blob([csvFile], { type: 'text/csv'})
    const url = window.URL.createObjectURL(dataBlob)
    return url
}

const convert = (data) => {
    const arr = [Object.keys(arr[0])].concat(data)
      
        return arr.map(i => {
          return Object.values(i).toString()
    }).join('\n')
}

const CSVService = {convertJSON}

export default CSVService;