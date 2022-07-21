import {useEffect, useState} from 'react';


export default function LetterItem(props) {
  const [className, setClassName] = useState('')

  useEffect(() => {
    for (let letter of props.state.lettersGuessed) {
      if (letter === props.letter) {
        console.log(letter)
        setClassName('guessed')
      }
    }
  }, [props.state.lettersGuessed])

  return(<div className={className}>{props.letter}</div>)
}