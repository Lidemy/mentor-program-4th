/*
需求:
按 submit 驗證必填是否完成 未完成的題目跳出警示
已點選過的必填題目若未填 跳出警示


功能:
click 監聽器
submit 監聽器
submit 驗證
更換背景顏色


備註:
*/



window.addEventListener('click', (e) => {
  if (e.target.getAttribute('type') === 'radio') radioCheck = true; // 若是有點選到 radio，把 radioCheck 狀態改成 true
  
  changeBg(document.querySelectorAll('input[data-read="true"]'));  // 呼叫 changeBg 把先前有已讀標記的題目變紅

  if (e.target.hasAttribute('required') && e.target.value === '') { // 把所有第一次點擊(value 是空值)的 input 加上一個「已讀」的屬性(data-read = true)
    e.target.setAttribute('data-read', 'true');
    //<input required="" value="" data-read="true">
  }
})


/*
鎖定form底下的submit加裝監聽器
取消瀏覽器設定
呼叫checkSubmit函式
*/

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  checkSubmit(e)
})


let radioCheck = false; // 用來記錄 radio 是否有被點選
let submitResult = null; //用來記錄 checkSubmit 成功或失敗的結果

/*
submit 檢查
建立一個空陣列，放未填的值
檢查每一個 input的值，
把未填的 input 推進陣列
檢查每一題確認設定的未填空陣列依然為空的，且 radio 有填寫，
回傳 
呼叫submitSuccess函式
submitResult賦值true
否則回傳
submitResult賦值fail
呼叫submitFail函式和數據
*/

function checkSubmit(e) {
  const inputUnfilled = [];
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].hasAttribute('required') && e.target[i].value === '') {
      inputUnfilled.push(e.target[i]);
    }
  }

  if (inputUnfilled.length === 0 && radioCheck === true) {
    submitSuccess(e);
    submitResult = true;
    return;
  }
  submitResult = false;
  submitFail(inputUnfilled, e);
  return;
}

/*
submit 成功函式
將結果一個一個印出來
判斷 type 為 radio，且沒有被checked 一樣先繼續。
判斷 checked 為 true，印出 name 跟 id
其餘的情況都印出 name 跟 value
跳視窗警示
*/

function submitSuccess(e) {
  console.log(e)
  for (let i = 0; i < e.target.length; i++) {
    if (e.target[i].getAttribute('type') === 'radio' && !e.target[i].checked) continue;
    if (e.target[i].checked === true) {
      console.log(`${e.target[i].name}: ${e.target[i].id}`);
      continue;
    }
    console.log(`${e.target[i].name}: ${e.target[i].value}`);
  }
  alert('🙆 感謝您的報名！我們將迅速為您安排~');
}

/*
顯示錯誤訊息，並呼叫 changeInputBg() 將未填寫資料傳進去
*/

function submitFail(inputUnfilled, e) { 
  alert('🙅‍ 請先把資料填完再送出！');
  changeBg(inputUnfilled);  
  e.preventDefault();
}


/*
changeBg 這個函式有兩種情況會被呼叫 1.submit 失敗時 2.click 螢幕時，有 input 已讀但未填時。
若是第一種情況: submit 失敗，會去撈取傳入的 inputUnfilled 並改變背景顏色
若是第二種情況已讀未填，會去撈取符合 attribute 有 Read 這個屬性的資料來改變背景顏色

changeBg函式
先把所有inputUnfilled的值加上read
判斷inputUnfilled的值不是空值，移除read
判斷radioCheck是true，在.form_radio移除read
判斷submitResult為false且radioCheck為false，在.form_radio加上read
*/

function changeBg(inputUnfilled) { 
  for (let i = 0; i < inputUnfilled.length; i++) {
    inputUnfilled[i].parentElement.classList.add('read'); 
    if (inputUnfilled[i].value !== '') inputUnfilled[i].parentElement.classList.remove('read');
  }
  if (radioCheck === true) {
    document.querySelector('.form_radio').parentElement.classList.remove('read');
  }
  if (submitResult === false && radioCheck === false) document.querySelector('.form_radio').parentElement.classList.add('read');
}

function focusFirstFail() {

}

