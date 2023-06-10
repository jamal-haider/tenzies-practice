import { useState } from 'react'
import './App.css'
import Die from "./Die"
import { nanoid } from "nanoid"

function App() {
  const [dice, setDice] = useState(allNewDice())
  function generateNewDie(){
    return {
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false
    }
  }

  function allNewDice(){
    const diceArray = []
    for (let i=0; i<10; i++){
      diceArray.push(generateNewDie())
    }
    return diceArray
  }


  const diceElement = dice.map(die => <Die key={die.id} data={die} />)

  return (
    <div className='container'>
      {diceElement}
    </div>
  )
}

export default App
