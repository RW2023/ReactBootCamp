import './App.css';
import Hello from './Components/Hello';
import React from 'react';
import NumPicker from './Components/NumPicker';
import Machine from './Components/Machine';

function App() {
  return (
    <div className="App">
     <Hello />
     <NumPicker />
     <Machine
     s1='🍊' 
        s2='🍒' 
        s3='🍒' 
     />
    </div>
  );
}

export default App;
