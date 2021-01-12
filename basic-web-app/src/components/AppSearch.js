import React from 'react'
import './AppSearch.css'

function AppSearch(props) {
    const {value , changeValue} = props;
    return (
        <div className="app-search">
                <input
                    className="app-search-input"
                    type="text"
                    placeholder="Search"
                    value={value}
                    onChange={(event)=>{changeValue(event.target.value)}}
                />
            </div>
    )
}

export default AppSearch
