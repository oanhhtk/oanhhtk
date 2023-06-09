import React from "react";

interface HeadingProps {
  title: string;
  className: string;
  aosAnimation: Record<string, string>;
}

const Heading: React.FC<Partial<HeadingProps>> = ({
  title,
  className,
  aosAnimation,
}) => {
  return (
    <>
      <div {...aosAnimation}>
        <p
          className={`text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-sky-200 to-fuchsia-300 bg-clip-text text-transparent ${className}`}
        >
          {title}
        </p>
      </div>
    </>
  );
};

export default Heading;
