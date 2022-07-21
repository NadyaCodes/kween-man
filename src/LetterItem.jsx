import {useEffect, useState} from 'react';


export default function LetterItem(props) {
  const [className, setClassName] = useState('letterGuesser')
  // const [guess, setGuess] = useState('')
  const {state, setState} = props

  useEffect(() => {
    for (let letter of state.lettersGuessed) {
      if (letter === props.letter) {
        setClassName('letterGuesser guessed')
      }
    }
  }, [state.lettersGuessed])

  const checkGuess = (guess, arr, letters) => {
    // console.log(typeof guess)
    const lowerGuess = guess.toLowerCase()
    let sameLetter = false;

    if (arr.length > 0) {
      for (let a of arr) {
        if (a === lowerGuess) {
          return false
        }

      }
    }

    for (let lett of letters) {
      if (lowerGuess === lett) {
        sameLetter = true;
      }
    }

    if (sameLetter === false) {
      return false;
    }


    return true
  }

  const findWinner = (phraseArray, guesses, alphabet, currentGuess) => {
    for (let i = (phraseArray.length - 1); i >= 0; i--) {
      if (guesses.includes(phraseArray[i])) {
        phraseArray.splice(i, 1)
      }
      if (currentGuess === phraseArray[i]) {
        phraseArray.splice(i, 1)
      }

    }

    for (let j = 0; j < phraseArray.length; j++) {
      if (alphabet.includes(phraseArray[j])) {
        return false
      }
    }
    return true
  }

  const submitGuess = (event) => {
    let currentGuess = props.letter.toLowerCase()
    if (checkGuess(currentGuess, state.lettersGuessed, state.allLetters)) {
      // setGuess('')
      state.currentGuess = currentGuess
      setState((prev) => ({...prev, lettersGuessed: [...prev.lettersGuessed, currentGuess]}))
      const phraseArray = [...state.phrase.toLowerCase()]

      if (!phraseArray.includes(currentGuess)) {
        setState((prev) => ({...prev, incorrect: [...prev.incorrect, currentGuess]}))
      }

      if (findWinner(phraseArray, state.lettersGuessed, state.allLetters, state.currentGuess)) {
        setState((prev) => ({...prev, winner: true}))
      }
      return
    }
    return alert("Please submit a valid guess")
  }

  // const submitGuess = () => {
    
  // }

  return(<div className={className}><button onClick={() => submitGuess()}>{props.letter}</button></div>)
}