import {useState, useEffect} from 'react'
export default function SentenceItem(props) {
  const [show, setShow] = useState(false)
  const {currentGuess, allLetters} = props.state

  const currentLetter = props.letter.toLowerCase()
  let finalLetter = props.letter

  useEffect(() => {
    if (allLetters.includes(currentLetter)) {
      // console.log(currentLetter)
      if (currentGuess === currentLetter) {
        console.log("current guess is right")
        setShow(true)
      }
    }
    if (!allLetters.includes(currentLetter)) {
      // console.log("not a letter")
      setShow(true)
    }

  }, [currentGuess])

  return(<div className="letter">
    {(show === true) ? finalLetter : '__'}
    {/* <br/>
    {props.letter} */}
    {/* <br/>
    Current Guess: {currentGuess} */}
    </div>)
}