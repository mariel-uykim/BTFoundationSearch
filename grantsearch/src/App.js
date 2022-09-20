import './style/App.css';
import SearchBox from './components/SearchBox';
import DisplayBox from './components/DisplayBox';

function App() {
  return (
    <div className="App">
      <SearchBox/>
      <div className='resultBoxes'>
        <DisplayBox name = 'Grant 1' desc = 'something1' image='https://logos-world.net/wp-content/uploads/2021/04/Westpac-Banking-Corporation-Logo-2003-present.png'/>
        <DisplayBox name = 'Grant 2' desc = 'something2' siteURL='https://www.google.com/'/>
        <DisplayBox name = 'Grant 3' desc = 'something3'/>
        <DisplayBox name = 'Grant 4' desc = 'something4' image='https://pbs.twimg.com/profile_images/1205289863924174848/90emyq50_400x400.png'/>
      </div>
    </div>
  );
}

export default App;
