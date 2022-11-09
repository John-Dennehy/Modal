import { render, screen } from "@testing-library/react";
import HomePage from "./Home";

describe("<HomePage />", () => {
  it("has a button ", () => {
    render(<HomePage />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Open Modal");
  });

  // test("trigger modal when clicking the button", async () => {
  //   const user = userEvent.setup();
  //   render(<HomePage />);

  //   await user.click(screen.getByRole("button", { name: /open modal/i }));

  //   // ...assertions...
  //   expect(screen.getByText("Open Modal")).toBeInTheDocument();
  // });
});
