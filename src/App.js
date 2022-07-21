import logo from './logo.svg';
import './App.css';
import ProgressQueen from './ProgressQueen';
import Sentence from './Sentence';
import Letters from './Letters';
import Guess from './Guess';
import Error from './Error';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  const [state, setState] = useState({lettersGuessed: [], phrase: '', allLetters, currentGuess: '', incorrect: [], winner: false})
  const [err, setErr] = useState('')


  useEffect(() => {
    const randomEpisode = Math.floor(Math.random() * (193 - 8 + 1) + 8)
    const fetchPhrase = async () => {
      axios.get(`https://www.nokeynoshade.party/api/episodes/${randomEpisode}`).then((data) => {
        setState((prev) => ({...prev, phrase: data.data.title}))
      }).catch((err) => (setErr(err)))
    }
    
    fetchPhrase()
    // console.log(state)
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Qween-Man</h1>
        <h3>...can you guess the episode?</h3>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <main>
        {err && <Error />}

        {/* <Sentence state={state}/> */}
        {/* <Letters state={state}/> */}
        <ProgressQueen state={state}/>
        <Guess state={state} setState={setState}/>
        
      </main>
    </div>
  );
}

export default App;
