const content_type = "application/json";
let API_Url = "https://student-json-api.lidemy.me";
let isLogin = false;
let nickname = null;

/*
串後端api資料
取得留言匿名名稱、時間、留言內容
*/
function getComments(page) {
	var xhr = new XMLHttpRequest();
	xhr.open(
		"GET",
		`${API_Url}/comments?_page=${page}&_limit=10&_sort=id&_order=desc`,
		true
	);
	xhr.setRequestHeader("content-type", content_type);
	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			console.log(result);
			for (let i = 0; i < result.length; i++) {
				/*讓最新的留言至頂*/
				let element = document.createElement("li");
				element.classList.add("message_detail");
				if (isLogin && result[i].nickname === nickname) {
					/*判斷登入狀態，比對該使用者是否具有第i篇留言的編輯刪除權限*/
					element.innerHTML = `
					  <div class='message_user'>
						<a class='avatar' href='#'>
						  <img src='./photo/user-circle.svg'>
						</a>
					  </div>  
					  <div class='message_card'>
						<span class='nickname'>${escape(result[i].nickname)}</span> 
						<span class='create_time'>${new Date(
							result[i].createdAt
						).toLocaleString()}</span> 
						<a class='edit' href='./update_comments.html?id=${result[i].id}'>
						  <img src='./photo/pencil.svg'>
						</a>
						<a class='delete' data-value='${result[i].id}'>
						  <img src='./photo/delete.svg'>
						</a>
						<p>${escape(result[i].body)}</p>
					  </div>
					`;
				} else {
					element.innerHTML = `
						<div class='message_user'>
						<a class='avatar' href='#'>
							<img src='./photo/user-circle.svg'>
						</a>
						</div>  
						<div class='message_card'>
						<span class='nickname'>${escape(result[i].nickname)}</span> 
						<span class='create_time'>${new Date(
							result[i].createdAt
						).toLocaleString()}</span> 
						<p>${escape(result[i].body)}</p>
						</div>`;
				}
				document.querySelector(".massage_content").appendChild(element);
			}
		}
	};
	xhr.send();
}

/*${new Date(result[i].createdAt).toLocaleString()} 建立一個日期的物件，將createdAt代入，並透過toLocaleString()轉換成使用者所在時區的顯示*/

/*
使用者按下sumit新增留言，home成功顯示留言
*/
document.querySelector(".comments_submit").addEventListener("click", (e) => {
	const target = e.target.getAttribute("class");
	console.log(target);
	if (target === "comments_submit_btn") {
		const textarea = document.querySelector(".create_content");
		//console.log(textarea.value);
		const value = textarea.value;
		var xhr = new XMLHttpRequest();
		xhr.open("POST", `${API_Url}/comments`, true);
		xhr.setRequestHeader("content-type", content_type);
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				//console.log('成功')
				document.querySelector(".massage_content").innerHTML =
					""; /*清空舊的留言資料，讓新留言往上移至頂*/
				getComments(); /*新增新的留言*/
			}
		};
		xhr.send(
			JSON.stringify({
				/*物件轉成文字json*/
				nickname: nickname,
				body: value,
			})
		);
		textarea.value = ""; /*傳完內容拿到response後，清空輸入欄 */
	}
});

/*
監聽navbar功能列的logout
清空token和nickname資料
重新整理
*/
document.querySelector(".nav_title_list").addEventListener("click", (e) => {
	console.log(e.target);
	const target = e.target.getAttribute("class");
	if (target === "nav_li_Logout") {
		localStorage.setItem("token", ""); /*清空token資料*/
		nickname = ""; /*清空nickname資料*/
		window.location.reload("/"); /*重新整理*/
	}
});

/*拿token取得使用者資料 */
function getMe(token) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", `${API_Url}/me`, true);
	xhr.setRequestHeader("authorization", `Bearer ${token}`);
	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			console.log(result);
			if (result.ok === 1) {
				isLogin = true;
				nickname = result.data.nickname;
				console.log(nickname);
			} else {
				isLogin = false;
			}
		}
		getComments(1); /*修改顯示留言功能加入身分比對*/
		setNavbar();
	};
	xhr.send();
}
/*整個瀏覽器剛載入的時候，利用localstorage拿出的token取得使用者資料 */
let token = localStorage.getItem("token");
getMe(token);

/* 確認使用者登入/登出狀態，動態產生對應的navbar的功能列*/
function setNavbar() {
	let element_register = document.createElement("li");
	let element_status = document.createElement("li");
	let comments_submit = document.querySelector(".comments_submit");
	element_register.classList.add("nav_li");
	element_status.classList.add("nav_li");
	if (isLogin === false) {
		element_register.innerHTML = `
	  <a href='./register_page.html'>Register</a>
	`;
		element_status.innerHTML = `
	  <a href='./login_page.html'>Login</a>
	`;
		comments_submit.innerHTML = `
	  <form class='home_comments'>
		<textarea class='create_content' rows='7' placeholder='You need to sign up before you leave a message.'></textarea>
	  </form>
	`;
	} else if (isLogin === true) {
		element_register.innerHTML = `
	  <a href='./register_page.html'>Register</a>
	`;
		element_status.innerHTML = `
	  <a href='#'class='nav_li_Logout'>Logout</a>
	`;
		comments_submit.innerHTML = ` 
	  <form class='home_comments'>
		<textarea class='create_content' rows='7' placeholder='Leave a message.'></textarea>
	  </form>
	  <button class='comments_button'>
		<a><div class='comments_submit_btn'>Submit</div></a>
	  </button>
	`;
	}
	document.querySelector(".nav_title_list").appendChild(element_register);
	document.querySelector(".nav_title_list").appendChild(element_status);
}

/*
刪除留言
利用事件代理，取得垃圾桶和ID
串刪除API
*/
document.querySelector(".massage_content").addEventListener("click", (e) => {
	// console.log(e.target.parentNode.getAttribute("class"));
	// console.log(e.target.parentNode.getAttribute("data-value"));
	const delete_id = e.target.parentNode.getAttribute("data-value");
	const delete_button = e.target.parentNode.getAttribute("class");
	if (delete_button === "delete") {
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", `${API_Url}/comments/${delete_id}`, true);
		xhr.setRequestHeader("content-type", content_type);
		xhr.onload = function () {
			console.log(JSON.parse(xhr.response));
			if (xhr.status >= 200 && xhr.status < 400) {
				window.location.reload("/"); /*重新整理*/
			}
		};
		xhr.send();
	}
});

/*分頁功能*/
let now_page = 1;
let total_page = null;
let pagination = document.querySelector(".pagination");

function getTotalComments() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", `${API_Url}/comments`, true);
	xhr.setRequestHeader("content-type", content_type);
	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			console.log(result);
			total_page = Math.ceil(result.length / 10); /*無條件進位*/
			pagination.innerText = `頁碼 : ${now_page} / ${total_page}`;
		}
	};
	xhr.send();
}

getTotalComments();

document.querySelector(".first").addEventListener("click", (e) => {
	if (now_page === 1) return;
	now_page = 1;
	setPage();
});

document.querySelector(".previous").addEventListener("click", (e) => {
	if (now_page === 1) return;
	now_page = now_page - 1;
	setPage();
});

document.querySelector(".next").addEventListener("click", (e) => {
	if (now_page === total_page) return;
	now_page = now_page + 1;
	setPage();
});

document.querySelector(".last").addEventListener("click", (e) => {
	if (now_page === total_page) return;
	now_page = total_page;
	setPage();
});

function setPage() {
	pagination.innerText = `頁碼 : ${now_page} / ${total_page}`;
	document.querySelector(".massage_content").innerHTML = "";
	getComments(now_page);
}

function escape(str) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}
