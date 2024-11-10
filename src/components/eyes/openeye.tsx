import React from "react";

interface OpenEyeProps {
  color?: string;
}

const OpenEye: React.FC<OpenEyeProps> = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      color={color}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.52 6.713C7.226 5.381 9.43 4.25 12 4.25s4.774 1.131 6.48 2.463 2.969 2.907 3.675 3.897l.053.074c.253.352.542.754.542 1.316s-.289.964-.542 1.316l-.053.074c-.706.99-1.968 2.564-3.675 3.897S14.57 19.75 12 19.75s-4.774-1.131-6.48-2.463-2.969-2.907-3.675-3.896l-.053-.075c-.253-.352-.542-.754-.542-1.316s.289-.964.542-1.316l.053-.074c.706-.99 1.968-2.564 3.675-3.897M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"
        fill={color}
      />
    </svg>
  );
};

export default OpenEye;
