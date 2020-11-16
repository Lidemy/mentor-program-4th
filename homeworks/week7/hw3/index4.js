

let num = 1; // 編號用

document.querySelector('.create_todo').addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && e.target.value !== '');  /*keycode鍵盤按鍵*/
	  const value = e.target.value;
	  e.target.value = '';
	  createTodo(value);
});

document.querySelector('.list').addEventListener('click', (e) => {
  const target = e.target.getAttribute('class');
  if (target === 'btn_delete') {
    const value = e.target.getAttribute('data-value');
    deleteTodo(value);
  }
});

function createTodo(value) {
  const element__li = document.createElement('li');
  // <li></li>
  element__li.setAttribute('data-value', `${num}`); /*元素本身創標籤*/
  // <li data-value="2"></li>
  element__li.innerHTML = ` 
	  <div class='view'>
	  	<div>
	  		<input type="checkbox" id="cb_${num}" class='checked'>
	      <label for='cb_${num}'>
	        <span class='switch_checked'></span>
	        <p class='text_checked'>${escapeHtml(value)}</p>
	  	  </label>
	  	</div>
	  	<input type="button" class='btn_delete' data-value='${num}'>
	  </div>
  `; /*元素的子標籤創html標籤*/
  /*
  <li data-value="2">
    <div class='view'>
    	<div>
    		<input type="checkbox" id="cb_1" class='checked'>
        <label for='cb_1'>
          <span class='switch_checked'></span>
          <p class='text_checked'>value</p>
    	  </label>
    	</div>
    	<input type="button" class='btn_delete' data-value='1'>
    </div>
  </li>
  */
  document.querySelector('.list').appendChild(element__li); /*把前面自己創造的element__li放到真實存在的ul標籤下面*/
  num++;
}

function deleteTodo(value) {
  const li = document.querySelector(`li[data-value="${value}"]`);
  document.querySelector('.list').removeChild(li);
  return;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}