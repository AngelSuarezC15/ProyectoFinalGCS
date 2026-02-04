import { render, screen } from "@testing-library/react";
import App from "./App";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

test("la app renderiza sin romper", async () => {
  axios.get.mockResolvedValue({ data: [] }); // respuesta falsa

  render(<App />);

  expect(document.body).toBeInTheDocument();
});
