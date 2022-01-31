import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);
test("renders learn react link", () => {
	render(<App />);
	const titleElement = screen.getByText(/2021 Season Averages/i);
	expect(titleElement).toBeInTheDocument();

	const stephName = screen.getByText("Steph Curry");
	expect(stephName).toBeInTheDocument();
});
