/**
 * @description 获取随机id
 * @param length
 * @returns {string}
 */
export function uuid(length = 32) {
  const num = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += num.charAt(Math.floor(Math.random() * length));
  }
  return str;
}

export function parseTime(time) {
  if (time) {
    console.log("time", time);
    const dateTime = new Date(time);
    const Year = dateTime.getFullYear();
    /**
     * 在日期格式中， 月份是从0开始的， 因此要加0
     * 使用三元表达式在小于10的前面加0， 以达到格式统一 如 09: 11: 05
     */
    const Month =
      dateTime.getMonth() < 10
        ? "0" + (dateTime.getMonth() + 1)
        : dateTime.getMonth() + 1;
    const Dates =
      dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
    const Hours =
      dateTime.getHours() < 10
        ? "0" + dateTime.getHours()
        : dateTime.getHours();
    const Minutes =
      dateTime.getMinutes() < 10
        ? "0" + dateTime.getMinutes()
        : dateTime.getMinutes();
    const Seconds =
      dateTime.getSeconds() < 10
        ? "0" + dateTime.getSeconds()
        : dateTime.getSeconds();
    return (
      Year +
      "-" +
      Month +
      "-" +
      Dates +
      "-" +
      Hours +
      ":" +
      Minutes +
      ":" +
      Seconds
    );
  } else {
    return "";
  }
}

// HTML5 download属性实现下载功能
export function downloadFile(obj, name, suffix) {
  console.log("downloadFile => name", name);
  // 创建隐藏的可下载链接
  const url = window.URL.createObjectURL(new Blob([obj]));
  console.log(url);
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = url;
  const fileName = parseTime(new Date()) + "-" + name + "." + suffix;
  link.setAttribute("download", fileName);
  document.body.appendChild(link);
  // 出发点击
  link.click();
  // 移除
  document.body.removeChild(link);
}
