import React, { useEffect, useState } from "react";
import classes from "./HighLight.module.css";

interface Props {
  bgColor: string;
  fc: string;
  children: React.ReactNode;
}

export const HighLight = ({
  bgColor = "#ff6db7",
  fc = "white",
  children,
}: Props) => {
  const [fontColor, setFontColor] = useState(fc);
  const [backColor, setBackColor] = useState(bgColor);

  const style = {
    color: fontColor,
    fontWeight: "700",
    "--highlight-bg-color": backColor,
  };

  useEffect(() => {
    setFontColor(fc);
    setBackColor(bgColor);
  }, [fc, bgColor]);

  return (
    <span
      style={style}
      className={`${classes.highlight} ${classes["highlight-bg"]}`}
    >
      {children}
    </span>
  );
};