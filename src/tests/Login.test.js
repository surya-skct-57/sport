import { render, screen } from "@testing-library/react";
import App from "../App";

test("checking for login heading", () => {
  render(<App />);
  const content = screen.getByText(/password/i);
  expect(content).toBeInTheDocument();
});
