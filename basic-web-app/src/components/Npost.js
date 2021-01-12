import React  from 'react'
import './Npost.css'

function Npost(props) {
    const {ntoo , onBgClick } = props
    return (
        <div className="n-post">
            <div className="n-post-bg" onClick={onBgClick} ></div>
            <div className="n-post-content">
                <img src={ntoo.fullUrl}  />
                <h4>{ntoo.title}</h4>
            </div>
        </div>
    )
}

export default Npost
