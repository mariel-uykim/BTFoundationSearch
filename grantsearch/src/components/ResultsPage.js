import React from 'react'
import SearchBox from './SearchBox';
import DisplayBox from './DisplayBox';
import ClipLoader from "react-spinners/ClipLoader";
import DownloadLink from './DownloadLink';
import EmptyPage from './EmptyPage';
import '../style/App.css';

const ResultsPage = ({onSubmitForm, loading, grants, query, noResults}) => {
  return (
    <div className="results-page">
        <div className='search-area'>
          <SearchBox onSubmitForm={onSubmitForm}/>
        </div>
        <div className='results-area'>
          {loading? 
            <div className='spinner'>
              <ClipLoader
                color={"#2ba3ff"}
                loading={loading}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>:
            <div className='content'>
              {(!noResults && grants.length> 0) ? <DownloadLink data={grants} title={query}/>: <></>}
              <div className='resultBoxes'>
                {noResults ? <EmptyPage/>: grants.map((data, key) => {
                  return <DisplayBox key={key} name = {data.title} desc = {data.snippet} siteURL={data.link} image={data.imgURL} loc={data.loc}/>
                })}
              </div>
            </div>
          }
        </div>
      </div>
  )
}

export default ResultsPage