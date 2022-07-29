import { useState, useEffect } from "react";
import { allLetters } from "./constants";
export default function SentenceItem(props) {
  const [show, setShow] = useState(false);
  const { currentGuess } = props.state;

  const currentLetter = props.letter.toLowerCase();
  let finalLetter = props.letter;

  useEffect(() => {
    if (allLetters.includes(currentLetter)) {
      if (currentGuess === currentLetter) {
        console.log("current guess is right");
        setShow(true);
      }
    }
    if (!allLetters.includes(currentLetter)) {
      setShow(true);
    }
  }, [currentGuess]);

  return <div className="letter">{show === true ? finalLetter : "__"}</div>;
}
