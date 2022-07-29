import LetterItem from "./LetterItem";
import {allLetters} from './constants.js'

export default function Letters(props) {
  const { state, setState } = props;

  const lettersDisplay = allLetters.map((letter, index) => {
    return (
      <LetterItem
        letter={letter}
        key={index}
        state={state}
        setState={setState}
      />
    );
  });

  return <article className="lettersDisplay">{lettersDisplay}</article>;
}
