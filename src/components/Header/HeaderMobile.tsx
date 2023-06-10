import useScrollspy from "@/hooks/useScrollspy";
import { HEADER_HEIGHT, MENU } from "@/utils";
import React, { useState } from "react";

interface HeaderMobileProps {
  className: string;
}

const HeaderMobile: React.FC<HeaderMobileProps> = ({ className }) => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const activeId = useScrollspy(
    MENU.map((i) => i.href),
    HEADER_HEIGHT
  );

  return (
    <header className={`fixed top-0 w-full z-[11] ${className}`}>
      <nav className="flex flex-col bg-[#fff]">
        <div className="flex flex-wrap items-center justify-between w-full py-4 px-4 text-lg text-gray-700 bg-white">
          <div className="flex">
            <div className="f-full block relative">
              <div className="wrapper transform-none !w-full">
                <p>
                  <a href="#">oanhhtk</a>
                </p>
              </div>
            </div>
          </div>
          {/* <div>oanhhtk</div> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setOpenMenuMobile((prev) => !prev)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div
          id="content"
          className={`content overflow-hidden grid items-center justify-center duration-300 md:max-h-[100%] md:overflow-unset text-center`}
          style={{
            gridTemplateRows: openMenuMobile ? "1fr" : "0fr",
            padding: openMenuMobile ? "20px" : "",
            margin: openMenuMobile ? "20px" : "",
          }}
        >
          <div className="min-h-0 bg-white rounded-b-sm">
            <nav className="">
              <div className="container flex flex-col mx-auto text-gray-600 capitalize dark:text-gray-300">
                {MENU.map((item) => (
                  <a
                    key={item.href}
                    href={`#${item.href}`}
                    className={`transition text-gray-800 dark:text-gray-200 border-b-2 border-transparent hover:border-[#EC407A] mx-1.5 sm:mx-6 ${
                      activeId === item.href ? "!border-[#EC407A]" : ""
                    }`}
                    onClick={() => setOpenMenuMobile((prev) => !prev)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderMobile;
