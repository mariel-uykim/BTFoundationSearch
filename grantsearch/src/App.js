import './style/App.css';
import { useState, useEffect } from 'react'
import grantsService from './services/GrantsService';
import { Theme } from './misc/theme';
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/raleway";
import "@fontsource/urbanist/600.css";
import ResultsPage from './components/ResultsPage';
import SearchPage from './components/SearchPage';

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
    <ThemeProvider theme={Theme}>
      <div className="App">
        {grants.length > 0? 
          <ResultsPage
           grants={grants} 
           onSubmitForm={onSubmitForm}
           loading={loading}
           noResults={noResults}
           query={query} 
          /> : 
          <SearchPage
            onSubmitForm={onSubmitForm}
          />}
      </div>
    </ThemeProvider>
  );
}

export default App;
