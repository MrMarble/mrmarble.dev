import { fireEvent, render } from "@testing-library/react";

import { DarkToggleProps } from "./DarkToggle";
import { DarkToggle } from "./DarkToggle.stories";

const renderComponent = (args?: DarkToggleProps) =>
  render(<DarkToggle {...args} />);

const mockMatchMedia = (matches = false) =>
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

describe("Dark Toggle", () => {
  beforeEach(() => {
    mockMatchMedia();
  });

  it("renders the component", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("checkbox")).toBeInTheDocument();
  });

  describe("when media query does not match", () => {
    it("body doesn't have `dark` class", () => {
      renderComponent();
      expect(document.body.classList).not.toContain("dark");
    });
  });

  describe("when media query matches", () => {
    beforeEach(() => {
      mockMatchMedia(true);
    });
    it("adds `dark` class to body", () => {
      renderComponent();

      expect(document.body).toHaveClass("dark");
    });
  });

  describe("when checked", () => {
    it("adds `dark` class to body", () => {
      const { getByRole } = renderComponent();

      fireEvent.click(getByRole("checkbox"));

      expect(document.body).toHaveClass("dark");
    });
  });
});
