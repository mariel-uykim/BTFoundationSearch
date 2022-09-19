import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <div className='resultBoxes'>
        <DisplayBox name = 'Grant 1' desc = 'something1'/>
        <DisplayBox name = 'Grant 2' desc = 'something2'/>
        <DisplayBox name = 'Grant 3' desc = 'something3'/>
      </div>
    </div>
  );
}

export default App;
