import React, { useState } from "react";
import style from "./style.module.css";

const CreateGroup = ({ onClose }: any) => {
  return (
    <div>
      <div className={style.premodal}>
        <div className={style.modal}>
          {/* Title */}
          <div className={style.modal__title}>
            <svg
              width="38"
              height="39"
              viewBox="0 0 38 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.4167 0.75H1.58333C1.16341 0.75 0.76068 0.947544 0.463748 1.29917C0.166815 1.65081 0 2.12772 0 2.625L0 36.375C0 36.8723 0.166815 37.3492 0.463748 37.7008C0.76068 38.0525 1.16341 38.25 1.58333 38.25H36.4167C36.8366 38.25 37.2393 38.0525 37.5363 37.7008C37.8332 37.3492 38 36.8723 38 36.375V2.625C38 2.12772 37.8332 1.65081 37.5363 1.29917C37.2393 0.947544 36.8366 0.75 36.4167 0.75ZM34.8333 34.5H31.6667V32.625H23.75V34.5H3.16667V4.5H34.8333V34.5ZM16.2925 15.2063C16.2925 14.3559 16.5778 13.5404 17.0855 12.9391C17.5933 12.3378 18.2819 12 19 12C20.5042 12 21.7075 13.4438 21.7075 15.2063C21.7075 16.9875 20.5042 18.4313 19 18.4313C17.4958 18.4313 16.2925 16.9875 16.2925 15.2063ZM9.04083 18.1688C9.04083 16.8375 9.95917 15.75 11.0833 15.75C11.625 15.75 12.1446 16.0048 12.5276 16.4584C12.9106 16.912 13.1258 17.5273 13.1258 18.1688C13.1258 19.5 12.2075 20.5688 11.0833 20.5688C9.95917 20.5688 9.04083 19.5 9.04083 18.1688ZM24.8742 18.1688C24.8742 17.5273 25.0894 16.912 25.4724 16.4584C25.8554 16.0048 26.375 15.75 26.9167 15.75C27.4584 15.75 27.9779 16.0048 28.3609 16.4584C28.744 16.912 28.9592 17.5273 28.9592 18.1688C28.9592 19.5 28.0408 20.5688 26.9167 20.5688C25.7925 20.5688 24.8742 19.5 24.8742 18.1688ZM31.6667 25.3875V27H6.33333V25.3875C6.33333 23.625 8.7875 22.1813 11.0833 22.1813C11.9542 22.1813 12.8408 22.3875 13.6167 22.7438C14.8042 21.45 16.9417 20.5688 19 20.5688C21.0583 20.5688 23.1958 21.45 24.3833 22.7438C25.1592 22.3875 26.0458 22.1813 26.9167 22.1813C29.2125 22.1813 31.6667 23.625 31.6667 25.3875Z"
                fill="#6366F1"
              />
            </svg>
            <h1 className={style.modal__title__text}>Tạo nhóm</h1>
          </div>

          <div className={style.modal__minput}>
            {/* SchoolYear */}
            <div className={style.modal__input}>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1943 1.4812H14.2413C14.1822 1.4812 14.1254 1.5047 14.0836 1.54652C14.0418 1.58834 14.0183 1.64506 14.0183 1.7042C14.0183 1.7422 14.0303 1.7762 14.0468 1.8072V3.5062C14.0469 3.56847 14.0347 3.63013 14.0109 3.68767C13.9871 3.74521 13.9522 3.79749 13.9081 3.84152C13.8641 3.88555 13.8118 3.92046 13.7543 3.94425C13.6967 3.96805 13.6351 3.98027 13.5728 3.9802H12.6538C12.596 3.9802 12.5388 3.96882 12.4854 3.94671C12.432 3.9246 12.3835 3.89219 12.3427 3.85133C12.3018 3.81047 12.2694 3.76197 12.2473 3.70858C12.2252 3.6552 12.2138 3.59798 12.2138 3.5402V1.8347C12.2433 1.7975 12.2598 1.75167 12.2608 1.7042C12.2609 1.6749 12.2552 1.64587 12.244 1.61879C12.2328 1.5917 12.2164 1.56709 12.1956 1.54637C12.1749 1.52565 12.1503 1.50923 12.1232 1.49804C12.0961 1.48686 12.0671 1.48114 12.0378 1.4812H6.08531C6.02617 1.4812 5.96944 1.5047 5.92762 1.54652C5.8858 1.58834 5.86231 1.64506 5.86231 1.7042C5.86231 1.7387 5.87181 1.7702 5.88581 1.7997V3.5182C5.88581 3.57894 5.87385 3.63908 5.8506 3.69519C5.82736 3.75131 5.79329 3.80229 5.75035 3.84524C5.7074 3.88819 5.65641 3.92225 5.6003 3.9455C5.54419 3.96874 5.48404 3.9807 5.42331 3.9807H4.60731C4.48345 3.9807 4.36467 3.9315 4.27709 3.84392C4.18951 3.75634 4.14031 3.63756 4.14031 3.5137V1.8122C4.16016 1.77962 4.17103 1.74235 4.17181 1.7042C4.17187 1.6749 4.16615 1.64587 4.15497 1.61879C4.14378 1.5917 4.12736 1.56709 4.10664 1.54637C4.08592 1.52565 4.06131 1.50923 4.03422 1.49804C4.00714 1.48686 3.97811 1.48114 3.94881 1.4812H0.837309C0.705888 1.48133 0.579881 1.53356 0.486906 1.62645C0.393931 1.71933 0.341573 1.84528 0.341309 1.9767V16.7437C0.341309 17.0177 0.563809 17.2402 0.837309 17.2402H17.1943C17.3258 17.2399 17.4518 17.1875 17.5447 17.0944C17.6376 17.0013 17.6898 16.8752 17.6898 16.7437V1.9767C17.6895 1.84537 17.6373 1.71949 17.5444 1.62662C17.4515 1.53376 17.3256 1.48147 17.1943 1.4812ZM17.1943 16.7942H0.837309C0.8307 16.7942 0.824157 16.7929 0.818058 16.7903C0.811959 16.7878 0.806425 16.7841 0.801775 16.7794C0.797126 16.7747 0.793453 16.7691 0.79097 16.763C0.788487 16.7569 0.787243 16.7503 0.787309 16.7437V5.6072H17.2438V16.7432C17.2439 16.7498 17.2428 16.7564 17.2403 16.7625C17.2379 16.7687 17.2343 16.7743 17.2297 16.779C17.2251 16.7838 17.2196 16.7876 17.2135 16.7902C17.2074 16.7928 17.2009 16.7941 17.1943 16.7942Z"
                  fill="#6366F1"
                />
                <path
                  d="M5.0731 3.4721C5.1961 3.4721 5.2961 3.3721 5.2961 3.2491V0.2501C5.2961 0.220815 5.29033 0.191817 5.27912 0.164761C5.26792 0.137706 5.25149 0.113122 5.23078 0.0924149C5.21008 0.0717074 5.18549 0.0552813 5.15844 0.0440745C5.13138 0.0328677 5.10238 0.0270996 5.0731 0.0270996C5.04381 0.0270996 5.01481 0.0328677 4.98776 0.0440745C4.9607 0.0552813 4.93612 0.0717074 4.91541 0.0924149C4.89471 0.113122 4.87828 0.137706 4.86707 0.164761C4.85587 0.191817 4.8501 0.220815 4.8501 0.2501V3.2496C4.8501 3.3726 4.9501 3.4721 5.0731 3.4721Z"
                  fill="#6366F1"
                />
                <path
                  d="M13.1502 3.4721C13.2732 3.4721 13.3732 3.3721 13.3732 3.2491V0.2501C13.3732 0.190956 13.3498 0.134235 13.3079 0.0924149C13.2661 0.0505942 13.2094 0.0270996 13.1502 0.0270996C13.0911 0.0270996 13.0344 0.0505942 12.9926 0.0924149C12.9507 0.134235 12.9272 0.190956 12.9272 0.2501V3.2496C12.9272 3.3726 13.0267 3.4721 13.1502 3.4721Z"
                  fill="#6366F1"
                />
                <path
                  d="M3.92089 8.98071C4.59965 8.98071 5.14989 8.43046 5.14989 7.75171C5.14989 7.07295 4.59965 6.52271 3.92089 6.52271C3.24214 6.52271 2.69189 7.07295 2.69189 7.75171C2.69189 8.43046 3.24214 8.98071 3.92089 8.98071Z"
                  fill="#6366F1"
                />
                <path
                  d="M7.45263 8.98071C8.13139 8.98071 8.68163 8.43046 8.68163 7.75171C8.68163 7.07295 8.13139 6.52271 7.45263 6.52271C6.77387 6.52271 6.22363 7.07295 6.22363 7.75171C6.22363 8.43046 6.77387 8.98071 7.45263 8.98071Z"
                  fill="#6366F1"
                />
                <path
                  d="M10.9844 8.98071C11.6631 8.98071 12.2134 8.43046 12.2134 7.75171C12.2134 7.07295 11.6631 6.52271 10.9844 6.52271C10.3056 6.52271 9.75537 7.07295 9.75537 7.75171C9.75537 8.43046 10.3056 8.98071 10.9844 8.98071Z"
                  fill="#6366F1"
                />
                <path
                  d="M3.92089 12.4031C4.59965 12.4031 5.14989 11.8528 5.14989 11.1741C5.14989 10.4953 4.59965 9.94507 3.92089 9.94507C3.24214 9.94507 2.69189 10.4953 2.69189 11.1741C2.69189 11.8528 3.24214 12.4031 3.92089 12.4031Z"
                  fill="#6366F1"
                />
                <path
                  d="M7.45263 12.4031C8.13139 12.4031 8.68163 11.8528 8.68163 11.1741C8.68163 10.4953 8.13139 9.94507 7.45263 9.94507C6.77387 9.94507 6.22363 10.4953 6.22363 11.1741C6.22363 11.8528 6.77387 12.4031 7.45263 12.4031Z"
                  fill="#6366F1"
                />
                <path
                  d="M10.9844 12.4031C11.6631 12.4031 12.2134 11.8528 12.2134 11.1741C12.2134 10.4953 11.6631 9.94507 10.9844 9.94507C10.3056 9.94507 9.75537 10.4953 9.75537 11.1741C9.75537 11.8528 10.3056 12.4031 10.9844 12.4031Z"
                  fill="#6366F1"
                />
                <path
                  d="M3.92089 15.8257C4.59965 15.8257 5.14989 15.2754 5.14989 14.5967C5.14989 13.9179 4.59965 13.3677 3.92089 13.3677C3.24214 13.3677 2.69189 13.9179 2.69189 14.5967C2.69189 15.2754 3.24214 15.8257 3.92089 15.8257Z"
                  fill="#6366F1"
                />
                <path
                  d="M7.45263 15.8257C8.13139 15.8257 8.68163 15.2754 8.68163 14.5967C8.68163 13.9179 8.13139 13.3677 7.45263 13.3677C6.77387 13.3677 6.22363 13.9179 6.22363 14.5967C6.22363 15.2754 6.77387 15.8257 7.45263 15.8257Z"
                  fill="#6366F1"
                />
                <path
                  d="M10.9844 15.8257C11.6631 15.8257 12.2134 15.2754 12.2134 14.5967C12.2134 13.9179 11.6631 13.3677 10.9844 13.3677C10.3056 13.3677 9.75537 13.9179 9.75537 14.5967C9.75537 15.2754 10.3056 15.8257 10.9844 15.8257Z"
                  fill="#6366F1"
                />
                <path
                  d="M14.4331 8.98071C15.1119 8.98071 15.6621 8.43046 15.6621 7.75171C15.6621 7.07295 15.1119 6.52271 14.4331 6.52271C13.7543 6.52271 13.2041 7.07295 13.2041 7.75171C13.2041 8.43046 13.7543 8.98071 14.4331 8.98071Z"
                  fill="#6366F1"
                />
                <path
                  d="M14.4331 12.4031C15.1119 12.4031 15.6621 11.8528 15.6621 11.1741C15.6621 10.4953 15.1119 9.94507 14.4331 9.94507C13.7543 9.94507 13.2041 10.4953 13.2041 11.1741C13.2041 11.8528 13.7543 12.4031 14.4331 12.4031Z"
                  fill="#6366F1"
                />
                <path
                  d="M14.4331 15.8257C15.1119 15.8257 15.6621 15.2754 15.6621 14.5967C15.6621 13.9179 15.1119 13.3677 14.4331 13.3677C13.7543 13.3677 13.2041 13.9179 13.2041 14.5967C13.2041 15.2754 13.7543 15.8257 14.4331 15.8257Z"
                  fill="#6366F1"
                />
              </svg>
              <select className={style.modal__input__select}>
                <option value="">Chọn năm học</option>
                <option value="2021">2021-2022</option>
                <option value="2022">2022-2023</option>
              </select>
              <svg
                className={style.modal__input__image}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 3.25C7.43387 3.25 3.25 7.43387 3.25 12.5938C3.25 17.7536 7.43387 21.9375 12.5938 21.9375C17.7536 21.9375 21.9375 17.7536 21.9375 12.5938C21.9375 7.43387 17.7536 3.25 12.5938 3.25Z"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.1719 11.1719H12.7969V17.0625"
                  stroke="#6366F1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5625 17.2656H15.0312"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8689 6.83707C12.0835 6.69371 12.3357 6.61719 12.5938 6.61719C12.9398 6.61719 13.2716 6.75464 13.5163 6.99932C13.761 7.244 13.8984 7.57585 13.8984 7.92187C13.8984 8.17992 13.8219 8.43217 13.6786 8.64672C13.5352 8.86127 13.3314 9.0285 13.093 9.12725C12.8546 9.226 12.5923 9.25183 12.3392 9.20149C12.0861 9.15115 11.8537 9.02689 11.6712 8.84443C11.4887 8.66196 11.3645 8.42949 11.3141 8.17641C11.2638 7.92332 11.2896 7.66099 11.3884 7.42259C11.4871 7.18419 11.6544 6.98043 11.8689 6.83707Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                  strokeWidth="0.03125"
                />
              </svg>
            </div>
            {/* Faculty */}
            <div className={style.modal__input}>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.09912 17.0745C7.191 17.1435 7.29558 17.1937 7.40688 17.2223C7.51818 17.2509 7.63403 17.2573 7.7478 17.2412C7.86158 17.225 7.97105 17.1866 8.06997 17.1281C8.1689 17.0696 8.25533 16.9922 8.32434 16.9003C8.8542 16.1939 9.54124 15.6205 10.3311 15.2256C11.1209 14.8307 11.9918 14.6251 12.8749 14.6251C13.7579 14.6251 14.6289 14.8306 15.4187 15.2255C16.2086 15.6204 16.8957 16.1937 17.4255 16.9001C17.4942 16.9929 17.5806 17.0711 17.6796 17.1304C17.7787 17.1896 17.8885 17.2287 18.0027 17.2453C18.1169 17.262 18.2333 17.2558 18.3451 17.2273C18.457 17.1988 18.5621 17.1484 18.6544 17.0791C18.7466 17.0097 18.8243 16.9228 18.8829 16.8234C18.9414 16.7239 18.9797 16.6138 18.9955 16.4995C19.0114 16.3852 19.0044 16.2688 18.9751 16.1572C18.9458 16.0455 18.8946 15.9408 18.8247 15.849C18.0492 14.81 17.0149 13.9924 15.825 13.4778C16.4765 12.8829 16.9329 12.105 17.1344 11.2461C17.3359 10.3872 17.273 9.4874 16.9539 8.66488C16.6349 7.84236 16.0747 7.1355 15.3468 6.63706C14.6188 6.13863 13.7572 5.87191 12.875 5.87191C11.9928 5.87191 11.1312 6.13863 10.4032 6.63706C9.67531 7.1355 9.11507 7.84236 8.79605 8.66488C8.47704 9.4874 8.41414 10.3872 8.61562 11.2461C8.8171 12.105 9.27354 12.8829 9.92505 13.4778C8.73496 13.9924 7.7006 14.8101 6.92511 15.8492C6.85608 15.9411 6.80582 16.0457 6.77721 16.157C6.74859 16.2683 6.74218 16.3841 6.75834 16.4979C6.7745 16.6117 6.81291 16.7211 6.87139 16.8201C6.92986 16.919 7.00724 17.0054 7.09912 17.0745ZM10.25 10.25C10.25 9.73082 10.404 9.22331 10.6924 8.79163C10.9808 8.35995 11.3908 8.0235 11.8705 7.82482C12.3501 7.62614 12.8779 7.57415 13.3871 7.67544C13.8963 7.77672 14.364 8.02673 14.7312 8.39384C15.0983 8.76096 15.3483 9.22869 15.4496 9.73789C15.5508 10.2471 15.4989 10.7749 15.3002 11.2545C15.1015 11.7342 14.765 12.1442 14.3334 12.4326C13.9017 12.721 13.3942 12.875 12.875 12.875C12.179 12.8742 11.5118 12.5974 11.0197 12.1053C10.5276 11.6132 10.2508 10.946 10.25 10.25ZM20.75 0.625H5C4.53603 0.625521 4.09121 0.810063 3.76314 1.13814C3.43506 1.46621 3.25052 1.91103 3.25 2.375V4.5625H1.5C1.26794 4.5625 1.04538 4.65469 0.881282 4.81878C0.717187 4.98288 0.625 5.20544 0.625 5.4375C0.625 5.66956 0.717187 5.89212 0.881282 6.05622C1.04538 6.22031 1.26794 6.3125 1.5 6.3125H3.25V8.9375H1.5C1.26794 8.9375 1.04538 9.02969 0.881282 9.19378C0.717187 9.35788 0.625 9.58044 0.625 9.8125C0.625 10.0446 0.717187 10.2671 0.881282 10.4312C1.04538 10.5953 1.26794 10.6875 1.5 10.6875H3.25V13.3125H1.5C1.26794 13.3125 1.04538 13.4047 0.881282 13.5688C0.717187 13.7329 0.625 13.9554 0.625 14.1875C0.625 14.4196 0.717187 14.6421 0.881282 14.8062C1.04538 14.9703 1.26794 15.0625 1.5 15.0625H3.25V17.6875H1.5C1.26794 17.6875 1.04538 17.7797 0.881282 17.9438C0.717187 18.1079 0.625 18.3304 0.625 18.5625C0.625 18.7946 0.717187 19.0171 0.881282 19.1812C1.04538 19.3453 1.26794 19.4375 1.5 19.4375H3.25V21.625C3.25052 22.089 3.43506 22.5338 3.76314 22.8619C4.09121 23.1899 4.53603 23.3745 5 23.375H20.75C21.214 23.3745 21.6588 23.1899 21.9869 22.8619C22.3149 22.5338 22.4995 22.089 22.5 21.625V2.375C22.4995 1.91103 22.3149 1.46621 21.9869 1.13814C21.6588 0.810063 21.214 0.625521 20.75 0.625ZM20.75 21.625L5 21.6261V2.375H20.75V21.625Z"
                  fill="#6366F1"
                />
              </svg>
              <select className={style.modal__input__select}>
                <option value="">Chọn khoa</option>
                <option value="cntt">Công nghệ thông tin</option>
                <option value="sh">Sinh học</option>
              </select>
              <svg
                className={style.modal__input__image}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 3.25C7.43387 3.25 3.25 7.43387 3.25 12.5938C3.25 17.7536 7.43387 21.9375 12.5938 21.9375C17.7536 21.9375 21.9375 17.7536 21.9375 12.5938C21.9375 7.43387 17.7536 3.25 12.5938 3.25Z"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.1719 11.1719H12.7969V17.0625"
                  stroke="#6366F1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5625 17.2656H15.0312"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8689 6.83707C12.0835 6.69371 12.3357 6.61719 12.5938 6.61719C12.9398 6.61719 13.2716 6.75464 13.5163 6.99932C13.761 7.244 13.8984 7.57585 13.8984 7.92187C13.8984 8.17992 13.8219 8.43217 13.6786 8.64672C13.5352 8.86127 13.3314 9.0285 13.093 9.12725C12.8546 9.226 12.5923 9.25183 12.3392 9.20149C12.0861 9.15115 11.8537 9.02689 11.6712 8.84443C11.4887 8.66196 11.3645 8.42949 11.3141 8.17641C11.2638 7.92332 11.2896 7.66099 11.3884 7.42259C11.4871 7.18419 11.6544 6.98043 11.8689 6.83707Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                  strokeWidth="0.03125"
                />
              </svg>
            </div>
            {/* Course */}
            <div className={style.modal__input}>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.01 14.0833H15.5V2.41667C15.5 1.97464 15.3244 1.55072 15.0118 1.23816C14.6993 0.925595 14.2754 0.75 13.8333 0.75H3C1.995 0.75 0.5 1.41583 0.5 3.25V14.9167C0.5 16.7508 1.995 17.4167 3 17.4167H15.5V15.75H3.01C2.625 15.74 2.16667 15.5875 2.16667 14.9167C2.16667 14.2458 2.625 14.0933 3.01 14.0833ZM4.66667 4.08333H12.1667V5.75H4.66667V4.08333Z"
                  fill="#6366F1"
                />
              </svg>
              <select className={style.modal__input__select}>
                <option value="">Chọn môn</option>
                <option value="nmlt">Nhập môn lập trình</option>
                <option value="ktlt">Kỹ thuật lập trình</option>
              </select>
              <svg
                className={style.modal__input__image}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 3.25C7.43387 3.25 3.25 7.43387 3.25 12.5938C3.25 17.7536 7.43387 21.9375 12.5938 21.9375C17.7536 21.9375 21.9375 17.7536 21.9375 12.5938C21.9375 7.43387 17.7536 3.25 12.5938 3.25Z"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.1719 11.1719H12.7969V17.0625"
                  stroke="#6366F1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5625 17.2656H15.0312"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8689 6.83707C12.0835 6.69371 12.3357 6.61719 12.5938 6.61719C12.9398 6.61719 13.2716 6.75464 13.5163 6.99932C13.761 7.244 13.8984 7.57585 13.8984 7.92187C13.8984 8.17992 13.8219 8.43217 13.6786 8.64672C13.5352 8.86127 13.3314 9.0285 13.093 9.12725C12.8546 9.226 12.5923 9.25183 12.3392 9.20149C12.0861 9.15115 11.8537 9.02689 11.6712 8.84443C11.4887 8.66196 11.3645 8.42949 11.3141 8.17641C11.2638 7.92332 11.2896 7.66099 11.3884 7.42259C11.4871 7.18419 11.6544 6.98043 11.8689 6.83707Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                  strokeWidth="0.03125"
                />
              </svg>
            </div>
            {/* Teacher */}
            <div className={style.modal__input}>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 8.5C9.54429 8.5 10.5458 8.08516 11.2842 7.34673C12.0227 6.60831 12.4375 5.60679 12.4375 4.5625C12.4375 3.51821 12.0227 2.51669 11.2842 1.77827C10.5458 1.03984 9.54429 0.625 8.5 0.625C7.45571 0.625 6.45419 1.03984 5.71577 1.77827C4.97734 2.51669 4.5625 3.51821 4.5625 4.5625C4.5625 5.60679 4.97734 6.60831 5.71577 7.34673C6.45419 8.08516 7.45571 8.5 8.5 8.5ZM11.125 4.5625C11.125 5.25869 10.8484 5.92637 10.3562 6.41866C9.86387 6.91094 9.19619 7.1875 8.5 7.1875C7.80381 7.1875 7.13613 6.91094 6.64384 6.41866C6.15156 5.92637 5.875 5.25869 5.875 4.5625C5.875 3.86631 6.15156 3.19863 6.64384 2.70634C7.13613 2.21406 7.80381 1.9375 8.5 1.9375C9.19619 1.9375 9.86387 2.21406 10.3562 2.70634C10.8484 3.19863 11.125 3.86631 11.125 4.5625ZM16.375 15.0625C16.375 16.375 15.0625 16.375 15.0625 16.375H1.9375C1.9375 16.375 0.625 16.375 0.625 15.0625C0.625 13.75 1.9375 9.8125 8.5 9.8125C15.0625 9.8125 16.375 13.75 16.375 15.0625ZM15.0625 15.0573C15.0612 14.7344 14.8604 13.7631 13.9705 12.8733C13.1147 12.0175 11.5043 11.125 8.5 11.125C5.49438 11.125 3.88525 12.0175 3.0295 12.8733C2.13963 13.7631 1.94012 14.7344 1.9375 15.0573H15.0625Z"
                  fill="#6366F1"
                />
              </svg>
              <select className={style.modal__input__select}>
                <option value="">Chọn giáo viên</option>
                <option value="nmlt">Trương Toàn Thịnh</option>
                <option value="ktlt">Nguyễn Lê Hoàng Dũng</option>
              </select>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 3.25C7.43387 3.25 3.25 7.43387 3.25 12.5938C3.25 17.7536 7.43387 21.9375 12.5938 21.9375C17.7536 21.9375 21.9375 17.7536 21.9375 12.5938C21.9375 7.43387 17.7536 3.25 12.5938 3.25Z"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.1719 11.1719H12.7969V17.0625"
                  stroke="#6366F1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5625 17.2656H15.0312"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8689 6.83707C12.0835 6.69371 12.3357 6.61719 12.5938 6.61719C12.9398 6.61719 13.2716 6.75464 13.5163 6.99932C13.761 7.244 13.8984 7.57585 13.8984 7.92187C13.8984 8.17992 13.8219 8.43217 13.6786 8.64672C13.5352 8.86127 13.3314 9.0285 13.093 9.12725C12.8546 9.226 12.5923 9.25183 12.3392 9.20149C12.0861 9.15115 11.8537 9.02689 11.6712 8.84443C11.4887 8.66196 11.3645 8.42949 11.3141 8.17641C11.2638 7.92332 11.2896 7.66099 11.3884 7.42259C11.4871 7.18419 11.6544 6.98043 11.8689 6.83707Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                  strokeWidth="0.03125"
                />
              </svg>
            </div>
            {/* NameGroup    */}
            <div className={style.modal__input}>
              <svg
                className={style.modal__input__image}
                width="23"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.41 5.79988L17.2 4.58988C16.42 3.80988 15.15 3.80988 14.37 4.58988L11.69 7.26988L3 15.9599V19.9999H7.04L15.78 11.2599L18.41 8.62988C19.2 7.84988 19.2 6.57988 18.41 5.79988ZM6.21 17.9999H5V16.7899L13.66 8.12988L14.87 9.33988L6.21 17.9999ZM11 19.9999L15 15.9999H21V19.9999H11Z"
                  fill="#6366F1"
                />
              </svg>

              <input
                className={style.modal__input__textinput}
                placeholder="Nhập tên nhóm"
              />
              <svg
                className={style.modal__input__image}
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5938 3.25C7.43387 3.25 3.25 7.43387 3.25 12.5938C3.25 17.7536 7.43387 21.9375 12.5938 21.9375C17.7536 21.9375 21.9375 17.7536 21.9375 12.5938C21.9375 7.43387 17.7536 3.25 12.5938 3.25Z"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                />
                <path
                  d="M11.1719 11.1719H12.7969V17.0625"
                  stroke="#6366F1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5625 17.2656H15.0312"
                  stroke="#6366F1"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M11.8689 6.83707C12.0835 6.69371 12.3357 6.61719 12.5938 6.61719C12.9398 6.61719 13.2716 6.75464 13.5163 6.99932C13.761 7.244 13.8984 7.57585 13.8984 7.92187C13.8984 8.17992 13.8219 8.43217 13.6786 8.64672C13.5352 8.86127 13.3314 9.0285 13.093 9.12725C12.8546 9.226 12.5923 9.25183 12.3392 9.20149C12.0861 9.15115 11.8537 9.02689 11.6712 8.84443C11.4887 8.66196 11.3645 8.42949 11.3141 8.17641C11.2638 7.92332 11.2896 7.66099 11.3884 7.42259C11.4871 7.18419 11.6544 6.98043 11.8689 6.83707Z"
                  fill="#6366F1"
                  stroke="#6366F1"
                  strokeWidth="0.03125"
                />
              </svg>
            </div>
            <div className={style.modal__suggestion}>
              <p className={style.modal__suggestion__title}>Gợi ý: </p>
              <a href="#" className={style.modal__suggestion__example}>
                Kỹ thuật lập trình -20/3,
              </a>
              <a href="#" className={style.modal__suggestion__example}>
                {" "}
                YCPM - 18/2
              </a>
            </div>
            <div className={style.modal__buttonsection}>
              <div className={style.modal__button}>
                <svg
                  width="125"
                  height="41"
                  viewBox="0 0 125 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="124"
                    height="40"
                    rx="9.5"
                    fill="#EEF2FF"
                    stroke="#6366F1"
                  />
                  <path
                    d="M24.3636 28C28.7955 28 31.4233 25.2585 31.4233 20.7131C31.4233 16.1818 28.7955 13.4545 24.4631 13.4545H19.4347V19.5696H17.3395V21.196H19.4347V28H24.3636ZM22.0696 25.7202V21.196H24.1435V19.5696H22.0696V15.7344H24.3139C27.2685 15.7344 28.8097 17.3821 28.8097 20.7131C28.8097 24.0582 27.2685 25.7202 24.2358 25.7202H22.0696ZM36.9524 28.2202C38.6641 28.2202 39.6868 27.4176 40.1555 26.5014H40.2408V28H42.7124V20.6989C42.7124 17.8153 40.3615 16.9489 38.2805 16.9489C35.9865 16.9489 34.2251 17.9716 33.657 19.9602L36.0575 20.3011C36.3132 19.5554 37.0376 18.9162 38.2947 18.9162C39.4879 18.9162 40.1413 19.527 40.1413 20.5994V20.642C40.1413 21.3807 39.3672 21.4162 37.4425 21.6222C35.326 21.8494 33.3018 22.4815 33.3018 24.9389C33.3018 27.0838 34.8714 28.2202 36.9524 28.2202ZM39.8004 13.3409C39.7933 14.0369 39.3956 14.6548 38.3942 14.6548C37.3786 14.6548 36.995 14.0227 36.995 13.3409H35.0845C35.0774 15.0028 36.3629 16.125 38.3942 16.125C40.4396 16.125 41.7251 15.0028 41.7251 13.3409H39.8004ZM37.62 26.331C36.5476 26.331 35.7805 25.8409 35.7805 24.8963C35.7805 23.9091 36.6399 23.4972 37.7905 23.3338C38.4652 23.2415 39.8146 23.071 40.1484 22.8011V24.0866C40.1484 25.3011 39.1683 26.331 37.62 26.331ZM38.2947 31.9205C39.1115 31.9205 39.7791 31.2955 39.7791 30.5284C39.7791 29.7543 39.1115 29.1293 38.2947 29.1293C37.4709 29.1293 36.8033 29.7543 36.8033 30.5284C36.8033 31.2955 37.4709 31.9205 38.2947 31.9205ZM50.745 17.0909H48.593V14.4773H46.022V17.0909H44.4737V19.0795H46.022V25.1449C46.0078 27.1974 47.4993 28.206 49.4311 28.1491C50.1626 28.1278 50.6669 27.9858 50.9439 27.8935L50.5107 25.8835C50.3686 25.919 50.0774 25.983 49.7578 25.983C49.1115 25.983 48.593 25.7557 48.593 24.7188V19.0795H50.745V17.0909ZM60.4272 13.4545H57.8562V28H60.4272V13.4545ZM66.2102 28.2202C67.9219 28.2202 68.9446 27.4176 69.4134 26.5014H69.4986V28H71.9702V20.6989C71.9702 17.8153 69.6193 16.9489 67.5384 16.9489C65.2443 16.9489 63.483 17.9716 62.9148 19.9602L65.3153 20.3011C65.571 19.5554 66.2955 18.9162 67.5526 18.9162C68.7457 18.9162 69.3991 19.527 69.3991 20.5994V20.642C69.3991 21.3807 68.625 21.4162 66.7003 21.6222C64.5838 21.8494 62.5597 22.4815 62.5597 24.9389C62.5597 27.0838 64.1293 28.2202 66.2102 28.2202ZM66.8778 26.331C65.8054 26.331 65.0384 25.8409 65.0384 24.8963C65.0384 23.9091 65.8977 23.4972 67.0483 23.3338C67.723 23.2415 69.0724 23.071 69.4062 22.8011V24.0866C69.4062 25.3011 68.4261 26.331 66.8778 26.331ZM67.5526 31.9205C68.3693 31.9205 69.0369 31.2955 69.0369 30.5284C69.0369 29.7543 68.3693 29.1293 67.5526 29.1293C66.7287 29.1293 66.0611 29.7543 66.0611 30.5284C66.0611 31.2955 66.7287 31.9205 67.5526 31.9205ZM74.5554 28H77.1264V17.0909H74.5554V28ZM75.848 15.5426C76.6648 15.5426 77.3324 14.9176 77.3324 14.1506C77.3324 13.3764 76.6648 12.7514 75.848 12.7514C75.0241 12.7514 74.3565 13.3764 74.3565 14.1506C74.3565 14.9176 75.0241 15.5426 75.848 15.5426Z"
                    fill="#6366F1"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M97.5008 23.294L102.679 28.596C103.199 29.132 103.537 29.1375 104.066 28.596L105.105 27.532C105.614 27.011 105.648 26.669 105.105 26.1125L99.6223 20.5L105.105 14.8875C105.619 14.36 105.629 14.004 105.105 13.4675L104.066 12.404C103.527 11.852 103.194 11.8775 102.68 12.404L97.5008 17.706L92.3223 12.4045C91.8078 11.878 91.4748 11.8525 90.9358 12.4045L89.8968 13.468C89.3728 14.0045 89.3823 14.3605 89.8968 14.888L95.3793 20.5L89.8968 26.1125C89.3533 26.669 89.3823 27.011 89.8968 27.532L90.9353 28.596C91.4598 29.1375 91.7978 29.132 92.3218 28.596L97.5008 23.294Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
              <div className={style.modal__button}>
                <svg
                  width="125"
                  height="41"
                  viewBox="0 0 125 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="124"
                    height="40"
                    rx="9.5"
                    fill="#EEF2FF"
                    stroke="#6366F1"
                  />
                  <path
                    d="M42.179 18.0994H44.8636C44.4162 15.2443 41.9446 13.2557 38.7273 13.2557C34.9205 13.2557 32.0653 16.054 32.0653 20.7415C32.0653 25.3438 34.7926 28.1989 38.8054 28.1989C42.4062 28.1989 44.9844 25.8835 44.9844 22.1335V20.3864H39.0824V22.446H42.4347C42.392 24.5199 41.0071 25.8338 38.8196 25.8338C36.3835 25.8338 34.7145 24.0085 34.7145 20.7131C34.7145 17.4389 36.4119 15.6207 38.7628 15.6207C40.517 15.6207 41.7102 16.5582 42.179 18.0994ZM58.3846 16.5298C58.3775 17.8935 58.2567 18.6179 56.9854 18.7884V17.0909H54.4144V23.4119C54.4144 25.0739 53.2283 25.8977 52.092 25.8977C50.8562 25.8977 50.0323 25.0241 50.0323 23.6392V17.0909H47.4613V24.0369C47.4613 26.6577 48.9528 28.142 51.0977 28.142C52.7312 28.142 53.8817 27.2827 54.3789 26.0611H54.4925V28H56.9854V20.0881C59.3008 19.9034 60.0323 18.696 60.0394 16.5298H58.3846ZM53.2283 15.5568V14.9034C53.9883 14.7898 54.734 14.3849 54.7269 13.483C54.734 12.304 53.4982 11.5795 51.1545 11.5795L51.0906 12.8509C51.9144 12.8509 52.5465 13.0213 52.5394 13.5327C52.5465 13.9304 52.1701 14.1506 51.1687 14.1932L51.2681 15.5568H53.2283ZM61.0124 28H63.5835V17.0909H61.0124V28ZM62.305 15.5426C63.1218 15.5426 63.7894 14.9176 63.7894 14.1506C63.7894 13.3764 63.1218 12.7514 62.305 12.7514C61.4812 12.7514 60.8136 13.3764 60.8136 14.1506C60.8136 14.9176 61.4812 15.5426 62.305 15.5426Z"
                    fill="#6366F1"
                  />
                  <path
                    d="M82.6938 20.9999L79.2988 12.2719C79.0628 11.6649 79.6548 11.0839 80.2408 11.2899L80.3338 11.3299L98.3338 20.3299C98.4496 20.3879 98.5485 20.475 98.6207 20.5826C98.6929 20.6902 98.7359 20.8147 98.7457 20.9439C98.7555 21.0731 98.7316 21.2027 98.6764 21.3199C98.6212 21.4372 98.5366 21.5381 98.4308 21.6129L98.3338 21.6709L80.3338 30.6709C79.7508 30.9619 79.1168 30.4269 79.2688 29.8239L79.2988 29.7279L82.6938 20.9999L79.2988 12.2719L82.6938 20.9999ZM81.4018 13.5399L84.0118 20.2499H90.6388C90.82 20.2499 90.9951 20.3155 91.1317 20.4347C91.2683 20.5538 91.3571 20.7183 91.3818 20.8979L91.3888 20.9999C91.3887 21.1813 91.323 21.3565 91.2036 21.4931C91.0843 21.6297 90.9195 21.7185 90.7398 21.7429L90.6388 21.7499H84.0098L81.4008 28.4599L96.3218 20.9999L81.4008 13.5399H81.4018Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.background} onClick={onClose} />
    </div>
  );
};

export default CreateGroup;
