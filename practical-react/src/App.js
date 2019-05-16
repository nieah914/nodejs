import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

import  ImageSlider from "./components/ImageSlider";
import {Header} from "./components/Header";
import MyForm from "./components/MyForm";

class App extends Component {
  
  state = {
    visible : true,
    whichComponentToShow : "Form"
  };

    render() {
      if(this.state.whichComponentToShow === 'Form') {
        return(
          <div className="App">
            <h1>COUNTER</h1>
            <Counter/>
          </div>
        )
      }else {
        return(
          <div>
            no such a page
          </div>
        )
      }

/*
      else if(this.state.whichComponentToShow === 'ImageSlider') {
        return (
          <div className="App">
            <ImageSlider/>
            <button onClick={()=>{
              this.setState({whichComponentToShow:"Counter"});
            }}> show counter</button>
          </div>
        )
      }else if (this.state.whichComponentToShow === 'Counter') {
        return (
          <div className="App">
            <Counter/>
            <button onClick={()=>{
              this.setState({whichComponentToShow:"Header"});
            }}> show Header</button>
          </div>
        )
      }else if (this.state.whichComponentToShow === 'Header') {
        return (
          <div className="App">
            <Header/>
            <button onClick={()=>{
              this.setState({whichComponentToShow:"ImageSlider"});
            }}> show ImageSlider</button>
          </div>
        )
      }
      */


      return null;
      

    }
}
/*
  카운터 예제
class App extends Component {
  add(a,b) {
    return a + b;
  }
    render() {
      console.log("render function called");
        return (
            <div className="App">
                <Header 
                title={"Hello from app"} 
                num={7} 
                myArr={[10,2,3]}
                myFunc={this.add}
                myObj={{
                  a: 5,
                  b: 6
                }}/>
                <Body2/>
                
                <Body myFunc={this.add} text = "i am cool" text2="i am coll 2" />
                <Counter initialCount={0} />
                <Counter initialCount={10} />
            </div>
        );
    }
}
*/
export default App;