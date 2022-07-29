import "./App.css";
import ProgressQueen from "./ProgressQueen";
import Guess from "./Guess";
import Error from "./Error";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    lettersGuessed: [],
    phrase: "",
    currentGuess: "",
    incorrect: [],
    winner: false,
    header: true
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

  useEffect(() => {
    if (state.incorrect.length > 0) {
      setState((prev) => ({...prev, header: false}))
    }
  }, [state.incorrect])

  return (
    <div className="App">
      {state.header === true &&
            <header className="App-header">
            <h1>Qween-Man</h1>
            <h3>...can you guess the episode?</h3>
          </header>
      }
      <main>
        {err && <Error />}
        <div className="losing-container"><ProgressQueen state={state} /></div>
        <Guess state={state} setState={setState} />
      </main>
    </div>
  );
}

export default App;
