import React from 'react'
import './css/Card.css'

function Card({img,name,title}) {

    return (
        <div className="card-wrapper">
            <div className="front">
            <img className="image img-thumbnail" src={img} alt={name}/>
            </div>
            <div className="back">
                <div className="back-content middle">
                <h3>{name}</h3>
                <h4 style={{fontSize:'18px',fontStyle:'italic'}}>~{title}</h4>
            </div>
            </div>
        </div>
    )
}

export default Card
