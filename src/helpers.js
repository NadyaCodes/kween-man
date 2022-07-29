const checkGuess = (guess, arr, letters) => {
  const lowerGuess = guess.toLowerCase();
  let sameLetter = false;

  if (arr.length > 0) {
    for (let a of arr) {
      if (a === lowerGuess) {
        return false;
      }
    }
  }

  for (let lett of letters) {
    if (lowerGuess === lett) {
      sameLetter = true;
    }
  }

  if (sameLetter === false) {
    return false;
  }

  return true;
};

const findWinner = (phraseArray, guesses, alphabet, currentGuess) => {
  for (let i = phraseArray.length - 1; i >= 0; i--) {
    if (guesses.includes(phraseArray[i])) {
      phraseArray.splice(i, 1);
    }
    if (currentGuess === phraseArray[i]) {
      phraseArray.splice(i, 1);
    }
  }

  for (let j = 0; j < phraseArray.length; j++) {
    if (alphabet.includes(phraseArray[j])) {
      return false;
    }
  }
  return true;
};

export function submitGuess(guess, state, letters, setState){
  if (checkGuess(guess, state.lettersGuessed, letters)) {
    setState((prev) => ({
      ...prev,
      lettersGuessed: [...prev.lettersGuessed, guess],
      currentGuess: guess,
    }));
    const phraseArray = [...state.phrase.toLowerCase()];

    if (!phraseArray.includes(guess)) {
      setState((prev) => ({
        ...prev,
        incorrect: [...prev.incorrect, guess],
      }));
    }

    if (findWinner(phraseArray, state.lettersGuessed, letters, guess)) {
      setState((prev) => ({ ...prev, winner: true }));
    }
    return;
  }
  return alert("Please submit a valid guess");
};

// module.exports = { findWinner, checkGuess, submitGuess };
