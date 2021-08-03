import { render } from "@testing-library/react";

//👇 Imports a specific story for the test
import { H1 } from "./Heading.stories";

describe("Heading", () => {
  it("renders the Heading", () => {
    const { getByRole } = render(<H1 {...H1.args}>Lorem Ipsum</H1>);
    expect(getByRole("heading")).toHaveTextContent("Lorem Ipsum");
  });
});
