import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWriter: React.FC<{ words: string[] }> = ({ words }) => {
  const [counter, setCounter] = useState(0);

  const { text, count } = useTypewriter({
    words,
    loop: false,
    deleteSpeed: counter % words.length === 0 ? 35 : 20,
    delaySpeed: counter % words.length === 0 ? 4000 : 1400,
  });

  useEffect(() => {
    setCounter(count);

    return;
  }, [count]);

  return (
    <>
      <span>{text}</span>
      <Cursor cursorStyle="_" />
    </>
  );
};

export default TypeWriter;
