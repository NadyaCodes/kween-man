import { useEffect, useState } from "react";
import { allLetters } from "./constants";
import { submitGuess } from "./helpers";

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

  const currentGuess = props.letter.toLowerCase();
  return (
    <div className={className}>
      <button
        onClick={() => submitGuess(currentGuess, state, allLetters, setState)}
      >
        {props.letter}
      </button>
    </div>
  );
}
