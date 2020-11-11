# 作業

## hw1：SPA 部落格加強版

上週的作業我們做了一個簡單的部落格，而這週的作業會延續上一週，繼續加強它的功能。

我們需要增加的功能有：

1. 刪除文章
2. 編輯文章

除了增加這兩個功能以外，我們原本 user 的資料是存在 context，這週的作業要請你把 context 拔掉，改用 redux 來存這個資訊。所以資料的更新也必須透過 redux。

除此之外，在發 API 的部分我們原本是在 component 裡面直接用 fetch，現在請你改用 redux-thunk 來完成，所以 API 的 loading 狀態以及 response 都會存在 store 裡面。

## hw2：簡答題

1. 為什麼我們需要 Redux？
2. Redux 是什麼？可以簡介一下 Redux 的各個元件跟資料流嗎？
3. Redux middleware 是什麼？
