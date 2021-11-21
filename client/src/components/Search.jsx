import React from 'react'
import './Search.css'

const Search = (props) => {
    return (
      <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
        
            <input
                className="search-input"
                value={props.value}
                onChange={(e) => props.onChange(e)}
                name="search"
                placeholder="Filter by Author"
                type="text"
                autoFocus
        />
          <img src="./assets/magnifier.png" alt="magnifying glass for search" id="magnifier"/>
        </form>
    )
}

export default Search