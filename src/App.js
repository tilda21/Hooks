import React, { useState } from 'react';
import './App.css';

function App() {
  const[count, setCount] = useState(0);
  
    return (
        <div>
            <form>
              <label>Write the number in which we'll start the counter:</label>
                <input type="number" name="count" value={count} 
                onChange={(e) => setCount(e.target.value)}/>
            </form>
            
            <p>The counter is at : {count} </p>
            <button onClick={() => setCount(count + 1)}>
                +1
            </button>
            <button onClick={() => setCount(count - 1)}>
                -1
            </button>
        </div>
    );
}

export default App;
