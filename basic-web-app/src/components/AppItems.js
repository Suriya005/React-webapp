import React from 'react'
import './AppItems.css'


function AppItems(props) {
    const {ntoo , onNClick} = props;
    return (
        <div className="n-item">
                    <img src={ntoo.imgUrl} onClick={()=>{onNClick(ntoo)}} />
                    <h4>{ntoo.title}</h4>
                </div>
    )
}

export default AppItems
