# 作業

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

## hw2：最後的考驗

原本以為上次就已經是最後一次幫忙，沒想到秋秋鞋還是又跑來找你了。他說他想要更多功能，他想把這整個書籍資料庫當作自己的來用，必須能夠顯示前 20 本書的資料、刪除、新增以及修改書本，這樣他就可以管理自己的書籍了。

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

## hw3：我在墾丁天氣晴

你的好麻吉最近打算去墾丁玩，但墾丁畢竟是個玩水的地方，若是下雨了就不好玩了。因此，你的好麻吉幾乎每天都會跑來問你說：「今天墾丁天氣怎麼樣？」，你可能會想說他幹嘛不自己查，這是因為他已經因為查詢次數過多，而被天氣網站給 ban 掉了，所以只能來拜託你。

可是呢，你要每天一直去看天氣網站也很討厭，因此就決定寫一個小程式來串接 API，輸出墾丁現在的天氣以及溫度跟濕度，範例如下：

``` js
node hw3.js

天氣：短暫陣雨
溫度：18
濕度：91
```

雖然說氣象局有提供正式的 API，但因為要申請所以手續比較繁瑣。因此這次要串接的是由[工程師吳政賢 OA Wu](https://www.ioa.tw/?f=works) 所提供的 [Weather API](https://works.ioa.tw/weather/api/doc/index.html#api-Weather_API)。

話說墾丁隸屬於屏東市恆春鎮，所以我們要顯示的其實是恆春鎮的天氣，現在就請你閱讀 API 文件，找到對的 API，顯示出恆春現在的天氣。

<details>
  <summary>提示 #1</summary>
  
  你可以透過 [API 01：取得所有縣市鄉鎮](https://works.ioa.tw/weather/api/all.json)，找到屏東市恆春鎮的 id
</details>

<details>
  <summary>提示 #2</summary>

  透過 [API 05：取得指定鄉鎮天氣](https://works.ioa.tw/weather/api/doc/index.html#api-Weather_API-GetHttpsWorksIoaTwWeatherApiWeathersIdJson)，只要傳入恆春的 id，就可以拿到天氣資料
</details>

## hw4：探索新世界

之前幫秋秋鞋做完那個小程式以後，你會寫程式的消息似乎就傳開了，有一位 Twitch 平台實況主果凍跑來聯繫你，想請你幫忙做個東西。

事情是這樣的，他原本是 LOL 的玩家，但因為某些原因帳號被 ban 掉了，為了維持實況的熱度，需要去找其他遊戲來玩，可是他又不知道哪些遊戲比較熱門，會有比較多人觀看。

因此，他寫請你寫一個小程式，能夠去撈取 Twitch 上面受歡迎的遊戲，他就能夠參考這個列表來決定要實況哪個遊戲。

由於你偶爾也會看他的實況，所以你欣然接受了這個挑戰，準備來串串看真實世界的 API。

請參考 [Twitch API](https://dev.twitch.tv/docs/api/) 的文件，寫一隻程式去呼叫 Twitch API，並拿到「最受歡迎的遊戲列表（Get Top Games）」，並依序印出 id 跟遊戲名稱。

在這個作業中，你必須自己看懂 Twitch API 的文件，知道怎麼去申請一個 Application 拿到 ClientID，並且在 API 文件當中找到對的那一個 API（Get Top Games）。

``` js
node hw4.js

21779 League of Legends
29595 Dota2
511224 Apex Legends
33214 Fortnite
....
```

<details>
  <summary>提示 #1</summary>

  Getting Started with the Twitch API 的第一段「Step 1: Setup」特別重要，你必須先申請 Twitch 帳號，然後前往 Twitch developer dashboard 註冊一個新的 Application，OAuth redirect URI 我們不會用到，隨便填就好，最後你會拿到一個 ClientID

  接著就是從 [API 列表](https://dev.twitch.tv/docs/api/reference)中找到對的 API 囉！
</details>

<details>
  <summary>提示 #2</summary>

  API 文件在這：[Get Top Games](https://dev.twitch.tv/docs/api/reference#get-top-games)，細節都在文件裡了

  需要注意的是你必須要把 Client-ID 當成一個 header 傳送給 API，至於怎麼帶 header，請參考：[request 文件](https://github.com/request/request#custom-http-headers)
</details>

## hw5：簡答題

請將答案寫在 [hw5.md](hw5.md)。

1. 請以自己的話解釋 API 是什麼？
2. 請找出三個課程沒教的 HTTP status code 並簡單介紹
3. 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

## 挑戰題

寫一個 node.js 的程式並串接 Twitch API，輸出遊戲「League of Legends」底下最受歡迎的前 200 個實況的名稱與 id。

## 超級挑戰題

寫一個 node.js 的程式並串接 Twitch API，接收一個參數是遊戲名稱，輸出那個遊戲底下最受歡迎的前 200 個實況的名稱與 id。

``` js
// 範例
node twitch.js "Apex Legends"
```

