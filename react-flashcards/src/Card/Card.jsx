import React from 'react';
import './Card.css';

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="image-container">
                    <img src={props.image} alt={props.eng}/>
                </div>
            </div>
            <div className="back">
                <div className="french">
                    {props.french}
                </div>
            </div>
        </div>
    </div>
)

export default Card;