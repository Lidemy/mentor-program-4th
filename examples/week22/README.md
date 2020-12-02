# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 有了 react-router 之後的 deploy

有些問題需要注意，第一個問題可參考：[淺談新手在學習 SPA 時的常見問題：以 Router 為例](https://blog.huli.tw/2019/09/18/spa-common-problem-about-router/)

第二個問題是你在 deploy 的時候有可能需要調整一些參數，例如說 create-react-app 的 homepage 以及 react-router 的 basename，詳情可參考：[Building for Relative Paths](https://create-react-app.dev/docs/deployment#building-for-relative-paths)

## 本週作業範例

請參考：https://github.com/aszx87410/react-board-test/tree/blog-finished

（在 blog-finished 這個 branch 裡面） 

## 有關分頁

太多人分頁都在前端做了，這是不好的做法，想一個問題就行了：

> 如果有一千篇文章怎麼辦？

你不可能只要看第一頁，結果抓 1000 篇文章下來吧？

正確做法是每換一次頁面就打 api 去抓相對應的文章，要看幾篇就抓幾篇，api 有支援 `_limit` 跟 `_page` 之類的，然後 response header 有總共的文章數量，不要再把分頁做在前端了。



