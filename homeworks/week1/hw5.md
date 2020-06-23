## 請解釋後端與前端的差異。
前端屬於網頁上看得到的部分，網頁動態呈現、欄位格式、網頁外觀...等等。
後端屬於網頁上看不到的部分，像是資料傳輸、抓資料、回傳資料等等。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1.  瀏覽器會先去問DNS伺服器
2.  DNS(Domain Name System) server會給瀏覽器一個IP位址
3.  瀏覽器會送請求到那一個IP位址
4.  IP位址的server收到這個請求
5.  server會去問資料庫查詢關鍵字
6.  資料庫找到後，將資料後回傳給server
7.  IP位址的server回傳response給瀏覽器
8.  瀏覽器解析回傳的資訊後顯示出來


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
	1.  exit：關閉終端機
    2.  find：在目前目錄下尋找檔名為 README.md 檔案
例如`find . -name README.md`
    3.  passwd：更改電腦的密碼