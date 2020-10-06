# 程式導師實驗計畫第四期

備註：二十週以後的課程尚未完成，作業也還沒決定

## 這是什麼

[程式導師實驗計畫第四期](https://bootcamp.lidemy.com)是一個為期六個月的計畫，要求學生付出一定的時間（每週至少付出三十小時），希望能在結業時培養出合格的（意思就是找得到工作）的工程師，並且在就職後依舊能持續成長，成為好的工程師。

## 課程目標

### 核心能力
1. 具有找資料的能力，能夠知道如何找到相關資訊
2. 具有分析問題的能力，能夠快速定位問題
3. 知道如何解決問題，包括但不限於拆解問題、簡化問題、轉化問題
4. 解決問題後能夠重新歸納並整理

### 工具能力

1. 後端：知道後端原理，知道什麼是資料庫、Server，可以寫出簡單的網站並且自己部署
2. 前端：知道前端原理，HTML、CSS、JavaScript，知道 Ajax 以及如何與後端串接
3. 資安：基本資安概念，SQL Injection、XSS、CSRF

## 課程規則

### 1. 每日進度報告

為了更方便追蹤大家的進度，必須在禮拜一到五每一天簡短報告自己今天學了什麼和碰到什麼問題（已解決或未解決），除了作為淘汰制的參考以外，其實也是幫自己簡單複習一下所學過的東西。

進度報告你可以選擇早上 po 或是晚上 po，早上的話就是講昨天的事，晚上的話就是講今天的。

### 2. 每日心得（鼓勵但非強迫）

之前我有寫過一篇文章叫做[《每一篇心得都有價值——為什麼初學者才更應該要寫心得筆記》](https://medium.com/hulis-blog/why-blogging-ab77fd8c6ffa)，裡面跟大家稍微講了一下寫心得的好處，在這課程中我也希望能把這個習慣帶給大家。

每天寫心得真的不是件容易的事，連我自己都做不太到，因此這一項是「鼓勵非強迫」，你沒有做到也沒關係，但我希望至少能夠每個禮拜寫個兩三篇，重點其實是在連續，這樣才有完整的紀錄可以看。

心得內容其實要寫什麼都行，沒有強迫，你簡單寫三個字：「我好累」或是「收穫多」也都可以，當日記在寫就好，我之前就先示範了[每日筆記](https://github.com/aszx87410/daily-notes/issues)，記錄一些教學上的思考。

若是你不知道心得該如何下手，這邊推薦一個不錯的模板叫做 ORID 筆記，每天根據這四項來寫：

#### Objective 客觀

關於今天的課程，你記得什麼？  
完成了什麼？  

#### Reflective 感受

你要如何形容今天的情緒  
今天的高峰是什麼?  
今天的低點是什麼?  

#### Interpretive 解釋反思

我們今天學到了什麼？  
今天一個重要的領悟是什麼？  

#### Decisional 決定行動

我們會如何用一句話形容今天的工作？  
有哪些工作需要明天繼續努力?  

有了基本架構之後會容易很多，你只要根據提供的問題模板去思考就行了。

細節可參考：[初探 ORID 焦點討論法](https://blog.niclin.tw/2016/08/09/%E5%88%9D%E6%8E%A2-orid-%E7%84%A6%E9%BB%9E%E8%A8%8E%E8%AB%96%E6%B3%95/)、[如何使用ORID总结学习，加快进步？](https://www.jianshu.com/p/56e5bf8ae9ee)

### 3. 交作業前先檢查

身為工程師，在交付產品以前自己有義務先做一些基本的測試，至少不要出現一打開就掛掉或者是 UI 差超級多這種狀況。交作業也是一樣的，如果你的作業連範例附的簡單 測試都跑不過，或者是基本功能都沒完成，那我也不知道我要改什麼。

所以，在交作業前請先自己檢查一下，如果品質太差的我會直接退件。

### 4. 簡答題規範

注意，簡答題不像你以前學生時期做報告那樣可以直接複製貼上，這是最沒有用的答題方法。我希望的是你找資料閱讀，吸收並理解以後再用自己的文字寫出來，這樣的理解程度會高很多，而不是複製貼上就了事。若是只會複製貼上，我保證一個月後我再問你同樣的問題，你也答不出來。

如果真的寫不出來，可以試著看著相關資料自己照著重打，這樣也會加深記憶。

有任何查到的相關資料都可以一併附上，第一是給別人一個 credit，可以讓作者知道他的文章對你有幫助，第二也是給自己留一個筆記，之後忘記可以再回來這邊找。

### 5. 程式碼規範

專案有導入 [eslint](https://eslint.org)，每一次 commit 都會自動檢查 JavaScript 的程式碼，有違反規則的話需要修正以後才能 commit。從第三週開始就強迫大家養成良好的程式碼撰寫習慣。

（備註：第三週才會講到這個東西）

### 其他

1. 在課程教 jQuery 以前基本上禁止使用 jQuery（除非你原生的 DOM API 真的很熟了）

## 課程進行方式

課程以線上影片為主，全部課程內容皆為預錄好的線上影片（無字幕）。

每一週都會有指定教材以及導讀影片，若有需要的話可以自行尋找其他資源學習。

還有一點請特別注意，沒教的內容也可能出現在作業裡，不要被當期的內容給迷惑了，以為一定要用當週教的東西來解題。

## 課程大綱

從 2020/06/12 至 2020/12/12	，為期六個月的課程，一共約二十六週。每週的開始為禮拜一，結束為禮拜日。

### 第零週：心態培養

在學習之前若是能先把心態培養好，之後學習起來會容易得多。

底下有幾篇文章，幾乎都跟學習有關，可以參考看看：

1. [打造「正確」學習 mindset](https://medium.com/@hulitw/mindset-36c163303217)
2. [學程式的第零課：心態調整](https://medium.com/hulis-blog/before-learning-b9b933b6078e)
3. [用對你有效的學習方法，無論那是什麼](https://medium.com/@hulitw/learning-c6656ef14cd4)
4. [沒有目標也沒有關係](https://medium.com/@hulitw/its-okay-if-you-dont-have-goal-35363a8d8266)
5. [致跟我一樣的拖延症患者：動力是需要刻意創造的](https://medium.com/hulis-blog/procrastination-ba12754ada49)
6. [當我們在學程式時，要學的到底是什麼？](https://medium.com/@hulitw/learn-coding-9c572c2fb2)
7. [程式相關問題一網打盡：談自學、轉職、出國、職涯、教學、補習、騙錢、產業以及努力](https://medium.com/hulis-blog/qa-be72946f0b23)
8. [每一篇心得都有價值——為什麼初學者才更應該要寫心得筆記](https://medium.com/hulis-blog/why-blogging-ab77fd8c6ffa)
9. [我為什麼寫部落格，以及部落格帶給我的影響](https://medium.com/@hulitw/blog-e7a23a74ae2b)

Mindset 建立：

1. 不要害怕問問題，每個問題都值得被提出來，你的問題可能也是其他人的問題
2. 問問題前應該要自己查詢資料（有些很難查的直接問也可以）
3. 你有老師讓你盡量問，反正問就對了，有錯的話我會提醒你
4. 重點是「目的」，而不是「手段」，持續問為什麼為什麼為什麼為什麼
5. 學程式需要換一個思維模式

### 第一週（06/12 ~ 06/21）：暖身週

大致介紹整個計畫以及帶學生看過一次課程大綱，接著說明整體架構，介紹各種不同工程師職位所負責的工作內容並著重在網頁工程師的介紹，並說明課程進行方式。

建置基礎環境，例如說 Command Line Tool 與 Git，以及學會如何交作業。

#### 指定教材

先看 [CMD101] Command Line 超新手入門的全部課程來熟悉 command line 的使用。熟悉以後觀看 [GIT101] Git 超新手入門 的全部課程，學習如何使用 Git。

如果 CMD101 看不太懂，也可以看 [CS101] 初心者的計概與 coding 火球術的 2-1 ~ 2-4，一樣是與 command line 相關的課程。

接著可以看 [CS101] 初心者的計概與 coding 火球術的 1-1 跟 1-2 還有單元 11，理解程式基礎概念。

最後觀看 CS101 的 4-1 與 4-2，學習網路相關基礎概念。

然後記得看交作業的示範，這週就差不多了。

[HW1 作業連結](/homeworks/week1)

#### 自我檢測

- [ ] P1 你說得出程式如何執行
- [ ] P1 你理解寫程式的本質只是一行行的指令
- [ ] P1 你了解前端與後端的區別
- [ ] P1 你能說出從發出一個 request 到接收 response 中間發生的事
- [ ] P1 你了解不同載具的差異在哪（Desktop、Mobile、Web）
- [ ] P1 你了解基本的 command line 指令
- [ ] P1 你知道 Git 在做什麼，以及為何我們需要 Git
- [ ] P1 你知道 add、commit、push、pull 等基本 Git 指令
- [ ] P1 你知道怎麼使用 branch 並送出 Pull Request
- [ ] P2 你熟悉 Git Workflow（其實就是交作業的流程）

### 第二週（06/22 ~ 06/28）：程式基礎（上）

前四週其實是這個計畫最重要的一個月，希望能在這四週讓學生把基礎打得相對紮實，這樣比較好應付之後的課程。

這一週的學習目標是程式基礎，包括但不限於：變數、陣列、迴圈、判斷式以及函式（以 ES5 為例）。

必須要強迫自己轉換成寫程式的思考模式，否則這一週對你來說會是惡夢。對於從來沒有接觸過類似思考模式的人可能會需要點時間，但只要慢慢練習，就會越來越進入狀況。

還有一點請大家注意，程式是按照你寫的跑，不是按照你想的跑。當程式執行結果超出預期時，`console.log`是你的好朋友，可以把東西印出來看看是不是跟你想的一樣。

#### 指定教材

[JS101] 用 JavaScript 一步步打造程式基礎這堂課是讓大家學習 JS 基礎語法以及練習基本題目用的，可以看到「綜合練習 Lv1」就好，裡面的題目記得寫一下。

[ALG101] 先別急著寫 leetcode 這堂課則是為了繼續加強程式基礎以及練習程式思維，把上面 JS101 指定章節看完以後可以看 ALG101，看到 Unit4 就行了。

然後可以看這篇：[從博物館寄物櫃理解變數儲存模型](https://medium.com/@hulitw/variable-and-frontdesk-a53a0440af3c)

若是想要繼續研究演算法相關的議題，可以看 [CS101] 初心者的計概與 coding 火球術的 7-1 ~ 7-4，但如果前面的影片看完時間就差不多了，可以留到以後再看。

[HW2 作業連結](/homeworks/week2)

#### 自我檢測：

- [ ] P1 你能靈活運用變數、迴圈、判斷式等等基本概念來解題
- [ ] P1 你能一行行的說出現在程式在做什麼
- [ ] P1 你知道「回傳」跟「輸出」的差異
- [ ] P1 你可以把用文字寫好的演算法轉成程式碼

### 第三週（06/29 ~ 07/05）：程式基礎（下）

在程式基礎的部分一週是絕對不夠的，因此本週會繼續加強程式基礎。在這一週裡面我們會延伸上一週的內容，並且多講一些有關於 ES6 的語法。

本週的作業有自動批改系統，請傳到 [Lidemy OJ](https://oj.lidemy.com/) 上，並且確認每一題都有答對之後再交作業，否則我會直接退件，

最後，在這週也會講到 eslint，我已經幫大家設置好了 eslint，這是一個能夠幫你自動做語法檢查的工具，在每次 commit 之前都會自動檢查程式碼的規範，不符合規範的話不會讓你 commit。

#### 指定教材

這週可以先繼續看 [ALG101] 先別急著寫 leetcode，一直看到「單元六：內建函式做做看」，並且跟著裡面一起練習。

接著來看 [JS102] 升級你的 JavaScript 技能：ES6 + npm + Jest 這堂課，主要目的是熟悉 npm 以及 ES6 的語法，因為以後會很常用到這兩個東西。至於 Jest 的部分跟測試有關，這方面之後會再提到，現在只要稍微知道就好，還不需要深入研究。

最後呢，若是還有時間，可以繼續把 ALG101 以及 [JS101] 用 JavaScript 一步步打造程式基礎也看完，但之前剩下的綜合練習 Lv2 以及 Lv3 其實大部分題目都與 ALG101 雷同，寫過的就可以直接跳過了，但還是建議可以看一下參考解答影片。

[HW3 作業連結](/homeworks/week3)

#### 自我檢測

- [ ] P1 你理解常用內建函式如何使用
- [ ] P1 你熟悉程式語法並知道如何解決基礎問題
- [ ] P2 你知道為什麼我們需要 unit test
- [ ] P2 你知道什麼是 unit test
- [ ] P2 你知道如何寫 unit test
- [ ] P2 你知道如何測試一個 function

### 第四週（07/06 ~ 07/12）：網路基礎

無論是前端還是後端，身為一個網頁工程師，必須很清楚整個網路運作的輪廓。細節可以日後再研究，但一定要能掌握大方向以及重要概念，否則未來的路絕對會走得很崎嶇。

在這週裡面我們會學到兩台電腦在網路上該怎麼溝通，從上層往下，再從底層往上，一步步建立起你對網路的世界觀。

當然，只有理解是不夠的，我們也會用 Node.js 串接基本的 API，帶你熟練與網路相關的知識。

#### 指定教材

這週可以直接看 [NET101] 網路基礎概論（搭配 JS 實作練習）的全部課程，去熟悉網路相關的概念，並且學習如何利用 Node.js 去串接 API。

再來可以看這篇文章，重新省視一次自己對 API 的理解：[從拉麵店的販賣機理解什麼是 API](https://medium.com/@hulitw/ramen-and-api-6238437dc544)，然後看這篇文字版的傳紙條故事複習一下網路概念：[從傳紙條輕鬆學習基本網路概念](https://medium.com/@hulitw/learning-tcp-ip-http-via-sending-letter-5d3299203660)

如果對於這些概念還是不熟，可以先去寫一下作業，然後看 Lidemy 上第四週課程的：「Request 額外補充（超重要）」，應該能幫你解開一些疑惑。

額外補充一個影片，英文 ok 的話可以看：[CS75 (Summer 2012) Lecture 0 HTTP Harvard Web Development David Malan](https://www.youtube.com/watch?v=8KuO4r5CHjM)，內容與 NET101 類似，只是讓大家再做個複習

[HW4 作業連結](/homeworks/week4)

#### 自我檢測

- [ ] P1 你知道網路背後大概的運作模式
- [ ] P1 你知道什麼是 Request 跟 Response
- [ ] P1 你知道什麼是 DNS 以及運作原理
- [ ] P1 你知道 HTTP 與 HTTPS 的差異
- [ ] P1 你知道 localhost 跟 127.0.0.1 是什麼
- [ ] P1 你知道 GET 與 POST 的差別
- [ ] P1 你知道常用的 HTTP Header
- [ ] P1 你知道什麼是 API
- [ ] P1 你會使用 node.js 寫出串接 API 的程式
- [ ] P1 你知道 HTTP method 有哪些
- [ ] P1 你知道基本的 HTTP status code，像是 200、301、400、404、500

### 第五週（07/13 ~ 07/19）：複習週

經過前面四週的各種摧殘，終於迎來了第一次的複習週！

複習週顧名思義，就讓大家複習前面這四週的進度用的，這四週我們一共學了四項主要的技能：

1. Command line 的使用
2. Git 的基本操作
3. JavaScript 基本語法及程式思維
4. 網路基本概念

如果你之前因為趕時間而亂寫作業，現在是回去重新省視一遍的好時機；或者是之前有查到什麼有趣的延伸資料但沒時間看的，這一週你就有時間看了。

在複習週是沒有任何進度的，但是會有兩個小挑戰，讓你們檢驗前面學到的技能。

#### HTTP Game

為了檢驗你對於 API 串接是否理解，我特地做了一個很有趣的小遊戲：[Lidemy HTTP Challenge](https://lidemy-http-challenge.herokuapp.com/start)。

建議使用之前教過的 node.js 搭配 [request](https://github.com/request/request) 這個 library 來解題，才能比較有效確認自己是否前面都有學進去。

我有藏了一些很無聊的梗在裡面，解題的時候可以順便找找。如果卡關的話可以看提示，解完以後可以寫個心得。如果真的卡某一關卡很久，直接搜尋「Lidemy HTTP Challenge」可以找到相關資料。

#### NPSC 題目練習

NPSC 中文全名為[網際網路程式設計全國大賽](https://contest.cc.ntu.edu.tw/npsc2018/)，是台大每年都會辦給國中生跟高中生參加的比賽。

裡面很多題目都很有趣，適合拿來給程式初學者練習，之前在 ALG101 的第七單元其實就有提到過，還沒看完的可以順便看一下。因為 NPSC 的題目沒有辦法對外授權，所以我自己出了一堆類似的題目，大家可以上 [LIOJ](https://oj.lidemy.com/) 把其他沒有寫過的題目寫一寫，訓練一下程式基礎。

[HW5 作業連結](/homeworks/week5)

### 第六週（07/20 ~ 07/26）：前端基礎 HTML 與 CSS

本週將會正式進入到前端課程，開始用 HTML 與 CSS 打造出基本的網頁，並且利用 media query 實現簡單的 RWD（Responsive Web Design）。

HTML 的部分會簡單介紹幾個常見的 tag，以及 head 的一些屬性跟設定，也會講到跟 SEO 有關的一些部分（title, description, JSON-LD...）。

主要會著重在 CSS，並且讓大家多多練習。

也可以先看一下這兩篇文章（很多地方你會看不懂，但沒關係）先培養一下對前端的感覺，等幾週過後當我們學得越來越多，再看一次會有完全不同的感受：[零基礎的小明要如何成為前端工程師？](https://medium.com/hulis-blog/frontend-engineer-guide-297821512f4e)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

#### 指定教材

先看 [FE101] 前端基礎：HTML 與 CSS 這堂課熟悉 HTML 與 CSS，並且練習切版。接著可以看 [Chrome 網頁除錯功能大解密](https://www.udemy.com/chrome-devtools/)來熟悉 Chrome devtool 的使用方式。

如果覺得課程太理論，想要看比較偏實戰的，可以看 Lidemy 上第四期的「第六週特別補充課程：position 與 display 實戰篇 by minw 助教」相關單元，會有各種切版實戰。

若是還有時間，可以透過這兩個小遊戲來熟悉 CSS Selector 跟 Flexbox 排版的方法：

1. [CSS Diner](https://flukeout.github.io/)
2. [Flexbox Froggy](http://flexboxfroggy.com/)

如果你覺得切版講得很爛，可以參考看看這個：[金魚都能懂的網頁設計入門 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2072)

[HW6 作業連結](/homeworks/week6)

#### 自我檢測

- [ ] P1 你知道 HTML 是在做什麼的
- [ ] P1 你知道如何使用有語意的（semantic）標籤
- [ ] P1 你知道基本 SEO 的概念
- [ ] P1 你知道 CSS 是什麼
- [ ] P1 你知道 inline、block 跟 inline-block 的區別
- [ ] P1 你知道什麼是 box model
- [ ] P1 你知道 position 的所有屬性及其差別
- [ ] P2 你知道 :hover, :before, :after
- [ ] P2 你知道 :nth-child 的各種用法
- [ ] P2 你熟悉 CSS selector，可以輕鬆選到想選到的元素

### 第七週（07/27 ~ 08/02）：前端基礎 JavaScript

這一週將會進入到 JavaScript，讓網頁變得有互動性，並結合 `<form>` 做表單驗證，以及讓大家寫出簡單的網頁應用程式。

這會是我們第一次把 JavaScript 應用在網頁上，來學習怎麼使用 JavaScript 操控 DOM 物件，讓網頁動起來。

#### 指定教材

這一週需要的東西幾乎都在 [FE102] 前端必備：JavaScript 這堂課裡面，看到「中場總結」就好了，後面的可以先不用看。

針對 DOM 的事件傳遞，可以參考這一篇：[DOM 的事件傳遞機制：捕獲與冒泡](https://blog.techbridge.cc/2017/07/15/javascript-event-propagation/)

另外附增一個好用的網站：https://htmldom.dev/

[HW7 作業連結](/homeworks/week7)

#### 自我檢測

- [ ] P1 你知道 JavaScript 跑在網頁上跟跑在 Node.js 上差在哪裡
- [ ] P1 你知道 DOM 是什麼
- [ ] P1 你知道如何用 JavaScript 操控 DOM 物件
- [ ] P1 你知道如何幫一個按鈕加上 event listener
- [ ] P1 你知道捕獲與冒泡是什麼
- [ ] P1 你知道什麼是事件代理（delegation）
- [ ] P2 你知道怎麼用 JavaScript 更改元素的 style
- [ ] P2 你知道 preventDefault 與 stopPropagation 的差異 

### 第八週（08/03 ~ 08/09）：前端基礎串 API

之前在第四週時有提過 API，也有讓大家試著用 node.js 寫些小程式來串接。

而前端當然也能串接 API，理解前後端如何串接是很重要的一部分，因此這週會花滿多心力再來講 API 串接，讓大家複習一下 API 的概念，並且教大家什麼是 Ajax。

#### 指定教材

把 [FE102] 前端必備：JavaScript 中場總結之後的課程看完。也可以看這一篇增進自己對 Ajax 的理解：[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)

[HW8 作業連結](/homeworks/week8)

#### 自我檢測

- [ ] P1 你知道什麼是 API
- [ ] P1 你知道什麼是 Ajax
- [ ] P1 你知道從網頁前端呼叫 API 與在自己電腦上寫程式呼叫的差異
- [ ] P1 你知道什麼是同源政策（Same-origin policy）
- [ ] P1 你知道如何存取跨網域的資源（CORS）
- [ ] P1 你知道什麼是 JSON
- [ ] P2 你知道什麼是 JSONP 及其原理

### 第九週（08/10 ~ 08/16）：後端基礎 PHP 與 MySQL

前端基礎打得差不多以後，就要進入後端的課程，這次課程會以 PHP 為主要的程式語言。

這週的課程會講解 PHP 基本觀念、語法，並且教大家安裝設定 MySQL，寫出簡單的 CRUD 應用。

#### 指定教材

觀看 [BE101] 用 PHP 與 MySQL 學習後端基礎並跟著動手做，看到「真正的實戰：留言板 - 修正問題篇」裡面的「PHP 內建 session 機制」就好，同時跟著裡面的教學把留言板實作出來。

（「基礎實戰：Job board 職缺報報」跟「基礎實戰：Blog 部落格」屬於比較早期拍的影片，程式碼的風格跟其他的可能會不一樣，建議你可以先跳過這兩個段落，實戰的部分直接看「真正的實戰：留言板 - 初階實作篇」，如果覺得看不太懂，再回來看這兩個早期拍的）

並且透過以下幾篇文章加深對 Cookie 與 Session 的理解（第一篇要看懂，二三篇大概看過就好，看不懂很正常，沒有關係）：

1. [白話 Session 與 Cookie：從經營雜貨店開始](https://medium.com/@hulitw/session-and-cookie-15e47ed838bc)
2. [淺談 Session 與 Cookie：一起來讀 RFC](https://blog.huli.tw/2019/08/09/session-and-cookie-part2/)
3. [深入 Session 與 Cookie：Express、PHP 與 Rails 的實作](https://blog.huli.tw/2019/08/09/session-and-cookie-part3/)  


[HW9 作業連結](/homeworks/week9)

#### 自我檢測

- [ ] P1 你知道 PHP 是什麼
- [ ] P1 你知道前端與後端的差別
- [ ] P1 你知道什麼是資料庫
- [ ] P1 你了解基本的 SQL 語法，包括 Select、Insert Into、Delete 與 Update
- [ ] P1 你能夠寫出基本的 CRUD 應用
- [ ] P1 你知道什麼是 Session
- [ ] P1 你知道什麼是 Cookie
- [ ] P1 你知道 Session 與 Cookie 的差別

### 第十週（08/17 ~ 08/23）：複習週

這是第二次的複習週，在前四週我們一共學了：

1. HTML 與 CSS
2. DOM 以及 JavaScript 如何與網頁互動
3. 前端利用 Ajax 與後端串接
4. PHP 與 MySQL

這一週可以讓你有時間好好複習之前的內容，若是覺得都 ok 了，也可以試試看之前的進階挑戰題、挑戰題以及超級挑戰。

這次跟第五週一樣，怕大家太無聊，於是準備了兩個有趣的小遊戲給大家玩。

### 綜合能力測驗

這邊有一份參考某間公司面試考題的[綜合能力測驗](http://mentor-program.co/huli/game/index.php)，還滿有趣的，主要是測前幾週的整合能力。

如果你點進去看到一片白畫面，這是正常的，並不是網頁壞掉。難道網頁看不見東西就是真的沒東西嗎？

看到 `{s: "恭喜破關！flag: m3nT0rPr0GRAm666", error: false}` 就代表你已經全過囉，沒錯，關卡就是這麼少。

### 闖關遊戲

一共十關，看你能闖到第幾關：[r3:0 異世界網站挑戰](https://r30challenge.herokuapp.com/)（特別感謝第三期 @minw 製作遊戲）。

[HW10 作業連結](/homeworks/week10)

### 第十一週（08/24 ~ 08/30）：資訊安全

這一週我們要強調一個很重要的觀念：資訊安全。

無論你是前端還是後端，都必須時時刻刻在心裡惦記著資訊安全的概念，總結為一句話就是：「不要相信任何來自 client 端的資料」，只要能做到這點，其實就可以阻止掉很多的惡意攻擊。

因此這一週會繼續以留言板當作主軸，介紹非常非常重要的資訊安全相關概念。一段寫不好的程式碼，有可能就跟大門破了一個洞一樣，很輕易地就可以讓攻擊者入侵，不費吹灰之力。資訊安全真的要好好學，至少要知道原理以及防禦方法。

####  指定教材

繼續看 [BE101] 用 PHP 與 MySQL 學習後端基礎的其他部分，看到「真正的實戰：留言板 - 再次修正問題篇」結束就好，有時間的話也可以把整堂課都看完。

也可以看 [CS101] 初心者的計概與 coding 火球術：4-3、5-4 複習一下資訊安全相關的觀念。

想知道更多資安相關的概念，可以參考：[程式導師實驗計畫第二期：Week6-2：資訊安全](https://www.youtube.com/watch?v=HGjjxKsCgr0) （有時間再看）

有一個與資安相關的東西叫做 CSRF，在課程中沒有講，是考驗你自學能力的時候，推薦閱讀這篇：[讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

[HW11 作業連結](/homeworks/week11)

#### 自我檢測

- [ ] P1 你知道什麼是雜湊（Hash function）
- [ ] P1 你知道什麼是加密（Encryption）
- [ ] P1 你知道雜湊與加密的差別
- [ ] P1 你知道什麼是 SQL Injection 以及如何防範
- [ ] P1 你知道什麼是 XSS 以及如何防範
- [ ] P1 你知道為什麼儘管前端做了驗證，後端還是要再做一次驗證
- [ ] P2 你知道什麼是 CSRF 以及如何防範

### 第十二週（08/31 ~ 09/06）：前後端整合

前幾週我們學會怎麼用後端 PHP 開發出一個網站，而在更早的第八週，我們學會了用 JavaScript 來串接 API，前端負責顯示資料，後端只負責提供資料。

這一週要整合之前學到的東西，也就是說要自己開發出 API，然後讓自己寫的前端可以串接！因此，這週的內容可能會有點複雜，但我會先示範給你看，讓你理解到底這週的模式跟以往有何不同。

這是非常重要的一週，但是只要能確實理解差異在哪裡，你就能把前後端的關係跟概念弄得很清楚。

除此之外，也會教兩個新的前端工具：jQuery 與 Bootstrap，前者可以讓我們快速又方便地去操作 DOM，後者可以讓我們快速打造出乾淨漂亮的頁面。

#### 指定教材

請先參考 [BE101] 裡面「真正的實戰：留言板 - API 篇」的內容，先大概知道一下怎麼用 PHP 做出 API。

再來可以看 [FE201] 前端中階：那些前端會用到的工具們，學習 jQuery 與 Bootstrap 的使用（其他的工具先不用看）。

最後再看這一週的補充教學影片（在 MTR04 裡面），跟著完成作業一的基本功能，並且按照作業一的指示自己加強功能。

[HW12 作業連結](/homeworks/week12)

#### 自我檢測

- [ ] P1 你知道什麼是 SPA
- [ ] P1 你知道怎麼樣用 PHP 自己寫出 API
- [ ] P1 你知道如何在前端與自己開的 API 串接
- [ ] P1 你知道在 server 與在 client render 的差別
- [ ] P1 你知道 jQuery 是做什麼的
- [ ] P1 你知道 jQuery 與 vanilla js 的差別
- [ ] P1 你知道什麼是 Bootstrap
- [ ] P2 你知道 Bootstrap 原理及如何應用

### 第十三週（09/07 ~ 09/13）：現代前端工具

這週基本上是延續上週的課程，介紹簡單好用的現代前端工具，包括：

1. CSS 預處理器
2. Babel
3. Gulp
4. Webpack

主要是想讓大家稍微知道這些工具的使用而已，在之後的課程裡面不一定會實際用到。

除了這個以外，也會幫大家額外補充一些重要的概念，像是：

1. 什麼是 Promise？
2. 什麼是 Fetch？

在 CSS 的部分呢，也會補充兩個小主題（影片製作中）：

1. CSS Selector 權重的計算方式
2. CSS Sprites 與 Data URI

總而言之呢，這週的東西可能會比較雜一點，但主要可以分成兩個部分：

1. 前端工具
2. JS 與 CSS 補充概念

#### 指定教材

可以看 [FE201] 前端中階：那些前端會用到的工具們來學習這週的工具，這週會把上週沒學到的 CSS 預處理器、Babel、gulp 跟 webpack 都學完。

再次強調，對於這些工具，只要稍微知道怎麼使用即可，想深入研究的話再深入研究就好，我只想讓大家知道這些工具出現的意義還有要解決的問題而已。

關於 webpack，看完課程或是看課程之前都可以參考這篇文章：[webpack 新手教學之淺談模組化與 snowpack](https://blog.huli.tw/2020/01/21/webpack-newbie-tutorial/)。

課程中提到 loader 時有提到 Regular Expression，可以參考：[簡易 Regular Expression 入門指南](https://blog.huli.tw/2020/05/16/introduction-to-regular-expression/)。

其他的補充如下：

1. [Fetch 與 Promise 補充系列（一）：初探 Fetch](https://youtu.be/_8cLWMAQe3A)
2. [Fetch 與 Promise 補充系列（二）：fetch 的 POST 與錯誤處理](https://youtu.be/Ovv9tPhiW_0)
3. [Fetch 與 Promise 補充系列（三）：fetch 的使用注意事項](https://youtu.be/5A9ogWY7J7w)
4. [Fetch 與 Promise 補充系列（四）：淺談 Promise](https://youtu.be/w-gnunN1Ra4)
5. [Fetch 與 Promise 補充系列（五）：async 與 await](https://youtu.be/OEWoF9zzGAU) 

[HW13 作業連結](/homeworks/week13)

#### 自我檢測

- [ ] P1 你知道 webpack 的目的以及原理
- [ ] P1 你熟悉如何使用 webpack 進行模組化開發
- [ ] P1 你知道如何使用 Promise
- [ ] P2 你知道如何使用 fetch
- [ ] P2 你知道 gulp 的目的以及原理
- [ ] P2 你知道 CSS Sprites 與 Data URI 的優缺點
- [ ] P2 你知道什麼是 uglify 與 minify
- [ ] P3 你熟悉如何使用 gulp 建構自動化工作流程
- [ ] P3 你知道 CSS 優化的一些小技巧

### 第十四週（09/14 ~ 09/20）：伺服器與網站部署

有了自己的前後端程式之後，就可以開始來部署了。這週的重點會放在帶大家直接去買主機（[AWS](https://aws.amazon.com/tw/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc)、[Digital Ocean](https://m.do.co/c/2e78666c0866)、[GCP](https://cloud.google.com/free?hl=zh-tw)、Linode），並且了解如何連上主機。

關於主機的部分，想要用哪一家的都可以，AWS 有一年免費的方案，GCP 則是部分服務沒有超過用量就免費，其他的應該都是要付費的。

也會讓大家購買自己的網域，理解如何將網域以及主機串連起來，讓大家可以連線到你的網站。

這週也要特別感謝 [gandi](https://www.gandi.net/) 連續四期全額贊助了網域的費用 <(_ _)>。

第四期學生請找助教索取網域的折扣碼（每人限一個），可以用來註冊 .tw 的域名。

除此之外，也會稍微提到一些系統架構，還有跟資料庫的一些知識，像是 ACID、Transaction、View 以及 Stored procedure 等等，這些專有名詞的重要性是 P2 與 P3，只要稍微聽過有個印象就好。

#### 指定教材

這週最重要的就是部署自己的網站，這邊會希望大家自己先查資料，試試看能不能靠自己就部署成功，目標是把你之前的 PHP 網站放到自己的主機上，並且連 MySQL 都一起建好。

若是不行的話，請參考以下幾篇，或者是自行搜尋相關資訊：

1. [部署 AWS EC2 遠端主機 + Ubuntu LAMP 環境 + phpmyadmin](https://github.com/Lidemy/mentor-program-2nd-yuchun33/issues/15)
2. [一小時完成 VPS (Virtual Private Server) 部署](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/21)
3. [如何遠端連接虛擬主機上的 mySQL 資料庫 ？](https://github.com/Lidemy/mentor-program-2nd-futianshen/issues/33)
4. [[紀錄] 部屬 AWS EC2 雲端主機 + LAMP Server + phpMyAdmin](https://mtr04-note.coderbridge.io/2020/09/15/-%E7%B4%80%E9%8C%84-%08-%E9%83%A8%E5%B1%AC-aws-ec2-%E9%9B%B2%E7%AB%AF%E4%B8%BB%E6%A9%9F-/)
5. [AWS EC2 佈署網站：卡關記錄](https://nicolakacha.coderbridge.io/2020/09/16/launch-website/)

接著有關於專有名詞的部分，只要稍微聽過有個印象就好了，暫時不需要深入研究，可以看[程式導師實驗計畫：Lesson 8-2 之資料庫](https://www.youtube.com/watch?v=iDG8Ha2uZPs)來學習什麼是 NoSQL、transaction、ACID 與 Lock。

然後看看[程式導師實驗計畫第二期：Week8-1 後端基礎（下）](https://www.youtube.com/watch?v=QiCm9JE43KM)來學習什麼是 View、Stored Procedure 與 Trigger（這影片前半段是以前 Todo list 作業的檢討，可以跳過）。

最後是系統架構，可以稍微看一下：[CS75 (Summer 2012) Lecture 9 Scalability Harvard Web Development David Malan](https://www.youtube.com/watch?v=-W9F__D3oY4)

[HW14 作業連結](/homeworks/week14)

#### 自我檢測

- [ ] P1 你知道虛擬空間、虛擬主機以及實體主機的差別
- [ ] P1 你知道什麼是網域（Domain）
- [ ] P1 你知道如何設定網域（A、CNAME）
- [ ] P1 你知道如何用 SSH 遠端連線到自己的主機
- [ ] P1 你知道如何部署應用程式
- [ ] P2 你知道什麼是 No SQL
- [ ] P2 你知道什麼是 Transaction 與 lock
- [ ] P2 你知道資料庫的 ACID 是什麼
- [ ] P3 你知道什麼是資料庫的 View 以及使用時機
- [ ] P3 你知道什麼是 Stored procedure 以及如何使用
- [ ] P3 你知道資料庫的 Trigger 以及使用時機

### 第十五週（09/21 ~ 09/27）：複習週

終於到了第三次的複習週，這次要複習的東西比以往都多了點：

1. Session 與 Cookie 的差異
2. 資訊安全（Hashing、SQL Injection、XSS）
3. jQuery
4. Bootstrap
5. CSS 預處理器、Webpack
6. 部署

這一週的作業除了心得以外，也提供了一個跟以往不太一樣的測驗：[網站前後端開發基礎測試](https://github.com/Lidemy/mentor-program-3rd/issues/5)，一共十題簡答題，答案預設是隱藏的，自己答完之後可以自己點開對答案。

另外，這週會幫大家補充瀏覽器運作的相關知識，可以參考這一系列的文章：

1. [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
2. [中譯版](https://juejin.im/post/6844903679389073415)，其他 part 請自行搜尋

看完以後可以看我之前對這些文章的導讀：[瀏覽器運作導讀](https://youtu.be/5iaNYpVedIU?t=2432)

[HW15 作業連結](/homeworks/week15)

### 第十六週（09/28 ~ 10/04）：JavaScript 核心與物件導向

這次的第一個重點在於物件導向，之前都沒有時間好好講過，這一週特別講一下物件導向。

再來是 JavaScript 的一些重要基礎以及瀏覽器運作時的機制，這邊有兩個地方要特別注意。

第一個是瀏覽器在運行 JavaScript 時的 Event Loop 機制。

第二個是 JavaScript 的一些重要基礎，包含：scope、hoisting、closure、prototype、this 等等。

#### 指定教材

1. [JS201] 進階 JavaScript：那些你一直搞不懂的地方
2. [What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

可以搭配其他我寫的文章一起閱讀：

1. [該來理解 JavaScript 的原型鍊了](https://blog.huli.tw/2017/08/27/the-javascripts-prototype-chain/)
2. [深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.huli.tw/2018/06/23/javascript-call-by-value-or-reference/)
3. [我知道你懂 hoisting，可是你了解到多深？](https://blog.huli.tw/2018/11/10/javascript-hoisting-and-tdz/)
4. [所有的函式都是閉包：談 JS 中的作用域與 Closure](https://blog.huli.tw/2018/12/08/javascript-closure/)
5. [淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂](https://blog.huli.tw/2019/02/23/javascript-what-is-this/)
6. [JavaScript 中的同步與非同步（上）：先成為 callback 大師吧！](https://blog.huli.tw/2019/10/04/javascript-async-sync-and-callback/)
7. [覺得 JavaScript function 很有趣的我是不是很奇怪](https://blog.huli.tw/2020/04/18/javascript-function-is-awesome/)

如果你不排斥比較長的影片，也可以看這個：[程式導師實驗計畫第二期：Week9-2 JavaScript 執行原理](https://youtu.be/3s69FPDZGRk) （內容有很多應該都該 JS201 類似，所以有時間再看就好，沒看也沒關係）

物件導向的地方我自己沒有很熟，所以還在探索怎麼教會比較好，這邊有兩個第二期的影片，會用 PHP 跟 JavaScript 當範例。會用 PHP 是因為 JS 中的物件導向並不完整，而 PHP 的完整許多，但要注意影片中會在 PHP 跟 JS 中切換，建議大家只需要了解一些基本概念即可，不需要執著於一定要完全搞懂物件導向：

1. [程式導師實驗計畫第二期：Week5-2：物件導向程式設計](https://www.youtube.com/watch?v=nZhzLcV9eHI&ab_channel=Lidemy%E9%8B%B0%E5%AD%B8%E9%99%A2)
2. [Week5 物件導向（續）：繼承與 static](https://www.youtube.com/watch?v=k5TGAw7faNg&ab_channel=Lidemy%E9%8B%B0%E5%AD%B8%E9%99%A2)

[HW16 作業連結](/homeworks/week16)

#### 自我檢測

- [ ] P1 你知道 Event Loop 的運作方式
- [ ] P1 你知道什麼是作用域（Scope）
- [ ] P1 你知道 Hoisting（提升）是什麼
- [ ] P1 你知道 Hoisting 的原理為何
- [ ] P1 你知道 Closure（閉包）是什麼
- [ ] P1 你能夠舉出一個運用 Closure 的例子
- [ ] P1 你知道 Prototype 在 JavaScript 裡是什麼
- [ ] P1 你知道大部分情況下 this 的值是什麼
- [ ] P2 你知道物件導向的基本概念（類別、實體、繼承、封裝）

### 第十七週（10/05 ~ 10/11）：現代後端開發（上）

[Express](https://expressjs.com/) 是可以在 Node.js 環境下執行的輕量後端框架，自由度極高，也能夠快速開發出後端應用程式。

跟其他有完整 MVC 架構的框架相比，Express 其實鬆散（或者說自由）很多，許多地方並沒有強制規範，都只是按照前人的方法或者是慣例來實踐，十個人可能會有十種不同的寫法。

有了之前 PHP 以及 JS 的基礎，我相信學習 Express 會快速許多，因此在這一週裡面可以試試看能不能快速上手 Express 並完成作業。

除了 Express 以外，這一週還要介紹一個新的東西：ORM（Object Relational Mapping），簡單來說就是把一個程式碼裡面的物件跟資料庫的物件做映射（mapping），優點就是當你操作程式裡的物件時，就會改到資料庫裡的資料。

而且你幾乎不需要寫任何 SQL Query，因為 ORM 都會幫你處理的好好的，你只要學習怎麼用就可以了。這一週會使用 Sequelize 這個套件來做 ORM 以及串接資料庫，讓你體驗看看不用寫 SQL Query 的爽快感。

最後會把這週的專案部署到免費的空間 [Heroku](https://www.heroku.com/)或是自己的主機（nginx + PM2）。

#### 指定教材：

1. [BE201] Express 與 Sequelize：全部

[HW17 作業連結](/homeworks/week17)

#### 自我檢測

- [ ] P1 學習如何使用 Express 及其相關套件
- [ ] P1 我理解為什麼會需要框架
- [ ] P1 了解什麼是 ORM
- [ ] P1 了解 ORM 的優缺點
- [ ] P1 了解什麼是 N+1 problem 
- [ ] P1 我知道如何部署 Node.js 應用程式到 heroku

### 第十八週（10/12 ~ 10/18）：現代後端開發（下）

上週已經熟悉的基本的 Express + Sequelize 開發，而這一週我們會把之前做的餐廳網站移植過來 Express，並且加入後台的功能，讓我們可以有一個相對完整的專案。

這週會做的東西主要有：

1. 移植餐廳網站
2. 新增餐廳後台，管理菜單
3. 新增餐廳後台，管理常見問題

這週大致上需要用到的東西在上一週都學到了，核心概念跟上一週沒有什麼差，如果你有時間壓力的話，可以跳過這一週的作業。

#### 指定教材

1. [BE201] Express 與 Sequelize 全部看完

[HW18 作業連結](/homeworks/week18)

#### 自我檢測

- [ ] P1 我能夠從頭把一個網站獨立建起來
- [ ] P1 我知道如何部署 Node.js 的網站到自己的主機
- [ ] P2 我知道如何使用 Nginx
- [ ] P2 我知道如何使用 PM2

### 第十九週（10/19 ~ 10/25）：產品開發流程

前面講了很多技術相關的東西，但是在產品面上一直沒什麼著墨。下一週開始就要進入到課程的最後一個階段了，也就是前端框架以及期末作業。在開始之前，先跟大家講一下產品開發流程還有工作流程會是一件滿重要的事。

這一週會帶大家看看學習系統在開發新功能時的一些記錄，讓大家看看產品開發流程會長什麼樣子。

然後這一週的作業呢，就是讓大家有充足的時間來規劃一下自己之後期末專案想要開發什麼樣的產品。

#### 指定教材

1. [PD101] 淺談產品開發與工作流程：全部

[HW19 作業連結](/homeworks/week19)

#### 自我檢測

- [ ] P1 知道什麼是 Scrum
- [ ] P1 知道 Scrum 中通常會有哪些元素
- [ ] P1 知道什麼是 user story

### 第二十週（10/26 ~ 11/01）：複習週

這是最後一次的複習週了，在前幾週我們同時加強前後端，並且最後帶到產品開發的相關概念，讓大家對整個開發流程又理解更多了一些。

至此，這個課程的基礎跟中階都學完了，從下週開始就要進入到前端框架的領域。

為了怕大家複習週太無聊，這次也準備了一個有趣的小測驗，[Lazy Hackathon](https://lidemy.github.io/lazy-hackathon/) 是一個速度很慢的網站，原因有很多，原始碼在這裡：https://github.com/Lidemy/lazy-hackathon （特別感謝 [@yakim-shu](https://github.com/yakim-shu) 同學製作這個小測驗）

現在呢，你要來負責優化這個網站，在「不動內容」的情形下來調整，意思就是說網頁看起來要「長得一模一樣」，把圖片變黑白、刪減文字或是更動排版都是不允許的，但刪減多餘的 HTML、CSS 和 JS 是 ok 的，只要保證網頁看起來一樣就行了，原始碼怎麼動隨便你，總之目標是使網站的載入速度變快。

詳細說明請參考上面的原始碼連結。

若是你沒有任何靈感，可參考 [web.dev](https://web.dev/) 或是 [Website Performance Optimization](https://www.udacity.com/course/website-performance-optimization--ud884)

[HW20 作業連結](/homeworks/week20)

### 第二十一週（11/02 ~ 11/08）：前端框架（一）

終於要進入到前端框架 React 了（雖然嚴格來說 React 並不是一個框架，但搭配其他各種 React 生態系成員，其實就算是一個框架了）。

這週會學習到 React 的基本應用以及原理，了解為什麼我們需要使用 React。

延伸閱讀：[React 性能優化大挑戰：一次理解 Immutable data 跟 shouldComponentUpdate](https://blog.techbridge.cc/2018/01/05/react-render-optimization/)

指定教材：

1. [FE301] React 基礎：全部
2. 程式導師實驗計畫第二期：Week12-1 React
3. 程式導師實驗計畫第二期：Week12-2 React 續
4. [官方教學](https://reactjs.org/tutorial/tutorial.html)
5. [React.js 小書](http://huziketang.mangojuice.top/books/react/)


[HW21 作業連結](/homeworks/week21/fe)

#### 自我檢測

- [ ] P1 我知道 React 的目的以及原理
- [ ] P1 我知道我們為什麼需要 React
- [ ] P1 我知道使用 React 跟之前使用 jQuery 的區別
- [ ] P1 我理解 state 跟 props 的不同

### 第二十二週（11/09 ~ 11/15）：前端框架（二）

在上一週結束之後，大家應該對 React 有了一些基本的感覺，這一週我們要繼續培養對 React 的感覺，讓大家對 React 越來越熟練。

除此之外也會教大家用 React Router 這一套 library，來實做前端的路由。

指定教材：

1. [FE301] React 基礎：全部
2. 程式導師實驗計畫第二期：Week13-1 還是 React
3. 程式導師實驗計畫第二期：Week13-2 依舊 React

[HW22 作業連結](/homeworks/week22/fe)

延伸閱讀：[前後端分離與 SPA](https://blog.techbridge.cc/2017/09/16/frontend-backend-mvc/)、[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

#### 自我檢測

- [ ] 我熟悉 React 的基本使用
- [ ] 我知道如何使用 React Router 
- [ ] 我了解 React Router 的目的
- [ ] 我知道什麼是 Single Page Application
- [ ] 我理解現在的前端與以往的差別

### 第二十三週（11/16 ~ 11/22）：前端框架（三）

在之前的 React 課程中，我們已經慢慢熟悉 React 的思考模式，可是還有一些問題還沒解決，雖然你現在感受不太到，但是在 App 慢慢變大之後就會碰到了。

接續之前的課程，這一週會讓你的 Web App 變得更加完整，會導入一個新的東西：Redux，說明我們為什麼需要它。

指定教材：

1. 程式導師實驗計畫第二期：Week14-1 Redux
2. 程式導師實驗計畫：Lesson 13-1 之 React + Redux

[HW23 作業連結](/homeworks/week23/fe)

#### 自我檢測

- [ ] 我理解 Redux 的目的以及原理
- [ ] 我知道我們為什麼需要 Redux

### 第二十四週（11/23 ~ 11/29）：前端框架（四）

最後一週裡面我們將用 redux 來解決非同步操作的問題，讓大家知道如何利用它與 redux-promise 來解決非同步的一些問題。

指定教材：

1. 第二期 Redux 補充講解：redux-thunk 與 redux-promise
2. 程式導師實驗計畫：Lesson 13-2 之 React + Redux 下
3. 第二期 React 補充：什麼是 super 以及生命週期的運用
4. 第二期 React 補充：再來談談什麼是 this

[HW24 作業連結](/homeworks/week24/fe)

#### 自我檢測

- [ ] 我知道 Redux 如何搭配 middleware 解決非同步操作的問題

### 第二十五週（11/30 ~ 12/06）：Final Project

### 第二十六週（12/07 ~ 12/13）：Final Project


# Final Project

正式的課程就到這邊告一段落了，你學了前端後端與程式相關的基礎知識，接下來需要做一些作品累積經驗，因此接下來幾週都會讓同學做出屬於自己的 Final Project，建議可以與其他人合作，但也可以選擇一個人單打獨鬥。

根據第一期的經驗，其實找人合作會是比較好的選擇（第二期因進度問題沒有 Final Project）。

如果大家一點靈感都沒有的話，可以參考以下幾個提案（但有自己的想法當然是最好的）：

## 留言板

既然我們這次的課程做了這麼多個留言板，不如把留言板給做到極致吧！

你可以做一個「讓大家都能申請留言板」的系統，就像是無名小站那樣，每個人都可以申請帳號，有帳號之後可以開設自己的留言板，然後可以自己選擇要不要開放訪客來留言，不開放的話就預設是只有會員可以留言。

點下去會員的帳號之後還可以看到會員個人資料，或者是直接跳到會員自己的留言板去（如果有的話）。

除此之外，如果你想走前端的話，可以試著把前端改成 SPA 試試看！

## 論壇系統

建立一個論壇系統，能有不同的板塊（討論區），例如說：

1. 閒聊
2. 購物
3. 程式相關主題

在不同板塊底下都可以發表文章，除了發表文章以外，下面也能夠有回覆。

或者是你也可以把板塊當成是 Tag 而已，在同一個頁面就可以看到所有的文章，如果你想找範例的話，可以參考：http://react-china.org/

## 購物網站

做個簡單的購物網站，可以參考任何一家市面上的電商，例如說這個我隨便找的電商：https://www.yuyufarm.com/

重點是除了前端以外，你必須要有後台能夠讓管理者登入，並且管理商品（例如說調整價錢、上傳圖片、調整順序等等），可以先完成一個最簡單的版本，之後再慢慢加強。

## 社交網站

可以直接參考 Twitter：https://twitter.com/?lang=zh-tw

你可以 follow 人，然後就能夠看到他的動態，也可以自己 po 動態，會出現在自己的 follower 的牆上。

總之呢，關於 Final Project，沒有靈感的話可以先從自己常用的東西開始下手，先打造出一個最簡單的版本再慢慢加強。也可以盡量去找一些第三方的 API 來串，增加自己串 API 的經驗，例如說：

1. Firebase
2. Google Map API
3. Google Login, Facebook Login
4. 金流

## 繳交 Final Project

請準備好以下幾個東西並且於第二十七週 po 到 Slack 裡面：

1. 作品網址（沒主機或是 deploy 碰到問題的可以來找我）
2. 5 分鐘以內介紹作品的短片，上傳到 YouTube（可以不用露臉，你不想出聲的話後製加文字也可以）
3. GitHub 網址（請確保你有把一些敏感的資訊例如說資料庫密碼之類的拿掉）
4. 做 final project 的心得（看你想寫在哪裡都可以）

## 自我練習

Codewar 是一個程式解題平台，靠這些題目，可以訓練自己對語法的熟悉度以及維持手感，更進階的題目則是能夠訓練思考邏輯以及解題方法。

我依照難度整理出了一些題目，平常做作業卡關或是沒事做的時候，都可以解一下這些題目。

[Codewar 題目列表](/codewar.md)

## Tech Stack

這邊列舉這堂課程用到的所有工具。

1. 課程直播：YouTube
2. 群組聊天：Slack
3. 交作業：GitHub + GitHub Classroom
4. 練習題目：Codewar + LidemyOJ
