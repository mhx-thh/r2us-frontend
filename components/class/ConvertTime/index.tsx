import React from "react";

function ConvertTime(props: any) {
  function DOM(month, year) {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 2:
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) return 29;
        else return 28;
      default:
        return 30;
    }
  }
  const time = props.data.substr(0, 16);
  const dayTime = parseInt(time.slice(8, 10), 10);
  const monthTime = parseInt(time.slice(5, 7), 10);
  const yearTime = parseInt(time.slice(0, 4), 10);
  const hourTime = parseInt(time.slice(11, 13), 10);
  const minute =
    parseInt(time.slice(14, 16), 10) < 10
      ? "0" + parseInt(time.slice(14, 16), 10)
      : parseInt(time.slice(14, 16), 10);
  let hour, day, month, year;
  if (hourTime + 7 >= 24) {
    hour = (hourTime + 7) % 24;
    if (dayTime + 1 > DOM(monthTime, yearTime)) {
      day = 1;
      month = monthTime + 1 > 12 ? 1 : monthTime + 1;
      year = month == 1 ? yearTime + 1 : year;
    } else {
      day = dayTime + 1;
      month = monthTime;
      year = yearTime;
    }
  } else {
    hour = hourTime + 7;
    day = dayTime;
    month = monthTime;
    year = yearTime;
  }
  hour = hour < 10 ? "0" + hour : hour;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  return (
    <div>
      {hour}:{minute}, {day}/{month}/{year}
    </div>
  );
}

export default ConvertTime;
