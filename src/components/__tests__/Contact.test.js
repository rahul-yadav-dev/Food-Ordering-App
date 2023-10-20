import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe block for grouping test cases
describe("Contact us test cases", () => {
  // test or it both are alias
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });

  it("Should load input name in contact us component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    const inputMessage = screen.getByPlaceholderText("message");
    expect(inputName).toBeInTheDocument();
    expect(inputMessage).toBeInTheDocument();
  });

  it("Should load two input boxes in contact us component", () => {
    render(<Contact />);
    // this is react element
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toStrictEqual(2);
  });
});
