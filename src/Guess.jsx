import {useState} from 'react'
import Letters from './Letters'
import Sentence from './Sentence';
import Winner from './Winner';
import PlayAgain from './PlayAgain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'

// import { faCrown } from '@fortawesome/fontawesome-svg-icon';

export default function Guess(props) {
  // const [guess, setGuess] = useState('')
  const { state, setState } = props;
  // const [submitGuess, setSubmitGuess] = useState('')

  // const handleGuess = (event) => {
  //   setGuess(event.target.value)
  // }

  // const checkGuess = (guess, arr, letters) => {
  //   // console.log(typeof guess)
  //   const lowerGuess = guess.toLowerCase()
  //   let letter = false;

  //   if (arr.length > 0) {
  //     for (let a of arr) {
  //       if (a === lowerGuess) {
  //         return false
  //       }

  //     }
  //   }

  //   for (let lett of letters) {
  //     if (lowerGuess === lett) {
  //       letter = true;
  //     }
  //   }

  //   if (letter === false) {
  //     return false;
  //   }


  //   return true
  // }

  // const findWinner = (phraseArray, guesses, alphabet, currentGuess) => {
  //   for (let i = (phraseArray.length - 1); i >= 0; i--) {
  //     if (guesses.includes(phraseArray[i])) {
  //       phraseArray.splice(i, 1)
  //     }
  //     if (currentGuess === phraseArray[i]) {
  //       phraseArray.splice(i, 1)
  //     }

  //   }

  //   for (let j = 0; j < phraseArray.length; j++) {
  //     if (alphabet.includes(phraseArray[j])) {
  //       return false
  //     }
  //   }
  //   return true
  // }

  // const submitGuess = (event) => {
  //   let currentGuess = event.target.value.toLowerCase()
  //   if (checkGuess(currentGuess, props.state.lettersGuessed, props.state.allLetters)) {
  //     setGuess('')
  //     props.state.currentGuess = currentGuess
  //     setState((prev) => ({...prev, lettersGuessed: [...prev.lettersGuessed, currentGuess]}))
  //     const phraseArray = [...props.state.phrase.toLowerCase()]

  //     if (!phraseArray.includes(currentGuess)) {
  //       setState((prev) => ({...prev, incorrect: [...prev.incorrect, currentGuess]}))
  //     }

  //     if (findWinner(phraseArray, props.state.lettersGuessed, props.state.allLetters, props.state.currentGuess)) {
  //       console.log("Winner")
  //       setState((prev) => ({...prev, winner: true}))
  //     }
  //     return
  //   }
  //   return alert("Please submit a valid guess")
  // }

  if (state.incorrect.length >= 9) {
    return(
      <section className='lostContainer'>
        <h1>YOU LOST!</h1>
        <PlayAgain />
        <img src="https://www.nokeynoshade.party/images/nina-west.jpg" />
        
      </section>
    )
  }

  const lotsOfCrowns = [...Array(20)].map((e, i) => <FontAwesomeIcon icon={faCrown} key={i}/>)

  return(
    <section>
      {props.state.winner && <Winner state={state} setState={setState}/>}
      <Sentence state={state} useState={useState}/>
      {/* <i class="fa-solid fa-crown"></i> */}
      {/* {faCrown} */}
      {/* <FontAwesomeIcon icon="fa-solid fa-search" /> */}
      {/* <FontAwesomeIcon icon={["fas", "coffee"]} /> */}
      {/* <FontAwesomeIcon icon={faCrown} /> */}
      <section className='crown-container'>
        {lotsOfCrowns}
      </section>
      <Letters state={state} setState={setState}/>
      {/* <input type='text' id='guess' name='guess' onChange={handleGuess} value={guess}/>
      <button type='submit' onClick={submitGuess} value={guess}>Guess!</button> */}
    </section>
  )
}