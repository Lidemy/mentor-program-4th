const content_type = "application/json";
let API_Url = "https://student-json-api.lidemy.me";

/*監聽登入sumit，串後端api，儲存token */
document.querySelector(".submit_btn").addEventListener("click", (e) => {
	const username = document
		.querySelector('input[name="username"]')
		.value.trim();
	const password = document
		.querySelector('input[name="password"]')
		.value.trim();
	if (!username || !password) {
		/*偵測帳號或密碼未填、空白，利用.trim()去除字串前後空白 */
		alert("username and password are required");
		return; /*終止發Api */
	}
	console.log(username, password);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", `${API_Url}/login`, true);
	xhr.setRequestHeader("content-type", content_type);
	xhr.onload = function () {
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			//console.log(result);
			let token = result.token;
			//console.log(token);
			localStorage.setItem("token", token); /*把通行證token存在localStorage*/
			window.location.replace("index.html"); /*返回首頁 */
		} else {
			let errorMessage = JSON.parse(xhr.response);
			alert(errorMessage.message); /*警示使用者視窗 */
		}
	};
	xhr.send(
		JSON.stringify({
			/*物件轉成文字json*/
			username: username,
			password: password,
		})
	);
});
