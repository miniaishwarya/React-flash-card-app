import React from 'react';
import './Card.css';

import goat_white_tongue from '../Data/images/goat_white_tongue.jpg'

const Card = (props) => (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <div className="eng">
                    {props.eng}
                        <img src={props.image} alt="ggoat"/>
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