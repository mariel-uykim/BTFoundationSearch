import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <div className='resultBoxes'>
        <DisplayBox name = 'Grant 1'/>
        <DisplayBox name = 'Grant 2'/>
        <DisplayBox name = 'Grant 3'/>
      </div>
    </div>
  );
}

export default App;
