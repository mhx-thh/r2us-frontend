import React from "react";
const Footer = () => {
  return (
    <footer className="mb-0 mt-32">
      <div className="w-full bg-white px-28 flex justify-between py-0 mb-6">
        <div>
          <div className="flex">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.4912 38.9761C34.6368 38.9761 34.08 39.3121 33.4368 40.2145C33.4176 40.2433 33.2736 40.1089 33.12 39.9169C32.9568 39.7249 32.5632 39.4369 32.2368 39.2737C31.9104 39.1105 31.5936 38.9761 31.5168 38.9761C31.4112 38.9761 31.392 39.5905 31.392 42.3265C31.392 44.1697 31.4208 45.7441 31.4496 45.8305C31.4976 45.9553 31.6896 45.9841 32.5344 45.9841C33.2064 45.9841 33.6 45.9457 33.6768 45.8689C33.7536 45.7921 33.792 45.2257 33.792 43.9777C33.792 42.0097 33.8592 41.7313 34.3968 41.3377C34.6272 41.1745 34.8 41.1361 35.4048 41.1457C35.8656 41.1553 36.1728 41.1169 36.2112 41.0497C36.2496 40.9921 36.288 40.5697 36.288 40.1089C36.288 39.0913 36.2016 38.9761 35.4912 38.9761Z"
                fill="#4F46E5"
              />
              <path
                d="M43.152 43.872H41.1936L42.2976 42.4512C43.536 40.8672 44.112 39.8208 44.2656 38.8992C44.496 37.4112 43.8432 36.1824 42.5088 35.568C42.1056 35.3856 41.7504 35.3088 41.1648 35.28C39.4752 35.184 38.1792 35.904 37.5168 37.3056C37.1904 38.016 37.056 38.8608 37.2576 38.9856C37.4208 39.0816 39.168 39.1008 39.3216 38.9952C39.3792 38.9568 39.504 38.6688 39.6096 38.3616C39.84 37.6416 40.1376 37.4016 40.7808 37.4112C41.3568 37.4208 41.616 37.5456 41.808 37.92C42.2304 38.736 41.8944 39.36 39.1488 42.864C37.9104 44.448 36.864 45.8016 36.8256 45.8688C36.7584 45.9744 37.3248 45.9936 39.9552 45.9648L43.152 45.936L43.6992 45.6672C43.9968 45.5232 44.3808 45.2448 44.5536 45.0528C44.8416 44.7168 45.12 44.1888 45.12 43.968C45.12 43.9104 44.4384 43.872 43.152 43.872Z"
                fill="#4F46E5"
              />
              <path
                d="M17.1552 28.224C17.0976 28.2336 14.3808 31.1136 14.4096 31.1328C14.4288 31.1424 14.6592 31.2576 14.9088 31.392C15.4464 31.6704 16.2432 32.4672 16.4832 32.9664C16.5696 33.1584 16.6656 33.312 16.6944 33.312C16.7328 33.312 17.3664 32.6976 18.1248 31.9392L19.488 30.576L18.3264 29.3952C17.6928 28.752 17.1648 28.224 17.1552 28.224Z"
                fill="#4F46E5"
              />
              <path
                d="M14.112 32.2656C13.4592 31.968 12.672 31.9968 11.952 32.3424C11.4528 32.5824 10.7712 33.2256 6.89281 37.1136C3.51361 40.512 2.36161 41.7216 2.21761 42.048C1.92001 42.7008 1.93921 43.6896 2.26561 44.3328C2.71681 45.2448 3.64801 45.8112 4.66561 45.8112C5.77921 45.8208 5.74081 45.8496 10.7424 40.8672C15.7632 35.856 15.744 35.8848 15.744 34.752C15.744 33.6768 15.1104 32.7168 14.112 32.2656Z"
                fill="#4F46E5"
              />
              <path
                d="M37.488 3.07203C36.1632 2.41923 35.2416 2.10243 33.696 1.75683C32.7744 1.55523 32.2944 1.50723 30.768 1.48803C28.7712 1.45923 28.8672 1.44963 27.2064 1.77603C25.7856 2.06403 24.672 2.44803 23.2896 3.13923C21.7152 3.91683 20.5728 4.76163 19.1424 6.18243C16.8768 8.45763 15.5616 10.8192 14.8224 13.968C14.5632 15.0528 14.544 15.2448 14.5536 17.328C14.5536 19.2576 14.5728 19.6608 14.7648 20.5152C15.7056 24.8352 18.0864 28.3392 21.696 30.7008C23.52 31.9008 25.4784 32.688 27.6 33.0816C29.0688 33.36 32.0256 33.3408 33.4848 33.0432C37.7856 32.1792 41.3568 29.7792 43.8048 26.112C45.7536 23.1936 46.56 20.064 46.3488 16.272C46.0512 10.7328 42.576 5.55843 37.488 3.07203ZM43.0944 22.0032C41.8656 25.344 39.1968 28.2144 36.0096 29.616C34.1952 30.4128 32.8992 30.7104 30.96 30.7872C29.2224 30.8544 27.9264 30.6816 26.3616 30.1728C19.824 28.0704 15.9168 21.3984 17.28 14.688C17.7984 12.1536 18.9312 10.0128 20.7552 8.10243C22.8768 5.89443 25.6992 4.44483 28.656 4.04163C29.6928 3.89763 32.16 3.99363 33.168 4.20483C38.448 5.33763 42.5664 9.46563 43.632 14.6688C44.1216 17.0784 43.9296 19.7376 43.0944 22.0032Z"
                fill="#4F46E5"
              />
              <path
                d="M25.6896 16.7905L29.2128 14.7361L32.7456 12.6721L33.1392 12.9217C34.7712 13.9585 36.7296 13.4209 37.6512 11.6929C37.9776 11.0881 37.968 9.75367 37.632 9.07207C37.3248 8.45767 36.7776 7.91047 36.1632 7.62247C35.76 7.44007 35.52 7.39207 34.896 7.40167C33.7536 7.41127 33.2736 7.61287 32.592 8.36167C32.0352 8.97607 31.8336 9.52327 31.824 10.3969L31.8144 11.1361L28.2816 13.2001L24.7488 15.2641L24.3072 14.9761C23.6928 14.5729 23.28 14.4673 22.4544 14.5153C21.3216 14.5729 20.5056 15.0817 19.9008 16.1089C19.6512 16.5217 19.632 16.6465 19.632 17.5201C19.632 18.5953 19.7664 18.9697 20.4096 19.6801C20.9472 20.2753 21.6864 20.5825 22.56 20.5921C23.328 20.5921 23.712 20.4769 24.336 20.0641L24.7296 19.8145L28.32 21.9169L31.92 24.0193V24.7489C31.9296 25.6705 32.208 26.2561 32.9376 26.9185C34.3488 28.1953 36.6624 27.7345 37.5456 25.9969C37.8432 25.4305 37.9008 24.3841 37.68 23.7217C37.2864 22.5409 36.3072 21.8017 34.992 21.7153C34.3776 21.6769 34.224 21.7057 33.7344 21.9265C33.4272 22.0705 33.1008 22.2529 33.0144 22.3297C32.88 22.4545 32.4768 22.2433 29.2704 20.3809L25.6704 18.2881L25.68 17.5393L25.6896 16.7905Z"
                fill="#4F46E5"
              />
            </svg>
            <span className="text-indigo-500 text-xl leading-8 font-semibold">
              R2US
            </span>
          </div>
          <p className="text-black text-lg leading-8 font-medium">
            Nền tảng chia sẻ tài liệu và cảm nhận
          </p>
        </div>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">
            Tài Nguyên
          </p>
          <ul className="text-black text-sm leading-5 font-medium underline">
            <li>
              <a href="#">Hướng dẫn chia sẻ tài liệu</a>
            </li>
            <li>
              <a href="#">Hướng dẫn chia sẻ cảm nhận</a>
            </li>
            <li>
              <a href="#">Hướng dẫn tham gia lớp</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">R2us</p>
          <ul className="text-black text-sm leading-5 font-medium underline">
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-black text-lg leading-8 font-semibold">Liên Hệ</p>
          <svg
            width="24"
            height="24"
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
      </div>
      <div className="w-full h-14 bg-gray-200 px-28 py-2.5">
        <p className="text-sm leading-8 font-medium"> © 2021 R2us —@r2us </p>
      </div>
    </footer>
  );
};
export default Footer;
