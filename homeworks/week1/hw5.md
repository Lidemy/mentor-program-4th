## 請解釋後端與前端的差異。

前端：HTML網頁的內容、CSS網頁的美觀、JAVASCRIPT網頁的功能，就下方第二個問題的案例來說，網路卡送出request前的事都屬於前端。

後端：專注在系統架構上，就下方第二個問題的案例來說，網路卡送出request後的事都屬於後端。

## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 我在瀏覽器打上：JavaScript 並且按下 Enter(送出了一個request)

2. 瀏覽器請作業系統送出request

3. 作業系統請網路卡送出request

4. 電腦會先詢問DNS server 說google的IP位置在哪裡

5. DNS server會回覆一個IP位置

6. 網路卡才會把request送到IP位置上

7. google的server會回傳response給網路卡

8. 網路卡會回傳response給作業系統

9. 作業系統會回傳response給瀏覽器

10. 瀏覽器會回傳response 畫面資料給我

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. date: 可以查看當下的日期

2. top：看當下電腦運行的狀態

3. less: 將檔案內容以分頁顯示在 Terminal 面板，用分頁的模式顯示檔案內容，比起 cat 比較不會擾亂 terminal 介面
