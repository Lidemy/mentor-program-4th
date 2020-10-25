# Week12 作業自我檢討

SPA 的部分請參考：

1. [前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)
2. [跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

## SPA 補充

這邊稍微講一下，有些人會以為 SPA 的網址沒辦法變，這是錯誤的。SPA 的網址還是可以變，但是跟之前後端為主的方式是不同的。

後端是這樣的：

1. 你現在在網址 A
2. 點了某個按鈕，跳到網址 B，瀏覽器發一個 request 到 server
3. 瀏覽器接收到 response，render B 頁面資料

而 SPA 是這樣的：

1. 你現在在網址 A
2. 點了某個按鈕，跳到網址 B，這時候我們其實只是用 JS 來改變網址列，所以並不會發一個 request 到 server
3. SPA 自己處理網址變動，render 頁面 B 的資料

JS 會利用一個叫做 history API 的東西來做，詳情大家可以自己去尋找相關資料，想快速試試看的可以隨便開一個頁面，然後打開 console 輸入 `history.pushState(null, null, '/hello')`，就能夠看到什麼叫做用 JS 來改變網址了。

## Todos 範例說明

1. [只有 UI 切好的版本](hw2/todo-ui-only.html)
2. [有完整功能的第一版](hw2/todo-v1.html)
3. [可以從 UI 擷取出資料的第二版](hw2/todo-extract-data.html)
4. [串接完 API 的完整版](hw2/todo-done.html)
5. [不一樣的想法的版本](hw2/index.html)
