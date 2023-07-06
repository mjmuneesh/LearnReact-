import React from "react";
import ReactDOM from "react-dom";
import App from "./StatesInReact/App";
// import App from "./components/app";


//1. this is how you write jsx in react

// ReactDOM.render(
// <div>
// <h1>My favourite foods</h1>
// <ul>
//   <li>Bacon</li>
//   <li>James</li>
//   <li>Noodles</li>
// </ul>
// </div>,
// document.getElementById("root")
// );



//2. how to display variable in the react

// const name =  "Muneesh";
// const lucky_number  = 7;

// ReactDOM.render(
//   <div>
//     <h3>Hello {name}</h3>
//     <p>your lucky number is {lucky_number}</p>
//   </div>,
//   document.getElementById("root")
// )



//3. how to display random lucky number 

// const name =  "Muneesh"; 

// ReactDOM.render(
//   <div>
//     <h3>Hello {name}</h3>
//     <p>your lucky number is {Math.floor(Math.random()*10)}</p>
//   </div>,
//   document.getElementById("root")
// )



//4. how to display your fullname

// const fname =  "Muneesh";
// const lname =  "sharma"; 

// ReactDOM.render(
//   <div>
//     {/* <h3>Hello {`${fname} ${lname}`}</h3> */}
//     <h3>Hello { fname + " " + lname}</h3>
//     <p>your lucky number is {Math.floor(Math.random()*10)}</p>
//   </div>,
//   document.getElementById("root")
// )



//5. components 

// ReactDOM.render(<App />,document.getElementById("root"));



//6. This is how you change the state in REACT


//declarative programming 

ReactDOM.render( <App /> , document.getElementById("root"));


// imperative programming

// document.getElementById("root").style.textDecoration = "line-through"; 