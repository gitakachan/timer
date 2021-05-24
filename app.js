//簡化getElementById
function $(id) {
  return document.getElementById(id);
}

window.onload = function () {
  let hr = $("hr");
  let min = $("min");
  let sec = $("sec");
  let start = $("start");
  let pause = $("pause");
  let reset = $("reset");

  //開始計時
  let count = 0; //開始計時後累加的總秒數
  let timer = null;
  start.onclick = function () {
    timer = setInterval(function () {
      count++;
      //根據count來改變顯示的時分秒的值
      sec.innerHTML = lessThanTen(count % 60);
      min.innerHTML = lessThanTen(parseInt(count / 60) % 60);
      hr.innerHTML = lessThanTen(parseInt(count / 60 / 60));
    }, 1000);
  };

  //處理個位數字沒顯示00
  function lessThanTen(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }
};
