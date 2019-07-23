import React, { Component } from 'react';

import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/foodbox/Foodbox.js';
import Addform from './components/addform/Addform.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      Allfood: foods
      
    }
  }

showFoodboxes = ()=>{

  return (
    this.state.Allfood.map((foodx, theindex)=>{
      return <Foodbox
      key={theindex}
      thename={foodx.name}
      thecalories={foodx.calories}
      theimage={foodx.image}
      thequantity={foodx.quantity}
      />
    })
    
  )
} 

openModal = ()=>{
  console.log("was clicked modal")
}

  render() {
    return (
      <div className="App">
        
        <button onClick = { this.openModal }>ADD new food</button>
        <div> =================</div>
        <Addform/>
        <div>--------------------------</div>
       { this.showFoodboxes()}
        
       
      </div>
    );
  }

}

export default App;
