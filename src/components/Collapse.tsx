import { useState } from "react";

export default function Collapse({ title, children }: any) {
  const [active, setActive] = useState(false);

  return (
    <div>
      <button
        className="w-full  py-2 flex justify-between"
        onClick={() => setActive(!active)}
      >
        <span className="capitalize">{title}</span>
        <ArrowIcon active={active} />
      </button>
      {active && <div className="py-2 flex gap-2">{children}</div>}
    </div>
  );
}

const ArrowIcon = ({ active }: { active: boolean }) => (
  <svg
    className={`${active ? "rotate-90" : ""} fill-neutral-400 transition-all`}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
  </svg>
);
