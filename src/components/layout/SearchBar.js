import React from 'react';

const SearchBar = ()=>{
  return(
  <nav className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required/>
          <label class="label-icon" htmlFor="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    
  );
}

export default SearchBar;