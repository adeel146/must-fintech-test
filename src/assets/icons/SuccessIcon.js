import React from "react";

function SuccessIcon(props) {
  return (
    <svg
      {...props}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="30" height="30" rx="15" fill="#D1FADF" />
      <g clip-path="url(#clip0_1_351)">
        <path
          d="M13.25 17.0001L15.75 19.5001L20.75 14.5001M25.3333 17.0001C25.3333 21.6025 21.6023 25.3334 17 25.3334C12.3976 25.3334 8.66663 21.6025 8.66663 17.0001C8.66663 12.3977 12.3976 8.66675 17 8.66675C21.6023 8.66675 25.3333 12.3977 25.3333 17.0001Z"
          stroke="#039855"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <rect
        x="2"
        y="2"
        width="30"
        height="30"
        rx="15"
        stroke="#ECFDF3"
        stroke-width="4"
      />
      <defs>
        <clipPath id="clip0_1_351">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(7 7)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SuccessIcon;
