import React from "react";

type AppProps = {
  agroup: any;
};
function Group({ agroup }: AppProps) {
  return (
    // 1 group
    <div className="py-0 flex justify-around">
      <div className="relative py-0 h-60 w-72 mb-12">
        {/* thông tin */}
        <div className="absoulute flex grid grid-rows-4 mt-14 gap-y-px bottom-0 pt-14 right bg-white shadow-lg w-64 h-52 pb-3 rounded-xl text-left tracking-normal">
          {/* thông tin 1 */}
          <div className="p-0 flex justify-start pl-10">
            <svg
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
            <p className="pl-2 text-sm leading-5 font-normal">
              {agroup.courseId.facultyId.facultyName}
            </p>
          </div>
          <div className="p-0 flex justify-start pl-10">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.01 14.0833H15.5V2.41667C15.5 1.97464 15.3244 1.55072 15.0118 1.23816C14.6993 0.925595 14.2754 0.75 13.8333 0.75H3C1.995 0.75 0.5 1.41583 0.5 3.25V14.9167C0.5 16.7508 1.995 17.4167 3 17.4167H15.5V15.75H3.01C2.625 15.74 2.16667 15.5875 2.16667 14.9167C2.16667 14.2458 2.625 14.0933 3.01 14.0833ZM4.66667 4.08333H12.1667V5.75H4.66667V4.08333Z"
                fill="#6366F1"
              />
            </svg>
            <p className="pl-2 text-sm leading-5 font-normal">
              {agroup.courseId.courseName}
            </p>
          </div>
          <div className="p-0 flex justify-start pl-10">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 8.5C9.54429 8.5 10.5458 8.08516 11.2842 7.34673C12.0227 6.60831 12.4375 5.60679 12.4375 4.5625C12.4375 3.51821 12.0227 2.51669 11.2842 1.77827C10.5458 1.03984 9.54429 0.625 8.5 0.625C7.45571 0.625 6.45419 1.03984 5.71577 1.77827C4.97734 2.51669 4.5625 3.51821 4.5625 4.5625C4.5625 5.60679 4.97734 6.60831 5.71577 7.34673C6.45419 8.08516 7.45571 8.5 8.5 8.5ZM11.125 4.5625C11.125 5.25869 10.8484 5.92637 10.3562 6.41866C9.86387 6.91094 9.19619 7.1875 8.5 7.1875C7.80381 7.1875 7.13613 6.91094 6.64384 6.41866C6.15156 5.92637 5.875 5.25869 5.875 4.5625C5.875 3.86631 6.15156 3.19863 6.64384 2.70634C7.13613 2.21406 7.80381 1.9375 8.5 1.9375C9.19619 1.9375 9.86387 2.21406 10.3562 2.70634C10.8484 3.19863 11.125 3.86631 11.125 4.5625ZM16.375 15.0625C16.375 16.375 15.0625 16.375 15.0625 16.375H1.9375C1.9375 16.375 0.625 16.375 0.625 15.0625C0.625 13.75 1.9375 9.8125 8.5 9.8125C15.0625 9.8125 16.375 13.75 16.375 15.0625ZM15.0625 15.0573C15.0612 14.7344 14.8604 13.7631 13.9705 12.8733C13.1147 12.0175 11.5043 11.125 8.5 11.125C5.49438 11.125 3.88525 12.0175 3.0295 12.8733C2.13963 13.7631 1.94012 14.7344 1.9375 15.0573H15.0625Z"
                fill="#6366F1"
              />
            </svg>
            <p className="pl-2 text-sm leading-5 font-normal">
              {agroup.instructorId.instructorName}
            </p>
          </div>
          <div className="p-0 flex justify-start pl-10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1946 1.48096H14.2416C14.1824 1.48096 14.1257 1.50445 14.0839 1.54627C14.042 1.58809 14.0186 1.64481 14.0186 1.70396C14.0186 1.74196 14.0306 1.77596 14.0471 1.80696V3.50596C14.0471 3.56822 14.0349 3.62989 14.0111 3.68743C13.9873 3.74497 13.9524 3.79724 13.9084 3.84127C13.8643 3.8853 13.8121 3.92021 13.7545 3.94401C13.697 3.96781 13.6353 3.98002 13.5731 3.97996H12.6541C12.5963 3.97996 12.5391 3.96858 12.4857 3.94646C12.4323 3.92435 12.3838 3.89194 12.3429 3.85108C12.3021 3.81023 12.2697 3.76172 12.2475 3.70834C12.2254 3.65495 12.2141 3.59774 12.2141 3.53996V1.83446C12.2435 1.79725 12.26 1.75142 12.2611 1.70396C12.2611 1.67465 12.2554 1.64563 12.2442 1.61854C12.233 1.59146 12.2166 1.56685 12.1959 1.54613C12.1752 1.52541 12.1506 1.50898 12.1235 1.4978C12.0964 1.48661 12.0674 1.48089 12.0381 1.48096H6.08555C6.02641 1.48096 5.96969 1.50445 5.92787 1.54627C5.88605 1.58809 5.86255 1.64481 5.86255 1.70396C5.86255 1.73846 5.87205 1.76996 5.88605 1.79946V3.51796C5.88605 3.57869 5.87409 3.63884 5.85085 3.69495C5.8276 3.75106 5.79354 3.80205 5.75059 3.84499C5.70764 3.88794 5.65666 3.92201 5.60054 3.94525C5.54443 3.96849 5.48429 3.98046 5.42355 3.98046H4.60755C4.4837 3.98046 4.36491 3.93126 4.27733 3.84368C4.18975 3.7561 4.14055 3.63731 4.14055 3.51346V1.81196C4.16041 1.77937 4.17128 1.74211 4.17205 1.70396C4.17212 1.67465 4.1664 1.64563 4.15521 1.61854C4.14403 1.59146 4.12761 1.56685 4.10688 1.54613C4.08616 1.52541 4.06155 1.50898 4.03447 1.4978C4.00738 1.48661 3.97836 1.48089 3.94905 1.48096H0.837553C0.706132 1.48109 0.580125 1.53332 0.48715 1.6262C0.394175 1.71908 0.341817 1.84504 0.341553 1.97646V16.7435C0.341553 17.0175 0.564053 17.24 0.837553 17.24H17.1946C17.3261 17.2397 17.4521 17.1873 17.545 17.0942C17.6379 17.0011 17.6901 16.875 17.6901 16.7435V1.97646C17.6898 1.84512 17.6375 1.71925 17.5446 1.62638C17.4518 1.53351 17.3259 1.48122 17.1946 1.48096ZM17.1946 16.794H0.837553C0.830944 16.794 0.824401 16.7926 0.818302 16.7901C0.812203 16.7876 0.806669 16.7838 0.802019 16.7791C0.79737 16.7744 0.793697 16.7689 0.791214 16.7627C0.788731 16.7566 0.787487 16.7501 0.787553 16.7435V5.60696H17.2441V16.743C17.2442 16.7496 17.243 16.7561 17.2406 16.7623C17.2382 16.7684 17.2345 16.774 17.2299 16.7788C17.2253 16.7835 17.2198 16.7873 17.2138 16.7899C17.2077 16.7925 17.2012 16.7939 17.1946 16.794Z"
                fill="#6366F1"
              />
              <path
                d="M5.07356 3.47198C5.19656 3.47198 5.29656 3.37198 5.29656 3.24898V0.249978C5.29656 0.220693 5.29079 0.191695 5.27958 0.164639C5.26837 0.137584 5.25195 0.113 5.23124 0.0922928C5.21053 0.0715853 5.18595 0.0551593 5.15889 0.0439525C5.13184 0.0327457 5.10284 0.0269775 5.07356 0.0269775C5.04427 0.0269775 5.01527 0.0327457 4.98822 0.0439525C4.96116 0.0551593 4.93658 0.0715853 4.91587 0.0922928C4.89516 0.113 4.87874 0.137584 4.86753 0.164639C4.85632 0.191695 4.85056 0.220693 4.85056 0.249978V3.24948C4.85056 3.37248 4.95056 3.47198 5.07356 3.47198Z"
                fill="#6366F1"
              />
              <path
                d="M13.1506 3.47198C13.2736 3.47198 13.3736 3.37198 13.3736 3.24898V0.249978C13.3736 0.190834 13.3501 0.134113 13.3082 0.0922928C13.2664 0.0504722 13.2097 0.0269775 13.1506 0.0269775C13.0914 0.0269775 13.0347 0.0504722 12.9929 0.0922928C12.951 0.134113 12.9276 0.190834 12.9276 0.249978V3.24948C12.9276 3.37248 13.0271 3.47198 13.1506 3.47198Z"
                fill="#6366F1"
              />
              <path
                d="M3.92105 8.98046C4.59981 8.98046 5.15005 8.43022 5.15005 7.75146C5.15005 7.0727 4.59981 6.52246 3.92105 6.52246C3.2423 6.52246 2.69205 7.0727 2.69205 7.75146C2.69205 8.43022 3.2423 8.98046 3.92105 8.98046Z"
                fill="#6366F1"
              />
              <path
                d="M7.45305 8.98046C8.13181 8.98046 8.68205 8.43022 8.68205 7.75146C8.68205 7.0727 8.13181 6.52246 7.45305 6.52246C6.77429 6.52246 6.22405 7.0727 6.22405 7.75146C6.22405 8.43022 6.77429 8.98046 7.45305 8.98046Z"
                fill="#6366F1"
              />
              <path
                d="M10.9846 8.98046C11.6633 8.98046 12.2136 8.43022 12.2136 7.75146C12.2136 7.0727 11.6633 6.52246 10.9846 6.52246C10.3058 6.52246 9.75555 7.0727 9.75555 7.75146C9.75555 8.43022 10.3058 8.98046 10.9846 8.98046Z"
                fill="#6366F1"
              />
              <path
                d="M3.92105 12.4029C4.59981 12.4029 5.15005 11.8527 5.15005 11.1739C5.15005 10.4952 4.59981 9.94495 3.92105 9.94495C3.2423 9.94495 2.69205 10.4952 2.69205 11.1739C2.69205 11.8527 3.2423 12.4029 3.92105 12.4029Z"
                fill="#6366F1"
              />
              <path
                d="M7.45305 12.4029C8.13181 12.4029 8.68205 11.8527 8.68205 11.1739C8.68205 10.4952 8.13181 9.94495 7.45305 9.94495C6.77429 9.94495 6.22405 10.4952 6.22405 11.1739C6.22405 11.8527 6.77429 12.4029 7.45305 12.4029Z"
                fill="#6366F1"
              />
              <path
                d="M10.9846 12.4029C11.6633 12.4029 12.2136 11.8527 12.2136 11.1739C12.2136 10.4952 11.6633 9.94495 10.9846 9.94495C10.3058 9.94495 9.75555 10.4952 9.75555 11.1739C9.75555 11.8527 10.3058 12.4029 10.9846 12.4029Z"
                fill="#6366F1"
              />
              <path
                d="M3.92105 15.8255C4.59981 15.8255 5.15005 15.2753 5.15005 14.5965C5.15005 13.9177 4.59981 13.3675 3.92105 13.3675C3.2423 13.3675 2.69205 13.9177 2.69205 14.5965C2.69205 15.2753 3.2423 15.8255 3.92105 15.8255Z"
                fill="#6366F1"
              />
              <path
                d="M7.45305 15.8255C8.13181 15.8255 8.68205 15.2753 8.68205 14.5965C8.68205 13.9177 8.13181 13.3675 7.45305 13.3675C6.77429 13.3675 6.22405 13.9177 6.22405 14.5965C6.22405 15.2753 6.77429 15.8255 7.45305 15.8255Z"
                fill="#6366F1"
              />
              <path
                d="M10.9846 15.8255C11.6633 15.8255 12.2136 15.2753 12.2136 14.5965C12.2136 13.9177 11.6633 13.3675 10.9846 13.3675C10.3058 13.3675 9.75555 13.9177 9.75555 14.5965C9.75555 15.2753 10.3058 15.8255 10.9846 15.8255Z"
                fill="#6366F1"
              />
              <path
                d="M14.4336 8.98046C15.1123 8.98046 15.6626 8.43022 15.6626 7.75146C15.6626 7.0727 15.1123 6.52246 14.4336 6.52246C13.7548 6.52246 13.2046 7.0727 13.2046 7.75146C13.2046 8.43022 13.7548 8.98046 14.4336 8.98046Z"
                fill="#6366F1"
              />
              <path
                d="M14.4336 12.4029C15.1123 12.4029 15.6626 11.8527 15.6626 11.1739C15.6626 10.4952 15.1123 9.94495 14.4336 9.94495C13.7548 9.94495 13.2046 10.4952 13.2046 11.1739C13.2046 11.8527 13.7548 12.4029 14.4336 12.4029Z"
                fill="#6366F1"
              />
              <path
                d="M14.4336 15.8255C15.1123 15.8255 15.6626 15.2753 15.6626 14.5965C15.6626 13.9177 15.1123 13.3675 14.4336 13.3675C13.7548 13.3675 13.2046 13.9177 13.2046 14.5965C13.2046 15.2753 13.7548 15.8255 14.4336 15.8255Z"
                fill="#6366F1"
              />
            </svg>
            <p className="pl-2 text-sm leading-5 font-normal">
              {agroup.academicId.schoolyear}
            </p>
          </div>
        </div>
        {/* //tên lớp học */}
        <div className="absolute flex justify-center items-center top-10 -left-5 w-64 h-16 bg-indigo-500 rounded-xl text-left tracking-normal pl-3">
          <p className="text-lg leading-7 font-semibold text-white">
            {agroup.className}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Group;
