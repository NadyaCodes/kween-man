import { render, cleanup } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Guess from "./Guess";
import allLetters from "./constants";
window.scrollTo = jest.fn();

describe("Guess", () => {
  afterEach(cleanup);
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.clearAllMocks();
  });

  let state = {
    lettersGuessed: ["b", "c"],
    phrase: "Episode",
    allLetters,
    currentGuess: "a",
    incorrect: ["b"],
    winner: false,
  };

  it("renders without crashing", () => {
    render(<Guess state={state} />);
  });

  it("renders Loser component if there's a loser", () => {
    const { queryByText } = render(<Guess state={state} />);
    expect(queryByText(/LOST/i)).not.toBeInTheDocument();

    state = {
      lettersGuessed: ["b", "c", "d", "e", "f", "g", "h", "i", "j"],
      phrase: "Episode",
      allLetters,
      currentGuess: "a",
      incorrect: ["b", "c", "d", "e", "f", "g", "h", "i", "j"],
      winner: false,
    };
    render(<Guess state={state} />);
    expect(queryByText(/LOST/i)).toBeInTheDocument();
  });

  it("renders Winner component if there's a winner", () => {
    const { queryByText } = render(<Guess state={state} />);
    expect(queryByText(/condragulations/i)).not.toBeInTheDocument();

    state = {
      lettersGuessed: ["b", "c", "d", "e", "f", "g", "h", "i", "j"],
      phrase: "Episode",
      allLetters,
      currentGuess: "a",
      incorrect: ["b", "c", "d", "e", "f", "g", "h"],
      winner: true,
    };

    act(() => {
      render(<Guess state={state} />);
    });

    expect(queryByText(/condragulations/i)).toBeInTheDocument();
  });
});
