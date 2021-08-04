import React, { useState } from "react";
import style from "./style.module.css";
import { useEffect } from "react";
const AddReview = () => {
  //Api request => data
  //Check data cho link
  //Hiện gợi ý
  const array = [];
  const [hint, setHint] = useState(false);
  const [link, setLink] = useState("");
  const handleInput = (e) => {
    setLink(e);
  };
  useEffect(() => {
    async function fecthdata() {
      try {
        const requestURL =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        //const requestURL='https://olar-dev.herokuapp.com/api/v1/question';
        const respone = await fetch(requestURL);
        const responeJSON = await respone.json();
        //console.log(responeJSON);

        const { data } = responeJSON; // lấy url tài liệu
        console.log(data);
        //Lưu data.url về
      } catch (error) {
        console.log(error.message);
      }
    }
    fecthdata();
  }, []);

  const showHint = (data) => {
    //data.url
    //map => compare =>extract
    if (link === data.url) {
      setHint(true);
      array.push(data.url);
    }
  };
  return (
    <form className={style.content}>
      <div className={style.title}>
        <p>Cảm nhận về môn học</p>
      </div>
      <div className={style.group}>
        <ul className={style.info}>
          <li>
            <label>Tên</label>
            <input name="name" id="name" placeholder="Tên môn học"></input>
          </li>
          <li>
            <label>Mô tả</label>
            <textarea
              id="description"
              name="description"
              placeholder="Mô tả cho môn học"
            ></textarea>
          </li>
        </ul>
      </div>
      {hint && (
        <div className={style.hint}>
          <p>Tài liệu đã có người đăng. Bạn có muốn tiếp tục không</p>
          <span>Bạn có thể tham khảo một số link dưới</span>
          <textarea id="linkMatch" name="linkMatch"></textarea>
          {/* list url trùng khớp  dưới dạng textarea*/}
        </div>
      )}
      <div className={style.gr_bg_btn}>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};

export default AddReview;
