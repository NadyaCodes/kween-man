import { useEffect } from "react"
import SentenceItem from "./SentenceItem"

export default function Sentence(props) {
  const {phrase, lettersGuessed, currentGuess} = props.state


  const phraseArray = [...phrase]


  useEffect(() => {
    const lowerPhrase = phrase.toLowerCase()
    for (let i = 0; i < lowerPhrase.length; i++) {
      // console.log("lowerPhrase", lowerPhrase)
      if (lettersGuessed.includes((lowerPhrase[i]))){
        // console.log("Found", lowerPhrase[i])
      }
    }
  }, [currentGuess])

  const showPhrase = phraseArray.map((letter, index) => {
    // console.log("letter", letter)
    return(
      <SentenceItem state={props.state} key={index} letter={letter}/>
    )
  })


  
  return(
    <article className="sentenceContainer">
      {/* {phrase}
      <br></br> */}
      {/* {phraseArray} */}
      {/* <br></br> */}
      {showPhrase}
    </article>
  )
}