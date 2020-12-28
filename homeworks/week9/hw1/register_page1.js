const content_type = "application/json";
let API_Url = "https://student-json-api.lidemy.me";

/*監聽註冊sumit，串後端api，取得token */
document.querySelector(".submit_btn").addEventListener("click", (e) => {
	const nickname = document
		.querySelector('input[name="nickname"]')
		.value.trim();
	const username = document
		.querySelector('input[name="username"]')
		.value.trim();
	const password = document
		.querySelector('input[name="password"]')
		.value.trim();
	if (!nickname || !username || !password) {
		/*偵測帳號或密碼未填、空白，利用.trim()去除字串前後空白 */
		alert("nickname, username and password are required");
		return; /*終止發Api */
	}
	console.log(nickname, username, password);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", `${API_Url}/register`, true);
	xhr.setRequestHeader("content-type", content_type);
	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			let token = result.token;
			localStorage.setItem("token", token); /*把通行證token存在localStorage*/
			window.location.replace("index.html");
		} else {
			let errorMessage = JSON.parse(xhr.response);
			alert(errorMessage.message);
		}
	};
	xhr.send(
		JSON.stringify({
			/*物件轉成文字json*/
			nickname: nickname,
			username: username,
			password: password,
		})
	);
});
