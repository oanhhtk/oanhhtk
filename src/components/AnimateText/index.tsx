import React, { useEffect } from "react";

interface AnimateTextProps {
  text: string;
}

const AnimateText: React.FC<AnimateTextProps> = ({ text }) => {
  return (
    <div className="container-animation-text text-[38px]  md:text-[40px] lg:text-[50px]">
      <div className="typewriter">{text}</div>
    </div>
  );
};

export default AnimateText;
