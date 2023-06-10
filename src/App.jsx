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
      <h1 className='tenzies-heading'>Tenzies</h1>
      <p className='tenzies-description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-list">
        {diceElement}
      </div>
      <button className='tenzies-btn'>Roll</button>
    </div>
  )
}

export default App
