## 請解釋後端與前端的差異。
# **前端 VS 後端**
## **前端 (Front-end)**
我們打開google首網，所有看的到的畫面，都算是前端的範疇

## **後端 (Back-end)**
使用者看不到在 Server 上面處理的搜尋功能，資料庫溝通...等。


## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1.`瀏覽器`發送request給`DNS`，google.com 怎麼走？
2.`DNS` 回傳 response，Server IP位置 172 . 217 . 27 . 142 就是了。
3.`瀏覽器`發送request給 `Server` IP 位置 172 . 217 . 27 . 142 。
4.位在IP  172 . 217 . 27 . 142 的 `Server` 接收到 request。
5.`Server` 去詢問`資料庫`，查詢JavaScrit關鍵字。
6.`資料庫`找到了，把資料回傳給 `Srver` IP 位置 172 . 217 . 27 . 142 。
7.`Server` IP 位置 172 . 217 . 27 . 142 回傳 response 給`瀏覽器`。
8.`瀏覽器`解析回傳的 response 並顯示出來。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用