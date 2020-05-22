import React from 'react'

function Card({img,name,title}) {
    return (
        <div className="card-wrapper">
            <img src={img} alt={name}/>
            <h1>{name}</h1>
            <h4>{title}</h4>
        </div>
    )
}

export default Card
