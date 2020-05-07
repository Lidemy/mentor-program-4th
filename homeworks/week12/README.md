# 作業

## hw1：增強 JavaScript 留言板

之前在 BE101 的最後，有做了一個留言板的 API，並且自己利用前端 JS 去串接，有顯示留言跟新增留言這兩個功能。

這個作業要你來增強這個專案，請加上以下功能：

1. 分頁功能（要能夠顯示現在在哪一頁、切換到其他分頁等等）
2. 由原本固定帳號，改成以前那種可以自己輸入暱稱的方式留言（所以沒辦法與原本留言板的資料庫共用，要新開一個）

介面的部分請使用 Bootstrap，JS 的部分也請盡量用 jQuery。

## hw2：打造短網址服務

短網址服務的原理其實很簡單，那就是背後有一個 table 紀錄了短網址跟長網址的關聯，當使用者造訪短網址的時候，就把使用者用 302 redirect 導到長網址去即可。

因此呢，請你做一個簡易短網址的 API，要有以下兩個檔案：

1. create_url.php （處理縮網址的需求）
2. r.php （短網址導到長網址）
3. index.html （縮網址的頁面）

r.php 的功能很簡單，就是接收短網址然後導到原本的網址去。

例如說 r.php?id=abc123，可能就會連到 google.com 去之類的。

至於 create_url.php 則是負責縮網址的部分。

可以用 POST 的方式把要縮的網址傳到 create_url.php 去，而且可以接收一個參數叫做「custom_url」，如果有這個參數，代表使用者想要自訂短網址。

例如說把 google.com 帶到 create_url.php，可能會產生一個短網址是：http://example.com/r.php?id=abc123

但如果我把 google.com 以及 custom_url=g 一起傳給 server，產生的短網址就會是：http://example.com/r.php?id=g

介面的部分請使用 Bootstrap，JS 的部分也請盡量用 jQuery。

## hw3：簡答題

1. 請簡單解釋什麼是 Single Page Application
2. SPA 的優缺點為何
3. 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟上一週的留言板有什麼不同？

請將答案寫在 [hw3.md](hw3.md)。
