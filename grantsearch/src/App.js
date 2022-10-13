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
  const [location, setLocation] = useState("ALL")
  const [domains, setDomains] = useState([])
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
          console.log("failed to retrieve results")
          setNoResults(true)
          setGrants([])
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

  const onSubmitForm = (data) => {
    setNoResults(false)
    if(data.query != undefined && data.query.length > 0) {
      var searchTerm = data.query.replace(/\s/g, '+') + "+grant"
      setLocation(data.location)
      setDomains(JSON.stringify(data.org).slice(1,-1).split(","))

      if(location !== "ALL") {
        searchTerm = searchTerm + "+" + location
      }
      
      if(!domains.includes("ALL") && domains.length>0) {
        for (const [i, value] of domains.entries()) {
          if (!(i === domains.length - 1)) {
              searchTerm = searchTerm + "+site:"+value+"+OR"
          }
          else{
            searchTerm = searchTerm + "+site:"+value
          }
        }
      }

      console.log("SS: " + searchTerm)
      setQuery(searchTerm)
      setChange(true)
    }
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
          {grants.length> 0 ? <DownloadLink data={grants} title={query}/>: <></>}
          <div className='resultBoxes'>
            {grants.length > 0 && grants.map((data, key) => {
              return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
            })}
            {noResults ? <EmptyPage/>:<></>}
          </div>
        </div>
      }
    </div>
  );
}

export default App;
