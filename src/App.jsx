import {useState} from "react";
function app(){
  const[target]=useState(Math.floor(Math.random()*100))
  const[guess,setGuess]=useState('');
  const[message,setMessage]=useState('');
  const checkGuess=()=>{
      if(parseInt(guess)===target){
        setMessage('congragulations you guessed it right')
      }
      else{
        setMessage(guess>target?"your guess is high":"your guess is low")
      }
      setGuess('');
    };
    return(
      <div>
        <h1>guess the number</h1>
        <p>guess a number between 1 and 10</p>
        <input type="number" value={guess} onChange={(e)=>setGuess(e.target.value)}/>
          <button onClick={checkGuess}>check</button>
          <p>{message}</p>
          <p>the target number was:{target}</p>
      </div>
    );
  }

  export default app




































