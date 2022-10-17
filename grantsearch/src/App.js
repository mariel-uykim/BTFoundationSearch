import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import grantsService from './services/GrantsService';
import ClipLoader from "react-spinners/ClipLoader";
import DownloadLink from './components/DownloadLink';
import EmptyPage from './components/EmptyPage';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [grants, setGrants] = useState([])
  const [query, setQuery] = useState("")
  const [change, setChange] = useState(false)
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    if(change) {
      setLoading(true)
      grantsService.getGrants(query)
      .then(res => {
        try{
          setGrants(res.items)
        }
        catch(e) {
          setNoResults(true)
        }
        finally {
          setQuery("")
          setLoading(false)
        }
      })
      setChange(false)
    } 
  },
  [change])

  useEffect(() => {
    if(loading) {
      const timeout = setTimeout(() => {
        setNoResults(true)
      }, 10000)
  
      return () => clearTimeout(timeout)
    }
   },[loading])


  const searchQuery = async (data) => {
    var searchTerm = ""
    var loc = data.location
    var dom = JSON.stringify(data.org)
                    .slice(1,-1)
                    .split(",")
                    
    if(data.query !== undefined && data.query.length > 0) {
      searchTerm = data.query.replace(/\s/g, '+') + "+grant+Australia"
    }
    console.log("D: " + dom)
    console.log("D: " + loc)

    if(loc !== "ALL") searchTerm = searchTerm + "+" + loc
    
    if(!dom.includes("ALL") && dom.length>0) {
      for (const [i, val] of dom.entries()) {
        if (!(i === dom.length - 1)) {
            searchTerm = searchTerm + "+site:" + val + "+OR"
            console.log("x: " + val)
        }
        else{
          searchTerm = searchTerm + "+site:" + val
        }
      }
    }

    return searchTerm
  }

  const onSubmitForm = async (data) => {

    var res = await searchQuery(data)
    setNoResults(false)

    setQuery(res)
    setChange(true)  

  }

  return (
    <div className="App">
      <SearchBox onSubmitForm={onSubmitForm}/>
      {loading? 
        <div className='spinner'>
          <ClipLoader
            color={"#2ba3ff"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>:
        <div className='content'>
          {(!noResults && grants.length> 0) ? <DownloadLink data={grants} title={query}/>: <></>}
          <div className='resultBoxes'>
            {noResults ? <EmptyPage/>: grants.map((data, key) => {
              return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
            })}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
