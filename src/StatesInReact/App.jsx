import React from "react";

// 1. The below programming is often known as declarative programming where user interface is dependent upon the state variable.  


// function App(){

//    var  isDone = false;

//    const strikeThrough = {textDecoration:"line-through"}

//    return<p style={ isDone ? strikeThrough :null}>hello</p>;
// }

// export default App;



//2. Imperative programming and its example


function Strike(){
    document.getElementById("root").style.textDecoration = "line-through"; 
}

function UnStrike(){
    document.getElementById("root").style.textDecoration = "none"; 
}

function App() {

    return (
        <div>
            <p>hello</p>
            <button onClick={Strike}>strike </button>
            <button onClick={UnStrike}>UnStrike</button>
        </div>
    );
}

export default App;