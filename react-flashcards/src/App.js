import React from 'react';
import { Component } from 'react';

import './App.css';

import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';

import backgroundimage from './Data/images/backgroundimage.jpg';

class App extends Component {

  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [{
        id: 1,
        eng: "dog",
        french:"le chien",
        image: "/images/dogo.jpg"
    },
    {
        id: 2,
        eng: "cat",
        french:"le chat",
        image: "/images/cato.jpg"
    },
    {
        id: 3,
        eng: "fish",
        french:" le poisson",
        image: "/images/fisho.jpg"
    },
    {
        id: 4,
        eng: "cockroach",
        french:"le cafard",
        image: "/images/cockroacho.jpg"
    },
    {
        id: 5,
        eng: "hamster",
        french:"le hamster",
        image: "/images/hamstero.jpg"
    },
    {
        id: 6,
        eng: "bird",
        french:"l'oiseau",
        image: "/images/birdo.jpg"
    },
    {
      id: 7,
      eng: "horse",
      french:"le cheval",
      image: "/images/horseo.jpg"
    },
    {
      id: 8,
      eng: "cow",
      french:"la vache",
      image: "/images/cowo.jpg"
  },
  {
    id: 9,
    eng: "goat",
    french:"la chèvre",
    image: "/images/goato.jpg"
  },
  {
    id: 10,
    eng: "pig",
    french:"le cochon",
    image: "/images/pigo.jpg"
  },
  {
    id: 11,
    eng: "donkey",
    french:"l’âne",
    image: "/images/donkeyo.jpg"
  },
  {
    id: 12,
    eng: "rabbit",
    french:"le lapin",
    image: "/images/rabbito.jpg"
  },
  {
    id: 13,
    eng: "sheep",
    french:"le mouton",
    image: "/images/sheepo.jpg"
  },
  {
    id: 14,
    eng: "lamb",
    french:"l'agneau",
    image: "/images/lambo.jpg"
  },
  {
    id: 15,
    eng: "chicken",
    french:"la poule",
    image: "/images/chickeno.jpg"
  },
  {
    id: 16,
    eng: "duck",
    french:"le canard",
    image: "/images/ducko.jpg"
  },
  {
    id: 17,
    eng: "deer",
    french:"le cerf",
    image: "/images/deero.jpg"
  },
  {
    id: 18,
    eng: "bear",
    french:"l'ours",
    image: "/images/bearo.jpg"
  },
  {
    id: 19,
    eng: "squirrel",
    french:"l’écureuil",
    image: "/images/squirrelo.jpg"
  },
  {
    id: 20,
    eng: "fox",
    french:"le renard",
    image: "/images/foxo.jpg"
  },
  {
    id: 21,
    eng: "owl",
    french:"la chouette",
    image: "/images/owlo.jpg"
  },
  {
    id: 22,
    eng: "wolf",
    french:"le loup",
    image: "/images/wolfo.jpg"
  },
  {
    id: 23,
    eng: "seal",
    french:"le phoque",
    image: "/images/sealo.jpg"
  },
  {
    id: 24,
    eng: "whale",
    french:"la baleine",
    image: "/images/whaleo.jpg"
  },
  {
    id: 25,
    eng: "dolphin",
    french:"le dauphin",
    image: "/images/dolphino.jpg"
  },
  {
    id: 26,
    eng: "jellyfish",
    french:"la méduse",
    image: "/images/jellyfisho.jpg"
  },
  {
    id: 27,
    eng: "shark",
    french:"le requin",
    image: "/images/sharko.jpg"
  },
  {
    id: 28,
    eng: "penguin",
    french:"le manchot",
    image: "/images/penguino.jpg"
  },
  {
    id: 29,
    eng: "monkey",
    french:"le singe",
    image: "/images/monkeyo.jpg"
  },
  {
    id: 30,
    eng: "elephant",
    french:"l’éléphant",
    image: "/images/elephanto.jpg"
  },
  {
    id: 31,
    eng: "rhinoceros",
    french:"le rhinocéros",
    image: "/images/rhinoceroso.jpg"
  },
  {
    id: 32,
    eng: "hippopotamus",
    french:"l’hippopotame",
    image: "/images/hippopotamuso.jpg"
  },
  {
    id: 33,
    eng: "tiger",
    french:"le tigre",
    image: "/images/tigero.jpg"
  },
  {
    id: 34,
    eng: "lion",
    french:"le lion",
    image: "/images/liono.jpg"
  },
  {
    id: 35,
    eng: "giraffe",
    french:"la girafe",
    image: "/images/giraffeo.jpg"
  },
  {
    id: 36,
    eng: "zebra",
    french:"le zèbre",
    image: "/images/zebrao.jpg"
  },
  {
    id: 37,
    eng: "kangaroo",
    french:"le kangourou",
    image: "/images/kangarooo.jpg"
  },
  {
    id: 38,
    eng: "cheetah",
    french:"le guépard",
    image: "/images/cheetaho.jpg"
  },
  {
    id: 39,
    eng: "frog",
    french:"le grenouille",
    image: "/images/frogo.jpg"
  },
  {
    id: 40,
    eng: "snake",
    french:"le serpant",
    image: "/images/snakeo.jpg"
  },
  {
    id: 41,
    eng: "crocodile",
    french:"la crocodile",
    image: "/images/crocodileo.jpg"
  },
  {
    id: 42,
    eng: "lizard",
    french:"le lézard",
    image: "/images/lizardo.jpg"
  },
  {
    id: 43,
    eng: "turtle",
    french:"la tortue",
    image: "/images/turtleo.jpg"
  },
  {
    id: 44,
    eng: "alligator",
    french:"l'alligator",
    image: "/images/alligatoro.jpg"
  },
  {
    id: 45,
    eng: "mosquito",
    french:"le moustique",
    image: "/images/mosquitoo.jpg"
  },
  {
    id: 46,
    eng: "fly",
    french:"la mouche",
    image: "/images/flyo.jpg"
  },
  {
    id: 47,
    eng: "ladybug",
    french:"la coccinelle",
    image: "/images/ladybugo.jpg"
  },
  {
    id: 48,
    eng: "bee",
    french:"l'abeille",
    image: "/images/beeo.jpg"
  },
  {
    id: 49,
    eng: "butterfly",
    french:"le papillon",
    image: "/images/butterflyo.jpg"
  },
  {
    id: 50,
    eng: "spider",
    french:"l’araignée",
    image: "/images/spidero.jpg"
  },

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
      <div className="container"
      style={{
        backgroundImage: 'url('+backgroundimage+')',
        backgroundSize: "cover",
        height: "100vh",
      }}>
        <h1> Let's learn French! </h1>
        <div className="App">
          <div className="cardRow">
            <Card eng={this.state.currentCard.eng}
              french={this.state.currentCard.french}
              image={this.state.currentCard.image}
            />
          </div>
          <div className="buttonRow">
            <DrawButton drawCard={this.updateCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
