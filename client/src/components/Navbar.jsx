import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <Link to="/home">
        <svg
          width="69px"
          height="69px"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--twemoji"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#292F33"
              d="M1.537 24.962a.75.75 0 0 0 0 1.5h18v-1.5h-18zm33.671-7.955h-12.5v1.5h12.5a.75.75 0 0 0 0-1.5z"
            ></path>
            <path
              fill="#FFCC4D"
              d="M23.216 9.624l5.742-5.742l5.743 5.742v7.383H23.216z"
            ></path>
            <path
              fill="#292F33"
              d="M34.701 10.445c-.21 0-.42-.08-.58-.24l-5.162-5.162l-5.162 5.162a.82.82 0 0 1-1.16-1.16l5.742-5.742a.82.82 0 0 1 1.16 0l5.742 5.742a.82.82 0 0 1-.58 1.4z"
            ></path>
            <path fill="#662113" d="M27.318 11.265h3.281v5.742h-3.281z"></path>
            <path
              fill="#3B88C3"
              d="M24.857 11.265h1.641v1.641h-1.641zm6.562 0h1.641v1.641h-1.641zm0 2.461h1.641v1.641h-1.641z"
            ></path>
            <path
              fill="#FFCC4D"
              d="M10.537 5.259l-8.296 8.296v11.407h16.592V13.555z"
            ></path>
            <path
              fill="#292F33"
              d="M19.87 15.629c-.265 0-.531-.101-.733-.304l-8.6-8.6l-8.6 8.6a1.036 1.036 0 1 1-1.466-1.466l9.333-9.333a1.036 1.036 0 0 1 1.466 0l9.333 9.333a1.036 1.036 0 0 1-.733 1.77z"
            ></path>
            <path fill="#662113" d="M8.463 15.629h4.148v9.333H8.463z"></path>
            <path
              fill="#3B88C3"
              d="M4.315 15.629h3.111v3.111H4.315zm0 4.148h3.111v3.111H4.315z"
            ></path>
            <path
              fill="#FFE8B6"
              d="M21.477 8.438L10.954 18.995v14.519H32V18.995z"
            ></path>
            <path
              fill="#66757F"
              d="M33 33.008H10c-.552 0-1 .449-1 1.003c0 .554.448 1.003 1 1.003h23c.552 0 1-.449 1-1.003c0-.554-.448-1.003-1-1.003z"
            ></path>
            <path fill="#FFCC4D" d="M21 19h1v14h-1z"></path>
            <path fill="#C1694F" d="M14 27h4v6h-4z"></path>
            <path
              fill="#55ACEE"
              d="M14 20h4v4h-4zm11 0h4v4h-4zm0 7h4v4h-4z"
            ></path>
            <path
              fill="#66757F"
              d="M21 19.603a.999.999 0 0 1-.707-1.707l6.5-6.5l1.414 1.414l-6.5 6.5a.993.993 0 0 1-.707.293z"
            ></path>
            <path
              fill="#66757F"
              d="M32.884 19.603c-.265 0-.531-.101-.733-.304L21.477 8.625L10.803 19.299a1.036 1.036 0 1 1-1.466-1.466L20.744 6.426a1.036 1.036 0 0 1 1.466 0l11.407 11.407a1.036 1.036 0 0 1-.733 1.77z"
            ></path>
          </g>
        </svg>
      </Link>
      <h1>Lets Get Local</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <button>Logout</button>
      </nav>
    </header>
  );
}
