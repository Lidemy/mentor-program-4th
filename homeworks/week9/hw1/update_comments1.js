const content_type = "application/json";
let API_Url = "https://student-json-api.lidemy.me";
let urlParams = new URLSearchParams(
	window.location.search
); /*取得querystring值的宣告寫法 */
let id = urlParams.get("id"); /*抓現在這個網址querystring中id的值 */
let nickname = "";
let body = "";
let createdAt = "";

/*藉由id取得留言並顯示於編輯畫面中 */
function getCommentById() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", `${API_Url}/comments/${id}`, true);
	xhr.setRequestHeader("content-type", content_type);
	xhr.onload = function () {
		let textarea = document.querySelector("textarea");
		let h3 = document.querySelector("h3");
		if (xhr.status >= 200 && xhr.status < 400) {
			var result = JSON.parse(xhr.response); /*json文字轉成物件*/
			//console.log(result);
			console.log(textarea);
			console.log(textarea.value);
			h3.innerText = result.nickname;
			textarea.value = result.body;
			//console.log(result.body);
		}
	};
	xhr.send();
}

getCommentById();

/*修改留言*/
document.querySelector(".edit_submit_btn").addEventListener("click", (e) => {
	const target = e.target.getAttribute("class");
	//console.log(target);
	if (target === "edit_submit_btn") {
		const textarea = document.querySelector("textarea");
		//console.log(textarea.value);
		const value = textarea.value;
		var xhr = new XMLHttpRequest();
		xhr.open("PATCH", `${API_Url}/comments/${id}`, true);
		xhr.setRequestHeader("content-type", content_type);
		xhr.onload = function () {
			if (xhr.status >= 200 && xhr.status < 400) {
				window.location.replace("index.html"); /*返回首頁*/
			}
		};
		xhr.send(
			JSON.stringify({
				/*物件轉成文字json*/
				body: value,
			})
		);
	}
});

/*
動態產生資料
印出你要改的東西
ex:人名、評論內容
再把正確資料賦值上去

監聽
在事件觸發時，先簡單印訊息，確認監聽功能無誤
在把要處理的事件寫進去

發api
想辦法拿到response
印出response看看長甚麼樣子
再分析怎麼取得需要的資料
*/
