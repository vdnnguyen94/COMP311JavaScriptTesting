import { render, screen, cleanup } from "@testing-library/react";

// Importing the jest testing library
import '@testing-library/jest-dom'
import Text from "./Text";

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup();
})

describe("Text Component", () => {

	// Test 1
	test("Text Rendering", () => {
		render(<Text toggle={true} displayTxt={"Hello Testers"} />);
		const text = screen.getByTestId("text");
		expect(text).toBeInTheDocument();
	})

	// Test 2
	test("Displayed Text when toggle is set to true", () => {
		render(<Text toggle={true} displayTxt={"Hello Tester"} />)
		const text = screen.getByTestId("text");
		expect(text).toHaveTextContent("Hello Testers");
	})

	// Test 3
	test("Displayed Text when toggle is set to false", () => {
		render(<Text toggle={false} displayTxt={"Hello Testers"} />);
		const text = screen.getByTestId("text");
		expect(text).toBeEmptyDOMElement();
	})
})
