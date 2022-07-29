import "./App.css";
import ProgressQueen from "./ProgressQueen";
import Guess from "./Guess";
import Error from "./Error";
import { useEffect, useState } from "react";
import axios from "axios";
import {allLetters} from './constants'

function App() {
  const [state, setState] = useState({
    lettersGuessed: [],
    phrase: "",
    allLetters,
    currentGuess: "",
    incorrect: [],
    winner: false,
  });
  const [err, setErr] = useState("");

  useEffect(() => {
    const randomEpisode = Math.floor(Math.random() * (193 - 8 + 1) + 8);
    const fetchPhrase = async () => {
      axios
        .get(`https://www.nokeynoshade.party/api/episodes/${randomEpisode}`)
        .then((data) => {
          setState((prev) => ({ ...prev, phrase: data.data.title }));
        })
        .catch((err) => setErr(err));
    };

    fetchPhrase();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Qween-Man</h1>
        <h3>...can you guess the episode?</h3>
      </header>
      <main>
        {err && <Error />}
        <ProgressQueen state={state} />
        <Guess state={state} setState={setState} />
      </main>
    </div>
  );
}

export default App;
