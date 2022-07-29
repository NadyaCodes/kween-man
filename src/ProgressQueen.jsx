import ProgressQueenItem from "./ProgressQueenItem";
import {queensArray, letterArray} from './constants'

export default function ProgressQueen(props) {

  const displayPics = props.state.incorrect.map((guess, index) => {
    return <ProgressQueenItem pic={queensArray[index]} key={index} />;
  });

  const displayLetters = props.state.incorrect.map((guess, index) => {
    return letterArray[index];
  });

  return (
    <section>
      <h2 className="giant-text">{displayLetters}</h2>
      <article className="qweens">
        {props.state.lettersGuessed && displayPics}
      </article>
    </section>
  );
}
