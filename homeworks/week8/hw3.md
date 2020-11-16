## 什麼是 Ajax？
 全名為 Asynchronous JavaScript and XML
* Asynchronous 這個單字指的是「非同步」
* 任何非同步與 Server 交換資料的 JavaScript 方式都可以叫做 Ajax

同步與非同步的差別：
* 非同步：
  * 使我們可以在送出 Request 後無需等待 Response 回來而可以先去執行其他事項，也就是可以與伺服器進行非同步更新，在不需要重新整理網頁的情況下，可以得到想要的資料（Response）。
* 同步：
  * 發送完 request 與等待 Response 之間的過程，整個 JavaScript 引擎是不會執行任何東西的！你點任何有牽涉到 JavaScript 的東西，都不會有反應，因為 JavaScript 還在等 Response 回來。

## 用 Ajax 與我們用表單送出資料的差別在哪？

表單：送出資料即發一個 Request 到新的頁面去（也就是會換頁），瀏覽器再渲染出 Response。跟 JavaScript 並沒有太大關係，是瀏覽器提供的一種發送 request 的方法

Ajax：則是透過 JavaScript 交換資料。當 Server 回傳 Response，最後是會傳給瀏覽器上的 JavaScript，不會換頁。

## JSONP 是什麼？
全名叫做 JSON with Padding
* JSONP 利用 src 不受同源限制的特性，直接載入一隻帶參數的js，當作是發 request，用一個 function 包裝起來。

* 但 JSONP 要帶的那些參數「永遠都只能用附加在網址上的方式（GET）帶過去，沒辦法用 POST 」。而且使用 JSONP 傳送資料，也要 Server 端有提供 JSONP 的方法（ 意指用 callback function 包起來 ）才行，不然回傳的 Response 就只是字串而已，沒有辦法取得資料

## 要如何存取跨網域的 API？
* 在存取資源時，若同時滿足相同的通訊協定、網域、通訊埠，則為同源；若在非同源的情況下，即會產生跨來源請求，例如存取跨網域的 API 便是其中一例，在此情況下要存取資源時，會因為安全性問題而被瀏覽器拒絕；若要成功執行，則必須得遵守 CORS 的規範。
CORS（Cross-Origin Resource Sharing）提供跨網域呼叫所要遵守的規範，簡單來說 CORS 使得當想要透過 JavaScript 存取跨網域的資源時必須得到 Server 的允許才能進行，取得授權的方法是在 response header 裡加上 `Access-Control-Allow-Origin`，可以直接加上：*，也就是 `Access-Control-Allow-Origin：*`，或是跟 origin 相同的 host，相符的情況下該請求便為成功，我們也可以透過 JavaScript 讀取 response。

值得注意的一點是：「 Request 還是有發出去，而且瀏覽器也確實有收到 Response 」，重點是因為 瀏覽器 才會有同源政策，主要是因為安全性的考量，不讓你的 JavaScript 拿到並且傳回錯誤。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

* 第四週是用 node.js 發 Request 到 Server，沒有瀏覽器的限制，可以任意發 Request 並取得 Response。
本週的各種應用則是有經過**透過瀏覽器**來進行，而瀏覽器基於安全性考量，設有各種限制（如同源政策），使得使用者要存取資料並非易事，無法隨意讀取各種檔案，而是必須在符合瀏覽器規範情況下，才可成功進行。