# hw5：簡答題

## 請解釋後端與前端的差異。

前端負責顯示畫面，只要是你看得到的東西基本上都是前端，後端則是負責處理那些與資料庫的溝通等等。

所以假設今天官網要新增一個頁面或者是修改背景顏色，這都是看得到的，就會交給前端來處理。但如果是要新增一個會員，那就會需要後端在資料庫裡面幫忙新增。

不過有關新增會員這個動作，其實也可以是前後端交互的結果。

1. 打開註冊頁面（前端）
2. 填寫資料（前端）
3. 送出表單，這個資料就會從前端傳到後端伺服器
4. 後端伺服器把資料存進資料庫，並且回傳 response
5. 前端顯示 response

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

1. 瀏覽器送出關鍵字「JavaScript」到 Google 的 Server
2. Google server 去資料庫查詢關鍵字，並且取得搜尋結果
3. Google server 把搜尋結果回傳
4. 瀏覽器顯示搜尋結果

基本上是這樣子，但要複雜可以更複雜，我覺得以第一週來說，只要能簡單區分前後端即可。

不過我發現有滿多同學有其中一段有點搞混，因此我這邊統一再解釋一遍。

有關於「把網域（domain）轉換成 IP 位置」這件事，我們把它稱之為 DNS 解析（resolve DNS），之前在影片中有提過會去 DNS Server 問，例如說：

1. 我想知道 google.com 的 IP 位置
2. 因此我發一個 request 給 DNS Server
3. DNS Server 回覆：172.217.160.78
4. 我現在知道它在哪裡了

而我上面提到的這個「DNS Server」，它也是一台 Server 嘛，所以它也是有位置的！但是因為他要負責解析 DNS，如果這個主機也是用一個 domain 來表示，那不就變成雞生蛋，蛋生雞的問題嗎？假設這個 DNS server 的位置是：dns.a.com 好了，那我要發 request 去 google.com，就要先去問 dns.a.com，可是我要知道怎麼去 dns.a.com，又要問 dns.a.com，如此就沒完沒了，根本沒辦法去問。

因此，DNS server 都是直接用 IP 位置來表示。

中華電信的 DNS Server IP 位置通常是 `168.95.1.1` 與 `168.95.192.1`，而 Google 也有提供免費的 DNS Server，IP 位置是 `8.8.8.8`，另一個網站 Cloudflare 也有一個，位置是 `1.1.1.1`，都非常好記。

所以之前在課程上的舉例不太對，因為我偷懶在舉例時直接把 Google 的 IP 位置說是 8.8.8.8，這樣容易讓人把「Google 的後端 Server」與「Google 的 DNS Server」搞混。

所以有了這個概念以後，假設我們電腦使用的是 Google 的 DNS，那我們這一題的流程可以修正為：

1. 瀏覽器送出關鍵字「JavaScript」到 Google 的 Server
2. 去 DNS Server（8.8.8.8）問說 google.com 在哪裡
3. DNS Server（8.8.8.8） 回傳 172.217.160.78
4. 瀏覽器發送 request 給 172.217.160.78
5. Google server 收到資料，去資料庫查詢關鍵字，並且取得搜尋結果
6. Google server 把搜尋結果回傳
7. 瀏覽器顯示搜尋結果

關於第五步：「Google server 收到資料，去資料庫查詢關鍵字，並且取得搜尋結果」我也要特別聲明一下，這邊跟「爬蟲」沒什麼關係。爬蟲不是在你搜尋的時候才跑的，而是無時無刻不在跑，每分每秒都有機器人在爬網站，然後把網站的內容分析過後存到資料庫裡面去。而你搜尋的時候只是從這個資料庫去搜尋而已，跟爬蟲是沒什麼關係的。

接著，我上面其實沒有把「主體是誰」講得很清楚，DNS 解析這一段到底是誰在做？是瀏覽器會做嗎？還是瀏覽器不管這個？

首先呢，以 Chrome 來說，基本上很多程式碼都是用 C 語言寫成的，而 C 語言裡面有提供一些函式，例如說：`gethostbyname`、`getaddrinfo`或是`getnameinfo`，就是讓你來拿到 domain 相關的資訊。

所以當我們在瀏覽器輸入 google.com 按下 enter 的時候，瀏覽器會呼叫這些程式碼並且傳入 google.com，然後 C 語言會去呼叫作業系統的東西，送出 request 然後去 DNS Server 查詢資料，再把結果回傳給瀏覽器。

然後有一個同學問了一個很好的問題：

> 可是當我們在 google 打關鍵字搜尋時，我們已經在 google.com 啦，那還需要問 server 在哪裡嗎？

答案是或許需要，也或許不需要。在電腦科學的領域中有一個詞你會很常聽到，英文叫做 Cache（發音像是 Cash 不是 Catch），台灣的翻譯是「快取」，中國那邊的翻譯則是「緩存」，簡單來說就是一個暫存資訊的地方。對於有些可能沒那麼常變動的東西，就會把結果放在這邊，加快存取的速度。

而這個快取在很多地方都會有，不只一個地方。

先以瀏覽器為例，瀏覽器有自己的 DNS Cache。所以假設你要問的網址已經在瀏覽器的 DNS Cache 裡了，那就不會再問一次，瀏覽器就會直接知道說 Request 要發到哪個 IP 位置。Cache 如果有資料我們叫做 Hit，沒有的話叫做 Miss。

而作業系統也有自己的 DNS Cache，如果瀏覽器的快取 miss 了，就會去看作業系統的 Cache，hit 的話就把結果傳回去，一樣不會去問 DNS Server。但如果作業系統的也 miss 了，就會真的發 request 去 DNS Server，問說到底這個網域是對應到哪個 IP 位置。

在我們又理解的更深以後，就可以把流程改成這樣：

1. 瀏覽器送出關鍵字「JavaScript」到 google.com
2. 瀏覽器檢查 dns cache 有沒有 google.com
3. 有的話直接發送 request 給那個位置
4. 沒有的話呼叫 C 語言提供的 function（例如說 gethostbyname）
5. C 語言呼叫作業系統
6. 作業系統檢查 dns cache 有沒有 google.com
7. 有的話直接回傳位置
8. 沒有的話去 DNS Server（8.8.8.8）問說 google.com 在哪裡
9. DNS Server（8.8.8.8）回傳 172.217.160.78
10. 瀏覽器發送 request 給 172.217.160.78
11. Google server 收到資料，去資料庫查詢關鍵字，並且取得搜尋結果
12. Google server 把搜尋結果回傳
13. 瀏覽器顯示搜尋結果

差不多就是這樣，我覺得這題理解到這個程度就行了。

如果想看複雜的版本，可以參考：

1. [从输入 URL 到页面加载完成的过程中都发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)
2. [从输入URL到页面加载的过程？如何由一道题完善自己的前端知识体系！](https://segmentfault.com/a/1190000013662126)
3. [An attempt to answer the age old interview question "What happens when you type google.com into your browser and press enter?"](https://github.com/alex/what-happens-when)
4. [上面這個的簡體中文版](https://github.com/skyline75489/what-happens-when-zh_CN)

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。

沒辦法，我覺得好用的我在課程裡面好像都講到了QQ
