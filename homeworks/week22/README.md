# 作業

## hw1：SPA 部落格

請做出一個簡單的 Blog SPA，一共有三個頁面：

1. About：隨意顯示一些話
2. 文章列表：可以看到所有文章
3. 單篇文章：可以看到單篇文章內容

Route 的部分請使用 React Router，資料請串接下面的 API

圖片可參考：

![](blog.png)

API 格式：

base url：https://qootest.com  

```
GET     /posts 取得所有 post
GET     /posts/:id 取得某個 post
```

使用說明可以參考 https://github.com/typicode/json-server  
因為這個服務是用 json server 這個 library 建的

例如說 https://qootest.com/posts 就可以拿到所有 post，https://qootest.com/posts?_limit=1 就可以限制只拿 1 筆。


## hw2：簡答題

1. React Router 背後的原理大概是怎麼實作的？
2. SDK 與 API 的差別是什麼？
