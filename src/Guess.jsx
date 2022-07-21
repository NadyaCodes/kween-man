import {useState} from 'react'
import Letters from './Letters'
import Sentence from './Sentence';

export default function Guess(props) {
  const [guess, setGuess] = useState('')
  const {state, setState} = props;
  // const [submitGuess, setSubmitGuess] = useState('')

  const handleGuess = (event) => {
    setGuess(event.target.value)
  }

  const checkGuess = (guess, arr, letters) => {
    // console.log(typeof guess)
    const lowerGuess = guess.toLowerCase()
    let letter = false;

    if (arr.length > 0) {
      for (let a of arr) {
        if (a === lowerGuess) {
          return false
        }

      }
    }

    for (let lett of letters) {
      if (lowerGuess === lett) {
        letter = true;
      }
    }

    if (letter === false) {
      return false;
    }


    return true
  }

  const submitGuess = (event) => {
    let currentGuess = event.target.value.toLowerCase()
    // console.log('currentGuess', currentGuess)
    if (checkGuess(currentGuess, props.state.lettersGuessed, props.state.allLetters)) {
      console.log("check passed")
      setGuess('')
      props.state.currentGuess = currentGuess
      // props.state.lettersGuessed.push(currentGuess)
      setState((prev) => ({...prev, lettersGuessed: [...prev.lettersGuessed, currentGuess]}))
      //Here I can check to see if it's a correct guess or not
      const phraseArray = [...props.state.phrase.toLowerCase()]
      // console.log("phraseArray: ", phraseArray)
      // console.log("currentGuess: ", currentGuess)
      if (!phraseArray.includes(currentGuess)) {

        setState((prev) => ({...prev, incorrect: [...prev.incorrect, currentGuess]}))
        console.log("state", state)
      }
      return
    }
    return alert("Please submit a valid guess")
  }

  if (state.lettersGuessed.length >= 9) {
    return(
      <section>
        <img src="http://www.nokeynoshade.party/images/ivy-winters.jpg" />
        YOU LOST!
      </section>
    )
  }

  return(
    <section>
      <Sentence state={state} useState={useState}/>
      <Letters state={state}/>
      <input type='text' id='guess' name='guess' onChange={handleGuess} value={guess}/>
      <button type='submit' onClick={submitGuess} value={guess}>Guess!</button>
    </section>
  )
}