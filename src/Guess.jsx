import {useState} from 'react'
import Letters from './Letters'
import Sentence from './Sentence';
import Winner from './Winner';
import PlayAgain from './PlayAgain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons'


export default function Guess(props) {

  const { state, setState } = props;

  if (state.incorrect.length >= 9) {
    return(
      <section className='lostContainer'>
        <h1>YOU LOST!</h1>
        <PlayAgain />
        <img src="https://www.nokeynoshade.party/images/nina-west.jpg" />
        
      </section>
    )
  }

  const lotsOfCrowns = [...Array(20)].map((e, i) => <FontAwesomeIcon icon={faCrown} key={i}/>)

  return(
    <section>
      {props.state.winner && <Winner state={state} setState={setState}/>}
      <Sentence state={state} useState={useState}/>
      <section className='crown-container'>
        {lotsOfCrowns}
      </section>
      <Letters state={state} setState={setState}/>
    </section>
  )
}