import React, {useState} from 'react';
import './App.css';

   // Component As Function .. returns HTML(JSX)

function App() {

  const [codingBootcamp, setCodingBootcamp] = useState("");    // creatin an initial state. 
  const [count, setCount] = useState(0);     // creatin an initial state.

    return (

    <div className="App">
          <h1>  Coding Bootcamp: {codingBootcamp} </h1> 
     
          <button onClick={ 
                      () => setCodingBootcamp("MERN Full Stack" )
                } 
            >
            Click Me
          </button>

          <h1>  Counter Values: {count} </h1> 
          <button onClick={ () => setCount(count + 1) } >
              Count
          </button>
          
    </div>
    
  );
}
export default App;

 

