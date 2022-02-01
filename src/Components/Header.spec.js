import React from "react";
import Header from "./Header";
import { render, cleanup, screen } from "@testing-library/react";
import ReactDOM from "react-dom";

afterEach(cleanup);

describe("Header Component", () => {
	beforeEach(() => {
		render(<Header />);
	});

	it("contains correct header text", () => {
		expect(screen.getByText("2021 Season Averages")).toBeInTheDocument();
	});
});
