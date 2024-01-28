// ControlMetas.test.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ControlMetas from "./ControlMetas";

describe("ControlMetas Component", () => {
  test("renders ControlMetas component with default values", () => {
    const { getByText, getByRole } = render(<ControlMetas />);
    
    // Check if the "REINICIAR" button is rendered
    const resetButton = getByText("REINICIAR");
    expect(resetButton).toBeInTheDocument();

    // Check if the CircularProgressbar is rendered
    const circularProgressbar = getByRole("progressbar");
    expect(circularProgressbar).toBeInTheDocument();

    // Check if the meta text is rendered
    const metaText = getByText("In progress:");
    expect(metaText).toBeInTheDocument();
  });

  test("calls handleResetApp function when 'REINICIAR' button is clicked", () => {
    const mockHandleResetApp = jest.fn();
    const { getByText } = render(<ControlMetas handleResetApp={mockHandleResetApp} />);
    
    // Trigger click event on the "REINICIAR" button
    const resetButton = getByText("REINICIAR");
    fireEvent.click(resetButton);

    // Check if the handleResetApp function is called
    expect(mockHandleResetApp).toHaveBeenCalled();
  });

  // Add more tests for other functionalities and edge cases
});
