import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  constructor(props){
    super(props);
       this.state = {
      count: 0
    };
  }
 
  render(){
  
//console.log(this.state.count);
 
    return (
      <div className="App">
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <button onClick =  {() =>{this.setState({count:this.state.count+1})}}>Click to Count</button>
      </div>
    )

  }

}

export default App;
