import "./DarkToggle.css";

import type { Properties, Property } from "csstype";
import { useEffect, useState } from "react";

export interface DarkToggleProps {
  size?: Property.Width;
  initiallyChecked?: boolean;
}

export const DarkToggle: React.FC<DarkToggleProps> = ({
  size = "1rem",
  initiallyChecked = false,
}) => {
  const [checked, setChecked] = useState(initiallyChecked);

  const onSelectMode = (checked: boolean) => {
    setChecked(checked);
    if (checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  const onChange = () => onSelectMode(!checked);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => onSelectMode(e.matches));

    onSelectMode(window.matchMedia("(prefers-color-scheme: dark)").matches);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const style: Properties = {
    ["--size" as Property.Width]: size,
  };

  return (
    <input
      type="checkbox"
      className="dark-toggle"
      style={style}
      onChange={onChange}
      checked={checked}
    />
  );
};
