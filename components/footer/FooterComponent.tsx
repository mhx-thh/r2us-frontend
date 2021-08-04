import React from "react";
const Footer = () => {
  return (
    <footer className="mb-0 mt-32">
      <div className="w-full bg-white px-28 flex justify-between py-0 mb-6">
        <div>
          <div className="flex">
            Logo
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
          icon
        </div>
      </div>
      <div className="w-full h-14 bg-gray-200 px-28 py-2.5">
        <p className="text-sm leading-8 font-medium"> © 2021 R2us —@r2us </p>
      </div>
    </footer>
  );
};
export default Footer;
