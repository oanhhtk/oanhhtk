import React from "react";

interface MyNameProps {}

const MyName: React.FC<MyNameProps> = () => {
  return (
    <>
      <h1
        className="title splitting-text-anim-1 scroll-animate words chars splitting animate__active animate__animated"
        data-splitting="chars"
        data-animate="active"
      >
        <span>
          <b>
            <span className="word" data-word="Zoé">
              <span className="char" data-char="Z">
                Z
              </span>
              <span className="char" data-char="o">
                o
              </span>
              <span className="char" data-char="é">
                é
              </span>
            </span>
          </b>{" "}
          <span className="word" data-word="Miller">
            <span className="char" data-char="M">
              M
            </span>
            <span className="char" data-char="i">
              i
            </span>
            <span className="char" data-char="l">
              l
            </span>
            <span className="char" data-char="l">
              l
            </span>
            <span className="char" data-char="e">
              e
            </span>
            <span className="char" data-char="r">
              r
            </span>
          </span>{" "}
        </span>
      </h1>
    </>
  );
};

export default MyName;
