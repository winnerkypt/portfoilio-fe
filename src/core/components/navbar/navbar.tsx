"use client";
export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-light-yellow py-[23px] px-[100px]">
      <div className="text-lg font-bold">
        <span className="text-brown">&lt;SoftwareEngineer</span>
        <span className="text-green"> title</span>
        <span className="text-brown"> = "</span>
        <span className="text-pink">Portfolio</span>
        <span className="text-brown">"/&gt;</span>
      </div>
      <div className="text-lg font-bold">
        <svg
          width="200"
          height="40"
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
    </div>
  );
};
