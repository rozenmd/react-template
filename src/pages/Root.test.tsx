import { render, screen } from "@testing-library/react";
import { RootPage } from "./Root";

test("renders todo in title", () => {
  render(<RootPage />);
  const linkElement = screen.getByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});
