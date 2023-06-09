import * as React from "react";

export interface ICompanyProps {
  companyName: string;
  position: string;
  startDate: string;
  className: string;
  aosAnimation: Record<string, any>;
  onToggle: () => void;
}

export default function Company({
  companyName,
  position,
  className = "",
  aosAnimation,
  startDate,
  onToggle,
}: Partial<ICompanyProps>) {
  return (
    <div {...aosAnimation} className={className} onClick={onToggle}>
      <svg
        className="w-10 h-10"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.6066 22H11.3934"
          stroke="#202842"
          stroke-width="1.875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 11.3934V32.6066"
          stroke="#202842"
          stroke-width="1.875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p className="text-center">{startDate}</p>
      <div className="text-center sm:text-left mb-5 lg:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
        <h3 className="text-2xl lg:text-3xl font-semibold">{companyName}</h3>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
          {position}
        </span>
        <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400"></span>
      </div>
    </div>
  );
}
