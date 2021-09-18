import React from "react";

function Infor_Bao_Tran(props) {
  return (
    <div className=" px-16 flex items-center">
      <a
        href=" https://www.facebook.com/hinne.ye  "
        target="_blank"
        rel="noreferrer"
      >
        <div className="cursor-pointer">
          <svg
            className="h-7 w-6 text-black "
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
              fill="black"
            />
          </svg>
        </div>
      </a>
      <a
        href="mailto:baotran171001@gmail.com?"
        target="_blank"
        rel="noreferrer"
      >
        <div className="cursor-pointer">
          <svg
            className="h-6 w-7 text-black m-4 "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <polyline points="3 7 12 13 21 7" />
          </svg>
        </div>
      </a>
      <a
        className="Header-link "
        href=" https://github.com/chan1710"
        target="_blank"
        data-hotkey="g d"
        aria-label="Homepage "
        data-hydro-click='{"event_type":"analytics.event","payload":{"category":"Header","action":"go to dashboard","label":"icon:logo","originating_url":"https://github.com/OngDev/community","user_id":80939836}}'
        data-hydro-click-hmac="87e7bd45d9bdfec41f4fd6c8308f9c1fce8ff2a4277ebb10e15f2750ae2de0de"
        rel="noreferrer"
      >
        <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="24"
          data-view-component="true"
          className="octicon octicon-mark-github v-align-middle"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </a>
    </div>
  );
}

export default Infor_Bao_Tran;
