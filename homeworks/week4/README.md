# 作業

## 備註

請注意！API 每一天會重置一次，在一天當中你做的任何操作都會影響到其他同學。如果你發現有些 id 不見了，那就是被其他同學刪掉了。建議大家要測試刪除功能時，可以先試著新增資料，然後再刪除自己剛剛新增的，才不會影響到其他人，感謝！

## API 文件

Base URL: https://lidemy-book-store.herokuapp.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有書籍 | GET    | /books     | _limit:限制回傳資料數量           | /books?_limit=5 |
| 獲取單一書籍 | GET    | /books/:id | 無                    | /books/10      |
| 新增書籍   | POST   | /books     | name: 書名 | 無              |
| 刪除書籍   | DELETE   | /books/:id     | 無 | 無              |
| 更改書籍資訊   | PATCH   | /books/:id     | name: 書名 | 無              |


## hw1：來自秋秋鞋的任務

有一天，住你隔壁的鄰居秋秋鞋跑來按門鈴，說有事想要找你討論，他最近在做一個知識型的 YouTube 頻道，可是快要沒有靈感了。

這時，他想到一個好主意！他只要能夠看到書店提供的書籍相關資訊，就可以從中汲取靈感，之後就可以發想相關題材，頻道就不會一直不更新了。

身為秋秋鞋的好朋友，這個重責大任當然就交給你了！

請閱讀開頭給的 API 文件並串接，用 node.js 寫出一個程式，執行後會在 console 列出前十本書籍的 id 以及書名。

順帶一提，叫做秋秋鞋是因為他很喜歡秋天。

範例：

``` js
node hw1.js

1 克雷的橋
2 當我想你時，全世界都救不了我
3 我殺的人與殺我的人
....
```

<details>
  <summary>提示 #1</summary>
  
  API 文件通常都不會給出完整網址，因為絕大多數 API 其實都是透過兩個部分所組成：

  1. Base URL
  2. 不同的 path

  例如說你在看「獲取所有書籍」這隻 API 的時候，path 是 `/books`，跟 Base URL 結合起來之後就會變成：`https://lidemy-book-store.herokuapp.com/books`，這就是完整的 API 位置。

</details>

## hw2：最後的考驗

原本以為上次就已經是最後一次幫忙，沒想到秋秋鞋還是又跑來找你了。他說他想要更多功能，他想把這整個書籍資料庫當作自己的來用，必須能夠顯示前 20 本書的資料、刪除、新增以及修改書本，這樣他就可以管理自己的書籍了。

（跟 hw1 不同，之前是 10 本，這次要顯示 20 本）

雖然你很想問他說為什麼不用 Excel 就好，但你問不出口，再加上你最近剛學程式需要練習的機會，於是你就答應了。

請閱讀開頭給的 API 文件並串接，用 node.js 寫出一個程式並接受參數，輸出相對應的結果，範例如下：

``` js
node hw2.js list // 印出前二十本書的 id 與書名
node hw2.js read 1 // 輸出 id 為 1 的書籍
node hw2.js delete 1 // 刪除 id 為 1 的書籍
node hw2.js create "I love coding" // 新增一本名為 I love coding 的書
node hw2.js update 1 "new name" // 更新 id 為 1 的書名為 new name
```

<details>
  <summary>提示 #1</summary>

  你可以用 `process.argv` 這個陣列拿到相對應的參數，不妨先把它印出來觀察看看！
</details>

## hw3：周遊列國

你的好麻吉小立是一個很愛到處旅遊的人，在前一陣子才靠著便宜的 bug 機票以及特價的商務艙玩遍了許多地方。不過小立一直有個困擾，那就是他希望了解更多跟國家有關的知識，因此他來請你幫忙寫一個搜尋國家資訊的小程式。

這個程式很簡單，只要輸入國家的英文名字，就能夠查詢符合的國家的資訊，會輸出以下幾項：

1. 國家名稱
2. 首都
3. 使用的貨幣名稱
4. 電話國碼

請參考以下範例：

``` js
node hw3.js tai

============
國家：Taiwan
首都：Taipei
貨幣：TWD
國碼：886
============
國家：United Kingdom of Great Britain and Northern Ireland
首都：London
貨幣：GBP
國碼：44
============
國家：Lao People's Democratic Republic
首都：Vientiane
貨幣：LAK
國碼：856
```

另外，如果沒有找到任何符合的國家，請輸出：「找不到國家資訊」。

相關的資訊都可以在這個佛心的 API 找到：https://restcountries.eu/#api-endpoints-name

<details>
  <summary>提示 #1</summary>

  觀察 API 的 response 來決定怎麼取得你要的資訊
</details>

<details>
  <summary>提示 #2</summary>

  API 網址：`https://restcountries.eu/rest/v2/name/{name}`
</details>

## hw4：探索新世界

之前幫秋秋鞋做完那個小程式以後，你會寫程式的消息似乎就傳開了，有一位 Twitch 平台實況主果凍跑來聯繫你，想請你幫忙做個東西。

事情是這樣的，他原本是 LOL 的玩家，但因為某些原因帳號被 ban 掉了，為了維持實況的熱度，需要去找其他遊戲來玩，可是他又不知道哪些遊戲比較熱門，會有比較多人觀看。

因此，他寫請你寫一個小程式，能夠去撈取 Twitch 上面受歡迎的遊戲，他就能夠參考這個列表來決定要實況哪個遊戲。

由於你偶爾也會看他的實況，所以你欣然接受了這個挑戰，準備來串串看真實世界的 API。

請參考 [Twitch API v5](https://dev.twitch.tv/docs/v5) 的文件，寫一隻程式去呼叫 Twitch API，並拿到「最受歡迎的遊戲列表（Get Top Games）」，並依序印出目前觀看人數跟遊戲名稱。

在這個作業中，你必須自己看懂 Twitch API 的文件，知道怎麼去申請一個 Application 拿到 ClientID，並且在 API 文件當中找到對的那一個 API（Get Top Games），而且務必記得要在 request header 中帶上 ClientID 跟另一個參數 Accept，值是：`application/vnd.twitchtv.v5+json`。

還有一件事情要提醒大家，Twitch API 有兩個版本，一個是最新版（New Twitch API，代號 Helix），一個是舊版的（Twitch API v5，代號 kraken），我們這次要串接的是舊版的，不要搞錯版本囉。


``` js
node hw4.js

259075 League of Legends
241160 Just Chatting
141901 Counter-Strike: Global Offensive
125571 Fortnite
120949 Dota 2
88466 Grand Theft Auto V
74198 Call of Duty: Modern Warfare
58553 World of Warcraft
56757 Escape From Tarkov
49213 Chess
....
```

<details>
  <summary>提示 #1</summary>

  Using the Twitch API v5 的第一段「Getting a client ID」特別重要，你必須先申請 Twitch 帳號，然後前往 Twitch developer dashboard 註冊一個新的 Application，OAuth redirect URI 我們不會用到，隨便填就好，最後你會拿到一個 ClientID

  如果申請是跟你說要啟用二階段驗證或是 2FA，請到[設定中的安全性與隱私權](https://www.twitch.tv/settings/security)把設定雙重驗證。

  接著就是從 [API 列表](https://dev.twitch.tv/docs/v5/reference/games)中找到對的 API 囉！
</details>

<details>
  <summary>提示 #2</summary>

  API 文件在這：[Get Top Games](https://dev.twitch.tv/docs/v5/reference/games)，細節都在文件裡了

  需要注意的是你必須要把 Client-ID 當成一個 header 傳送給 API，還需要帶一個：Accept 的 header。至於怎麼帶 header，請參考：[request 文件](https://github.com/request/request#custom-http-headers)
</details>

## hw5：簡答題

請將答案寫在 [hw5.md](hw5.md)。

1. 請以自己的話解釋 API 是什麼？
2. 請找出三個課程沒教的 HTTP status code 並簡單介紹
3. 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

## 挑戰題

寫一個 node.js 的程式並串接 Twitch API，接收一個參數是遊戲名稱，輸出那個遊戲底下最受歡迎的前 200 個實況的名稱與 id。

``` js
// 範例
node twitch.js "Apex Legends"
```

## 超級挑戰題

這週的作業我們都是使用 `request` 這個 library 來發送 request，但其實 request 這個套件也是使用 Node.js 原生提供的 library。因此，這週的超級挑戰題就是讓你試試看能否不用 request，只用 Node.js 內建的套件來發出 request，並且改寫 `hw2`，改寫成只用原生的 library。

你會使用到的原生套件應該是這個：[https.request(url[, options][, callback])](https://nodejs.org/api/https.html#https_https_request_url_options_callback)，就祝你順利囉！

