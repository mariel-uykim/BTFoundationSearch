import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';
import { useState, useEffect } from 'react'
import data from './grants.json'

function App() {
  const [grants, setGrants] = useState(data)
  return (
    <div className="App">
      <SearchBox/>
      <div className='resultBoxes'>
        {grants.length > 0 && grants.map((data, key) => {
          return <DisplayBox key={key} name = {data.name} desc = {data.desc} siteURL={data.siteURL} image={data.imgURL} loc={data.loc}/>
        })}
      </div>
    </div>
  );
}

export default App;
