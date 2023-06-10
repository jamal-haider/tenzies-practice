import { useEffect, useState } from 'react'
import './App.css'
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
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

  function toggleDice(id){
    setDice(prevDice => prevDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die
    }))
  }

  function rollDice(){
    if(tenzies){
      setTenzies(false)
      setDice(allNewDice())
    }
    else{
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))
    } 
  }

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstDie = dice[0].value
    const allSame = dice.every(die => die.value === firstDie)
    if(allHeld && allSame){
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])
  

  const diceElement = dice.map(die => <Die key={die.id} data={die} toggleDice={() => toggleDice(die.id)} />)

  return (
    <div className='container'>
      {tenzies && <Confetti />}
      <h1 className='tenzies-heading'>Tenzies</h1>
      <p className='tenzies-description'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-list">
        {diceElement}
      </div>
      <button className='tenzies-btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    </div>
  )
}

export default App
