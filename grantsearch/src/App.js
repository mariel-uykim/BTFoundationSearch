import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import grantsService from './services/GrantsService';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {
  const [loading, setLoading] = useState(false)
  const [grants, setGrants] = useState([])
  const [location, setLocation] = useState("ALL")
  const [query, setQuery] = useState("")
  const [change, setChange] = useState(false)
  // const searchQuery = (grants.length > 0) ? grants.filter((g) => {
  //   if((query.length == 0 || g.name.includes(query)) &&
  //     (locations.includes("ALL")|| locations.includes(g.loc))){
  //       return (g)
  //     }
  //   }): ""

  useEffect(() => {
    if(change) {
      console.log("q: " + query)

      setLoading(true)
      grantsService.getGrants(query)
      .then(res => {
        setGrants(res.items)
        setQuery("")
        setLoading(false)
        setChange(false)
      })
    } 
  },
  [change])

  const onSubmitForm = (data) => {
    console.log("d: " + JSON.stringify(data))
    if(data.query != undefined && data.query.length > 0) {
      setQuery(data.query.replace(/\s/g, '+') + "+grant")
      setLocation(data.location)

      if(location !== "ALL") {
        setQuery(query + "+" + location)
      }
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
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>:
        <div className='resultBoxes'>
          {grants.length > 0 && grants.map((data, key) => {
            return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
          })}
        </div>
      }
    </div>
  );
}

export default App;
