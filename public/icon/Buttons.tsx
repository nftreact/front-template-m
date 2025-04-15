import * as React from "react";
import { SVGProps } from "react";
const SvgButtons = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width={39} height={39} x={0.5} y={0.5} stroke="#1C68B7" rx={19.5} />
    <path fill="#fff" fillOpacity={0.01} d="M12 12h16v16H12z" />
    <path
      fill="#00509D"
      fillRule="evenodd"
      d="M20 12.934a3.867 3.867 0 0 0-1.073 7.582c-1.274.155-2.366.606-3.19 1.417-1.047 1.032-1.577 2.569-1.577 4.574a.507.507 0 1 0 1.014 0c0-1.835.482-3.071 1.275-3.853.794-.782 1.98-1.187 3.551-1.187s2.757.405 3.551 1.188c.793.78 1.276 2.017 1.276 3.852a.507.507 0 1 0 1.013 0c0-2.005-.53-3.542-1.578-4.574-.823-.811-1.915-1.262-3.189-1.417A3.869 3.869 0 0 0 20 12.934M17.147 16.8a2.853 2.853 0 1 1 5.707 0 2.853 2.853 0 0 1-5.707 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgButtons;
