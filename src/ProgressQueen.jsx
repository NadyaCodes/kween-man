import ProgressQueenItem from './ProgressQueenItem'

export default function ProgressQueen(props) {

  const queensArray = [
    'http://www.nokeynoshade.party/images/nina-flowers.jpg',
    'http://www.nokeynoshade.party/images/yara-sofia.jpg',
    'http://www.nokeynoshade.party/images/latrice-royale.jpg',
    'http://www.nokeynoshade.party/images/benda-la-creme.jpg',
    'https://vignette4.wikia.nocookie.net/logosrupaulsdragrace/images/3/34/CynthiaS9.jpg',
    'http://www.nokeynoshade.party/images/valentina.jpg',
    'http://www.nokeynoshade.party/images/monet_x_change.jpg',
    'http://www.nokeynoshade.party/images/ivy-winters.jpg',
    'https://www.nokeynoshade.party/images/nina-west.jpg'
  ]

  const letterArray = [
    'Q',
    'W',
    'E',
    'E',
    'N',
    '-',
    'M',
    'A',
    'N'
  ]

  const displayPics = props.state.incorrect.map((guess, index) => {

    return (
      <ProgressQueenItem pic={queensArray[index]} key={index}/>
    )
  })

  const displayLetters = props.state.incorrect.map((guess, index) => {
    return(letterArray[index])
  })

  return(
    <section>
      <h2 className='giant-text'>{displayLetters}</h2>
      <article className="qweens">
        {props.state.lettersGuessed && displayPics}
      </article>
    </section>
  )
}