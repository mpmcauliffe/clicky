import React from 'react';


const Card = (props) => (
    <div>
        {props.imageCards.map((index) => (
            <img
                alt={`player_${index}`}
                key={index}
                id={index}
                src={require(`../images/cards/${index}.png`).default}
                className="card"
                onClick={props.handleSelection}
            />
        ))}
    </div>
);

export default Card;

