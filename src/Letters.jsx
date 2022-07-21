import LetterItem from './LetterItem'

export default function Letters(props) {

  const {state, setState} = props;
  
  const lettersDisplay = state.allLetters.map((letter, index) => {
    return(
      <LetterItem letter={letter} key={index} state={state} setState={setState}/>
    )
  })

  return(<article className='lettersDisplay'>{lettersDisplay}</article>)
}