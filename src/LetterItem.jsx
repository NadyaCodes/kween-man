import {useEffect, useState} from 'react';


export default function LetterItem(props) {
  const [className, setClassName] = useState('letterGuesser')

  useEffect(() => {
    for (let letter of props.state.lettersGuessed) {
      if (letter === props.letter) {
        console.log(letter)
        setClassName('letterGuesser guessed')
      }
    }
  }, [props.state.lettersGuessed])

  return(<div className={className}>{props.letter}</div>)
}