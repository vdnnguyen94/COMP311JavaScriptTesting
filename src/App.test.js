import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import App from "./App";

// afterEach function runs after each test suite is executed
afterEach(() => {
	cleanup();
})

describe("App Component", () => {

	// Test 1: Expect text and button elements in the browser
	test("App Rendering", () => {
		render(<App />); // Rendering the App
		const text = screen.getByTestId("text");
		const button = screen.getByTestId("button");
		expect(button).toBeInTheDocument();
		expect(text).toBeInTheDocument();
	})

	// Test 2: Expect the Text to have JavaScript Unit Testing
	test("Default Text", () => {
		render(<App />);
		const text = screen.getByTestId("text");
		expect(text).toHaveTextContent("JavaScript Unit Testing");
	})

	// Test 3: Verify Room is Initially Available and Reserve Button Functionality
	test("Room is initially Available and can be Reserved", () => {
		render(<App />);
		const status = screen.getByTestId("room-status");
		expect(status).toHaveTextContent("Available");
		const reserveButton = screen.getByTestId("reserve-button");
		fireEvent.click(reserveButton);
		expect(status).toHaveTextContent("Reserved");
	})

	// Test 4: Verify Reservation Lifecycle (Reserve, Check-In, Cancel, and Check-Out)
	test("Reservation Lifecycle", () => {
		render(<App />);
		// Reserve
		fireEvent.click(screen.getByTestId("reserve-button"));
		expect(screen.getByTestId("room-status")).toHaveTextContent("Reserved");
		// Check-In
		fireEvent.click(screen.getByTestId("check-in-button"));
		expect(screen.getByTestId("room-status")).toHaveTextContent("Checked-In");
		// Check-Out
		fireEvent.click(screen.getByTestId("check-out-button"));
		expect(screen.getByTestId("room-status")).toHaveTextContent("Available");
		// Testing Cancel after Reserving again
		fireEvent.click(screen.getByTestId("reserve-button"));
		fireEvent.click(screen.getByTestId("cancel-button"));
		expect(screen.getByTestId("room-status")).toHaveTextContent("Available");
	})
})
