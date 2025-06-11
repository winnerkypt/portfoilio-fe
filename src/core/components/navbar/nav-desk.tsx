"use client";
export const NavDesk = () => {
  return (
    <div>
      <svg
        className="w-24 xs:w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 h-10"
        viewBox="0 0 600 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="40" fill="none" />
        <line
          x1="20"
          y1="20"
          x2="560"
          y2="20"
          stroke="#945034"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <polyline
          points="540,0 560,20 540,40"
          fill="none"
          stroke="#945034"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
