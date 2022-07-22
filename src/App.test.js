import { render, cleanup } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("App", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders text on the page", () => {
    const { queryByText } = render(<App />);
    expect(queryByText(/qween-man/i)).toBeInTheDocument();
    expect(queryByText(/randomwordnotonsite/i)).not.toBeInTheDocument();
  })

});