import React, { useEffect, useState } from 'react';

interface Props {
  role: string
  children: React.ReactNode;
}

export const Emphasis = ({ role: Role = "1.4", children }: Props) => {
  const [size, setSize] = useState('');

  const style = {
    fontWeight: "700",
    fontSize: size,
  };

  useEffect(() => {
    setSize(Role+"rem");
  }, [Role]);

  return <span style={style}>{children}</span>;
};