import React, { useEffect } from "react";

interface AnimateTextProps {
  text: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({ text }) => {
  return (
    <>
      <div className="container-animation-text">
        <div className="typewriter">{text}</div>
      </div>
    </>
  );
};

export default AnimateText;
