# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 你的離開不是你以為的離開

跟之前 PHP 一樣，很多人以為 `header("Location: index.php")`之後程式就結束了，不，沒有，這只是個 function call 而已。

Express 同理，無論你是呼叫 `next` 還是 `res.redirect`，程式都沒有停止執行，所以像這樣一段程式碼：

``` js
function handle(req, res) {
  if (!req.body.username) {
    res.redirect('/')
  }

  User.create()
}
```

程式還是有執行到 `User.create()` 那一行，那要怎麼結束程式執行？因為我們在 function 裡面，所以 return 就好：

``` js
function handle(req, res) {
  if (!req.body.username) {
    res.redirect('/')
    return
  }

  User.create()
}
```

這樣才是符合我們預期的行為。

但這邊還要注意一件事情，那就是在用 Promise 的時候你通常都是在一個 function 裡面，所以這樣寫是沒有用的：

``` js
function handle(req, res) {
  User.findBy({
    id: 1
  }).then(user => {
    if(!user) {
      res.redirect('/')
      return
    }
  }).then(user => {
    // 這邊還是會執行到
    User.create()
  })
}
```

因為 promise chaining 的特性，所以最後的那個 `.then` 還是會執行到，你寫的 return 是你傳進去 then 的那個 function 的 return，不是 `handle` 的 return。

這邊建議大家改用 async await，程式碼簡單好懂：

``` js
async function handle(req, res) {
  const user = await User.findBy({
    id: 1
  })

  if(!user) {
    res.redirect('/')
    return
  }

  User.create()
}
```

## Promise chaining

我看到這週有很多人善用了 Promise chaining 的特性，寫出像是這種程式碼：

``` js
User.findBy({
  id: 1
}).then(user => {
  return user.destory()
}).then(() => {
  res.redirect('/')
})
```

那你能看出上面的範例跟下面的差在哪裡嗎？

``` js
User.findBy({
  id: 1
}).then(user => {
  user.destory()
}).then(() => {
  res.redirect('/')
})
```

沒錯，就差在 `user.destory()` 有沒有 return，可是這有什麼差呢？有，差很大。

Promise chaining 是什麼意思？之前有講過，你要在 .then 裡面「回傳一個 Promise」才會成立，而上面那種錯誤寫法，.then 裡面沒有 return，所以預設就是回傳 undefined，因此 Promise chaining 不會成立。

但你不會發現，因為正確的寫法是「user.destory 執行完以後，才會執行 res.redirect」，但錯誤的寫法也只是「user.destory 還沒執行完，就會執行 res.redirect」

因為 redirect 也需要時間，所以實際上重新導向時，刪除 user 的動作還是很有可能已經完成了，因此在結果上類似，但後者還是錯誤的寫法，因為這並不是 promise chaining。

## 權限檢查

Week20 的 show time 有 lidemy 學習系統後端的程式碼導讀，裡面有權限檢查的部分，其實可以善用 middleware 來做，會方便很多，像是這樣：

``` js
function checkIsLogin(req, res, next) {
  // 沒有登入，導回首頁
  if (!req.session.username) {
    res.redirect('/')
    return
  }

  // 有登入，放行
  next()
}

app.get('/admin', checkIsLogin, adminController.index)
```

## 環境變數

敏感資料要放環境變數，例如說 session 的 secret 雖然課程沒特別提，但其實就算是，可以參考：https://github.com/Lidemy/mentor-program-4th-awuuu0716/pull/20#discussion_r504042290

## 命名規則

JS 命名規則提很多次了，通常是 camelCase，然後 url 會是 kebab case，用 `-` 來分開。

例如說網址會是 `add-post` 而不是 `addPost` 也不是 `add_post`，用來處理的 controller function 會叫 `handleAddPost`，不會是 `handle_add_post` 也不會是 `HandleAddPost`。


