import React, { useEffect, useState } from "react";

interface Props {
  role: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
}

export const Heading = ({ role: Role = "h1", children }: Props) => {
  const [size, setSize] = useState("");

  const style = {
    fontWeight: "900",
    fontSize: size,
  };

  useEffect(() => {
    switch (Role) {
      case "h1":
        setSize("5rem");
        break;
      case "h2":
        setSize("4rem");
        break;
      case "h3":
        setSize("3rem");
      case "h4":
        setSize("2rem");
        break;
    }
  }, [Role]);

  return <Role style={style}>{children}</Role>;
};
