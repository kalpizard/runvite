import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Date from "./Date";

test("renders content", () => {
  // Definir una fecha de prueba
  const mockDate = new Date(2022, 0, 1); // Ajusta la fecha según tus necesidades

  // Renderizar el componente Date con la fecha de prueba
  const { getByText } = render(<Date fecha={mockDate} />);

  // Obtener el texto formateado esperado
  const formattedText = formatearFecha(mockDate); // Asegúrate de que formatearFecha esté disponible

  // Verificar que el contenido esperado está presente en el DOM
  expect(getByText(formattedText)).toBeInTheDocument();
});
