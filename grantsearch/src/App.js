import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import data from './grants.json'

function App() {

  const [grants, setGrants] = useState(data)
  const [locations, setLocations] = useState(["ALL"])

  const searchQuery = grants.filter((g) => {
    if(locations.includes("ALL")|| locations.includes(g.loc)){
      return (g)
    }
  })

  const onLocationChange = (loc) => {
    setLocations(loc)
  }

  return (
    <div className="App">
      <SearchBox onLocationChange={onLocationChange}/>

      <div className='resultBoxes'>
        {searchQuery.length > 0 && searchQuery.map((data, key) => {
          return <DisplayBox key={key} name = {data.name} desc = {data.desc} siteURL={data.siteURL} image={data.imgURL} loc={data.loc}/>
        })}
      </div>

    </div>
  );
}

export default App;
