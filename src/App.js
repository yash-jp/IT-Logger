import React,{useEffect,Fragment} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';

const App = () =>{
  useEffect(()=>{
    // initializes materializes javascript
    M.AutoInit();
  })
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Logs></Logs>
      </div>
    </Fragment>
  );
}

export default App;
