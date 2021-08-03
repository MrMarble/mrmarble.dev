import type { Properties, Property } from "csstype";
import React, { useEffect, useState } from "react";

import styles from "./DarkToggle.module.css";

export interface DarkToggleProps {
  size?: Property.Width;
  initiallyChecked?: boolean;
}

export const DarkToggle: React.FC<
  DarkToggleProps & React.HTMLAttributes<HTMLInputElement>
> = ({ size = "1rem", initiallyChecked = false, className, ...rest }) => {
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
      className={styles.darktoggle + (className ? " " + className : "")}
      style={style}
      onChange={onChange}
      checked={checked}
      {...rest}
    />
  );
};
