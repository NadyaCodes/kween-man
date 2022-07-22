const checkGuess = (guess, arr, letters) => {
  const lowerGuess = guess.toLowerCase()
  let sameLetter = false;

  if (arr.length > 0) {
    for (let a of arr) {
      if (a === lowerGuess) {
        return false
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


  return true
}

const findWinner = (phraseArray, guesses, alphabet, currentGuess) => {
  for (let i = (phraseArray.length - 1); i >= 0; i--) {
    if (guesses.includes(phraseArray[i])) {
      phraseArray.splice(i, 1)
    }
    if (currentGuess === phraseArray[i]) {
      phraseArray.splice(i, 1)
    }

  }

  for (let j = 0; j < phraseArray.length; j++) {
    if (alphabet.includes(phraseArray[j])) {
      return false
    }
  }
  return true
}


module.exports = {findWinner, checkGuess}