import React from 'react';
import { Component } from 'react';

import './App.css';

import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

class App extends Component {

  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [{
        id: 1,
        eng: "chicken",
        french:"le poulet",
        image: "/images/goat_white_tongue.jpg"
    },
    {
        id: 2,
        eng: "duck",
        french:"la vache",
        image: "/images/goat_white_tongue.jpg"
    },
    {
        id: 3,
        eng: "goat",
        french:" l'âne",
        image: "/images/goat_white_tongue.jpg"
    },
    {
        id: 4,
        eng: "ant",
        french:" l'ângge",
        image: "/images/goat_white_tongue.jpg"
    },
    {
        id: 5,
        eng: "duck",
        french:"la chèvre",
        image: "/images/goat_white_tongue.jpg"
    }
    ],
      currentCard:{}
  }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    
    
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
   
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
    
  }


  render(){
    return (
      <div className="App">
        <div className="cardRow">
          <Card eng={this.state.currentCard.eng}
                french={this.state.currentCard.french}
                image={this.state.currentCard.image}
                />                
        </div>
        <div className="buttonRow">
            <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>

    );
  }
}

export default App;
