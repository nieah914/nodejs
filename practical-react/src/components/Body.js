import React from "react";

/*
const Body = props => (
    <div>
      <p className="App-intro">{props.text}</p>
      <p className="App-intro">{props.text2}</p>
      <p className="App-intro">{props.myFunc(1,2)}</p>
    </div>
  );

  export default Body;
  */

  
 export default  props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunc(1,2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>hiiiiiiiiiii</div>
  </div>

);