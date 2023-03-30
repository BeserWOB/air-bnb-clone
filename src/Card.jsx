import React from "react";

export default function Card(props){
    const data = props.data.map((item, index) => (
        <div className="card" key={index}>
             <p className="open--spots">{item.openSpots < 1 ? "SOLD OUT" : item.location === "Online" ? "ONLINE" : ""}</p>
            <img src={item.coverImg} alt="card image"/> 
            <div className="card--stats">
                <img src="./star-img.png" className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.location}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p><span className="bold">From ${item.price}</span> / person</p>
        </div>
    ))

    return (
        <div className="cards">
            {data}
        </div>
        
        )
}