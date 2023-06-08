import React from "react";

interface TitleProps {
  title: string;
  className: string;
  aosAnimation: Record<string, string>;
}

const Title: React.FC<Partial<TitleProps>> = ({
  title,
  className,
  aosAnimation,
}) => {
  return (
    <div {...aosAnimation}>
      <h1
        className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ${className}`}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
