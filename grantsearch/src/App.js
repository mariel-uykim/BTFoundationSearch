import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import data from './grants.json'
import grantsService from './services/GrantsService';


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
    setQuery(data.query.replace(/\s/g, '+'))
    setLocations(data.location)

    grantsService.getGrants(query)
    .then(objects => {
      setGrants(objects)
    })
  }

  return (
    <div className="App">
      <SearchBox onSubmitForm={onSubmitForm}/>
      <div className='resultBoxes'>
        {searchQuery.length > 0 && searchQuery.map((data, key) => {
          return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
        })}
      </div>

    </div>
  );
}

export default App;
