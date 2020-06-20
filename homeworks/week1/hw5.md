# hw5 : 簡答題



1 .請解釋後端與前端的差異
---
- 前端：可以想像成餐廳點餐的服務生，負責外場的點餐/出餐/結帳。前端負責的通常是網頁架構外觀以及網頁互動，也就是前台的部分。
- 後端：可以想像內場的廚師，負責收外場的訂單/備料/製作客人所需要的餐點，後端負責處理網站的資料庫相關技術。


2 . 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
---

- 使用者按下送出。
- 瀏覽器傳送 requests 給 google server。
- 傳送 requests 到 google server 前先 requests 作業系統，作業系統再  requests 給網路卡。最終送出 requests 給google server的是網路卡。
- google server 收到 requests 請資料庫搜尋關鍵字，並回傳給 server。
- server responses 給瀏覽器。
- 瀏覽器解析回傳的資訊並顯示出來。



3 . 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。
---
- passwd : 更改密碼。
- lcd：更改 local host 的工作目錄。
- -f ：強制刪除參數。