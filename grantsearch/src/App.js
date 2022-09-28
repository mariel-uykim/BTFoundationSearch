import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import grantsService from './services/GrantsService';


function App() {

  const [grants, setGrants] = useState([])
  const [locations, setLocations] = useState(["ALL"])
  const [query, setQuery] = useState("")

  // const searchQuery = (grants.length > 0) ? grants.filter((g) => {
  //   if((query.length == 0 || g.name.includes(query)) &&
  //     (locations.includes("ALL")|| locations.includes(g.loc))){
  //       return (g)
  //     }
  //   }): ""


  const onSubmitForm = (data) => {
    setQuery(data.query.replace(/\s/g, '+'))
    setLocations(data.location)

    if(query.length > 0) {
      grantsService.getGrants(query)
      .then(res => {
        setGrants(res.items)
      })
    }
  }

  return (
    <div className="App">
      <SearchBox onSubmitForm={onSubmitForm}/>
      <div className='resultBoxes'>
        {grants.length > 0 && grants.map((data, key) => {
          return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
        })}
      </div>

    </div>
  );
}

export default App;
