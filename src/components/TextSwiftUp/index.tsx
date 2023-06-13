import { useEffect } from "react";

interface TextSwiftupProps {
  text: string;
}

const TextSwiftup: React.FC<TextSwiftupProps> = ({ text }) => {
  useEffect(() => {
    const swiftUpElements = document.querySelectorAll(".swift-up-text");
    swiftUpElements.forEach((elem) => {
      const words = elem?.textContent?.split(" ");
      elem.innerHTML = "";

      words?.forEach((_, index) => {
        words[index] = `<span><i>${words?.[index]}</i></span>`;
      });

      elem.innerHTML = (words && words.join(" ")) || "";

      const children = document.querySelectorAll("span > i");
      children.forEach((node: any, index) => {
        node.style.animationDelay = `${index * 0.2}s`;
      });
    });
  }, []);

  return (
    <div className="text-swift-container">
      <h1 className="swift-up-text heading mt-4 my-2 font-bold text-gray-800 !text-[38px]">
        {text}
      </h1>
    </div>
  );
};

export default TextSwiftup;
