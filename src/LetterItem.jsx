import { useEffect, useState } from "react";
import { findWinner, checkGuess } from "./helpers";
import {allLetters} from './constants'

export default function LetterItem(props) {
  const [className, setClassName] = useState("letterGuesser");
  const { state, setState } = props;

  useEffect(() => {
    for (let letter of state.lettersGuessed) {
      if (letter === props.letter) {
        setClassName("letterGuesser guessed");
      }
    }
  }, [state.lettersGuessed]);

  const submitGuess = () => {
    let currentGuess = props.letter.toLowerCase();
    if (checkGuess(currentGuess, state.lettersGuessed, allLetters)) {
      state.currentGuess = currentGuess;
      setState((prev) => ({
        ...prev,
        lettersGuessed: [...prev.lettersGuessed, currentGuess],
      }));
      const phraseArray = [...state.phrase.toLowerCase()];

      if (!phraseArray.includes(currentGuess)) {
        setState((prev) => ({
          ...prev,
          incorrect: [...prev.incorrect, currentGuess],
        }));
      }

      if (
        findWinner(
          phraseArray,
          state.lettersGuessed,
          allLetters,
          state.currentGuess
        )
      ) {
        setState((prev) => ({ ...prev, winner: true }));
      }
      return;
    }
    return alert("Please submit a valid guess");
  };

  return (
    <div className={className}>
      <button onClick={() => submitGuess()}>{props.letter}</button>
    </div>
  );
}
