function getSVG(svgName) {
  const strokeColor = "rgb(129 140 248)";
  // eslint-disable-next-line default-case
  switch (svgName) {
    case "Personal":
      return (
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="3"
          class="icon"

        >
          <circle cx="32" cy="18.14" r="11.14" />
          <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
        </svg>
      );
      break;
    case "Contact":
      return (
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#A5B4FC"
          class="icon"
        >
          <path
            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case "Education":
      return (
        <svg
          fill={strokeColor}
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path
            stroke={strokeColor}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="30"
            d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"
          />
          <path
            stroke={strokeColor}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="30"
            d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"
          />
          <path
            stroke={strokeColor}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="30"
            d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"
          />
        </svg>
      );
      break;
    case "Experience":
      return (
        <svg
          width="25px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V9Z"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16 7V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V7"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 12H2"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 12V14"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 12V14"
            stroke={strokeColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
      break;
    case "Additional":
      return (
        <svg
          fill={strokeColor}
          width="25px"
          height="25px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
        >
          <path d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8zm192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8zm192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8zm216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" />
        </svg>
      );
      break;
  }
}

export { getSVG };
