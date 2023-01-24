import * as React from "react";

const SvgComponent = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_419_63)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3156 10.5547L17.395 9.47525C17.4141 9.45615 17.4237 9.4466 17.4316 9.43843C18.1913 8.66124 18.1913 7.41969 17.4316 6.6425C17.4237 6.63437 17.4142 6.62487 17.3953 6.60596L17.395 6.60568C17.3759 6.58659 17.3664 6.57704 17.3582 6.56905C16.581 5.80942 15.3395 5.80942 14.5623 6.56905C14.5541 6.57702 14.5446 6.58653 14.5256 6.60552L14.5254 6.60568L13.4281 7.70303C14.1091 8.89508 15.1066 9.88415 16.3156 10.5547ZM11.9735 9.15768L7.49053 13.6406C7.06547 14.0657 6.85294 14.2782 6.71321 14.5393C6.57347 14.8004 6.51453 15.0951 6.39664 15.6846L6.06385 17.3485C5.99733 17.6811 5.96407 17.8474 6.05868 17.942C6.15329 18.0366 6.31959 18.0034 6.6522 17.9368L8.31613 17.6041C8.90559 17.4862 9.20031 17.4272 9.46141 17.2875C9.72251 17.1478 9.93504 16.9352 10.3601 16.5102L14.8569 12.0133C13.6993 11.2777 12.7165 10.302 11.9735 9.15768Z"
        fill={props.color}
      />
    </g>
    <defs>
      <clipPath id="clip0_419_63">
        <rect width="13" height="12" fill="white" transform="translate(6 6)" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;

SvgComponent.defaultProps = {
  color: "var(--icon1)",
  cursor: "pointer",
};