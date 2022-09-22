import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import data from './grants.json'

function App() {

  const [grants, setGrants] = useState(data)
  const [locations, setLocations] = useState(["ALL"])
  const [query, setQuery] = useState("")

  const searchQuery = grants.filter((g) => {
    if((query.length == 0 || g.name.includes(query)) &&
      (locations.includes("ALL")|| locations.includes(g.loc))){
        return (g)
      }
  })

  const onSubmitForm = (data) => {
    setQuery(data.query)
    setLocations(data.location)
  }

  return (
    <div className="App">
      <SearchBox onSubmitForm={onSubmitForm}/>

      <div className='resultBoxes'>
        {searchQuery.length > 0 && searchQuery.map((data, key) => {
          return <DisplayBox key={key} name = {data.name} desc = {data.desc} siteURL={data.siteURL} image={data.imgURL} loc={data.loc}/>
        })}
      </div>

    </div>
  );
}

export default App;
