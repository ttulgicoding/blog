import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const P = ({ children }: Props) => {

  const style = {
    fontWeight: "500",
    fontSize: "1.1rem",
  };
  return <span style={style}>{children}</span>;
};