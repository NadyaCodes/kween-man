import { useEffect } from "react"
import SentenceItem from "./SentenceItem"

export default function Sentence(props) {
  const {phrase, lettersGuessed, currentGuess} = props.state


  const phraseArray = [...phrase]


  useEffect(() => {
    const lowerPhrase = phrase.toLowerCase()
    for (let i = 0; i < lowerPhrase.length; i++) {
      if (lettersGuessed.includes((lowerPhrase[i]))){
      }
    }
  }, [currentGuess])

  const showPhrase = phraseArray.map((letter, index) => {
    return(
      <SentenceItem state={props.state} key={index} letter={letter}/>
    )
  })
  
  return(
    <article className="sentenceContainer">
      {showPhrase}
    </article>
  )
}