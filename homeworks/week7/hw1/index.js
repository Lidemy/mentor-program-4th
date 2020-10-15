
/*
需求:
點選題目或加號 都可以顯示答案
否則不顯示
若已經顯示答案 點選答案或減號 都會將答案收起

功能:
預設答案全部為隱藏 display: none  class="hide"
題目跟加號都要加上 click 監聽器 > 監聽到 click 事件 要將對應的答案顯示
    (監聽 question_1 把 answer_1 class="hide" 拿掉) 
答案跟減號都要加上 click 監聽器 > 監聽到 click 事件 要將對應的答案隱藏
    (監聽 question_1 把 answer_1 class="hide" 加上去)

備註:
*/



document.querySelector('.faqlist').addEventListener('click', function(e){
  let num = e.target.getAttribute('data-value');
  document.querySelector(`.answer_${num}`).classList.toggle('hide');
  document.querySelector(`.toggleOpen_${num}`).classList.toggle('minus');

  if (document.querySelector(`.toggleOpen_${num}`).classList.contains('minus')) {
    document.querySelector(`.toggleOpen_${num}`).innerText = '-';
  } else {
    document.querySelector(`.toggleOpen_${num}`).innerText = '+';
  }
})