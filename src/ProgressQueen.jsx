import ProgressQueenItem from './ProgressQueenItem'
import {useState} from 'react'

export default function ProgressQueen(props) {


  const queensArray = [
    'http://www.nokeynoshade.party/images/pandora-boxx.jpg',
    'http://www.nokeynoshade.party/images/yara-sofia.jpg',
    'http://www.nokeynoshade.party/images/latrice-royale.jpg',
    'http://www.nokeynoshade.party/images/benda-la-creme.jpg',
    'https://vignette4.wikia.nocookie.net/logosrupaulsdragrace/images/3/34/CynthiaS9.jpg',
    'http://www.nokeynoshade.party/images/valentina.jpg',
    'http://www.nokeynoshade.party/images/monet_x_change.jpg',
    'https://www.nokeynoshade.party/images/nina-west.jpg',
    'http://www.nokeynoshade.party/images/ivy-winters.jpg'
  ]

  const displayPics = props.state.incorrect.map((guess, index) => {
    console.log("props.state", props.state)

    return (
      <ProgressQueenItem pic={queensArray[index]} key={index}/>
    )
  })

  return(
    <article className="qweens">
      {props.state.lettersGuessed && displayPics}
    </article>
  )
}