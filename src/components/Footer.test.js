// Footer.test.jsx
import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe('Footer Component', () => {
  test('renders version information', () => {
    const { getByText } = render(<Footer />);
    const versionElement = getByText(/Version 1.0.0/i);
    expect(versionElement).toBeInTheDocument();
  });

  test('has the correct class names', () => {
    const { container } = render(<Footer />);
    const footerElement = container.querySelector('.footer');
    const footElement = container.querySelector('.foot');
    const imagenfooterElement = container.querySelector('.imagenfooter');

    expect(footerElement).toBeInTheDocument();
    expect(footElement).toBeInTheDocument();
    expect(imagenfooterElement).toBeInTheDocument();
  });

  // Agrega más pruebas según sea necesario
});



