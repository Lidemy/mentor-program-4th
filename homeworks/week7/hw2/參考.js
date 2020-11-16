/*
監聽 submit 事件
將 event 丟到 submitCheck() 檢查，再依結果決定要呼叫 submitSuccess() 或者 submitFail()
*/
document.querySelector('form').addEventListener('submit', (e) => {
  if (submitCheck(e) === true) submitSuccess(e);
  else submitFail(submitCheck(e), e);
});

/*
監聽 click 事件
若是有點選到 radio，把 radioCheck 狀態改成 true
把所有有「已讀」屬性的 input 丟進去 changeInputBg()，
再把所有第一次點擊(value 是空值)的 input 加上一個「已讀」的屬性(data-read = true)。
*/
window.addEventListener('click', (e) => {
  if (e.target.getAttribute('type') === 'radio') radioCheck = true;
  changeInputBg(document.querySelectorAll('input[data-read="true"]'));
  if (e.target.hasAttribute('required') && e.target.value === '') {
    e.target.setAttribute('data-read', 'true');
  }
});


// 用來記錄 radio 是否有被點選
let radioCheck = false;

/*
submit 檢查
建立一個空陣列，檢查每一個 input，把未填的 input 推進陣列
檢查 radio 是否有被點選，沒有的話就將該欄位變色
通通確認完成後，若陣列依然為空，且 radio 有填寫，就回傳 true，否則回傳陣列
*/
function submitCheck(e) {
  const inputUnfilled = [];
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].getAttribute('type') === 'radio' && !e.target[i].checked) continue;
    if (e.target[i].hasAttribute('required') && e.target[i].value === '') {
      inputUnfilled.push(e.target[i]);
    }
  }
  if (radioCheck === false) document.querySelector('.form__radio').parentElement.classList.add('read');
  return inputUnfilled.length === 0 && radioCheck === true ? true : inputUnfilled;
}

/*
submit 成功
將結果一個一個印出來
判斷 type 為 radio，但 checked 為 false 就不印。
判斷 checked 為 true，印出 name 跟 id
其餘的情況都印出 name 跟 value
*/
function submitSuccess(e) {
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].getAttribute('type') === 'radio' && !e.target[i].checked) continue;
    if (e.target[i].checked) {
      console.log(`${e.target[i].name}: ${e.target[i].id}`);
      continue;
    }
    console.log(`${e.target[i].name}: ${e.target[i].value}`);
  }
  alert('🙆 感謝您的報名！我們將迅速為您安排療程');
}

/*
顯示錯誤訊息，並呼叫 changeInputBg() 將未填寫資料傳進去
*/
function submitFail(data, e) {
  alert('🙅‍ 請先把資料填完再送出！');
  changeInputBg(data);
  e.preventDefault();
}

/*
setInputBg 這個函式有兩種情況會被呼叫 1.submit 失敗時 2.click 螢幕時，有 input 已讀但未填時。
若是第一種情況: submit 失敗，會去撈取傳入的 elements 並改變背景顏色
若是第二種情況已讀未填，會去撈取符合 attribute 有 isRead 這個屬性的資料來改變背景顏色
*/
function changeInputBg(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].parentElement.classList.add('read');
    if (elements[i].value) elements[i].parentElement.classList.remove('read');
  }
  if (radioCheck === true) {
    document.querySelector('.form__radio').parentElement.classList.remove('read');
  }
}
