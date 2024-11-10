import React from "react";

interface ClosedEyeProps {
  color?: string;
}

const ClosedEye: React.FC<ClosedEyeProps> = ({color}) => {
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
        d="M3.707 2.293a1 1 0 0 0-1.414 1.414l3.065 3.065-.021.016c-1.814 1.445-3.21 3.282-4.008 4.877a.75.75 0 0 0 0 .67c.798 1.595 2.194 3.432 4.008 4.877 1.815 1.446 4.1 2.538 6.663 2.538 1.814 0 3.489-.547 4.956-1.38l3.337 3.337a1 1 0 0 0 1.414-1.414zM13.816 15.23 8.77 10.184a3.679 3.679 0 0 0 5.045 5.046m5.954 1.005c1.278-1.244 2.274-2.647 2.9-3.9a.75.75 0 0 0 0-.67c-.797-1.595-2.193-3.432-4.007-4.877C16.848 5.342 14.563 4.25 12 4.25c-1.248 0-2.43.259-3.523.691z"
        fill={color}
      />
    </svg>
  );
};

export default ClosedEye;
