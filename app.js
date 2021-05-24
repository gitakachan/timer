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

  //暫停計時器
  pause.onclick = function () {
    clearInterval(timer);
  };

  //重啟計時器 1.數據清空（總秒數清空）2.畫面顯示歸零
  reset.onclick = function () {
    //保險起見再停止計時器一次
    clearInterval(timer);

    //1.清空數據
    count = 0;

    //2.畫面歸零
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
  };
};
