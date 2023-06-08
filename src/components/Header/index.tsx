import useScrollspy from "@/hooks/useScrollspy";
import { HEADER_HEIGHT, MENU } from "@/utils";
import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const activeId = useScrollspy(
    MENU.map((i) => i.href),
    HEADER_HEIGHT
  );

  return (
    <div className="fixed top-0 w-full z-[11]">
      <div className="h-full flex justify-between items-center p-[22px] bg-white shadow dark:bg-gray-800">
        <div className="block h-full">
          <div className="wrapper left-0">
            <p>
              <a href="#">oanhhtk</a>
            </p>
          </div>
        </div>
        <nav>
          <nav className="">
            <div className="container flex items-center justify-center mx-auto text-gray-600 capitalize dark:text-gray-300">
              {MENU.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className={`transition text-gray-800 dark:text-gray-200 border-b-2 border-transparent hover:border-[#EC407A] mx-1.5 sm:mx-6 ${
                    activeId === item.href ? "!border-[#EC407A]" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://github.com/oanhhtk"
                title="oanhhtk"
                target="_blank"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6"
              >
                <svg
                  aria-hidden="true"
                  className="octicon octicon-mark-github"
                  height="24"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>

              <a
                href="mailto:oanhhuynh2402@gmail.com"
                target="_blank"
                title="oanhhuynh2402@gmail.com"
                className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Gmail"
                  role="img"
                  viewBox="0 0 512 512"
                  width={32}
                  height={32}
                >
                  <rect width="512" height="512" rx="15%" fill="#fff" />
                  <path fill="#f2f2f2" d="M120 392V151.075h272V392" />
                  <path fill-opacity=".05" d="M256 285L120 392l-4-212" />
                  <path
                    fill="#d54c3f"
                    d="M120 392H97c-12 0-22-10-22-23V143h45z"
                  />
                  <path fill-opacity=".08" d="M317 392h77V159H82" />
                  <path fill="#f2f2f2" d="M97 121h318L256 234" />
                  <path
                    fill="#b63524"
                    d="M392 392h23c12 0 22-10 22-23V143h-45z"
                  />
                  <path
                    fill="none"
                    stroke="#de5145"
                    stroke-linecap="round"
                    stroke-width="44"
                    d="M97 143l159 115 159-115"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Header;
