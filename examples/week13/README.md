# Week13 自我檢討

## hw3 改成 fetch

先來看一下 week8 原本使用 xhr 的版本，這邊我只在乎兩個點，那就是我在呼叫拿資料的 function 時怎麼呼叫，然後資料怎麼回傳，只有這兩個部分需要改動，其他地方都不用動：

``` js
function getStreams(name, cb) {
  var request = new XMLHttpRequest();
  request.open('GET', url + '/streams?game=' + encodeURIComponent(name), true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Client-ID', 'xxxxxx')

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      cb(JSON.parse(this.response));
    }
  };
  request.send();
}

getStreams(topGames[0], (data) => {
  appendStreams(data.streams)
  addPlaceholder()
  addPlaceholder()
  addPlaceholder()
})
```

### 第一次嘗試：改成 fetch

第一次嘗試，我們先保留原本 callback 的設計，把 xhr 換成 fetch 看看，會變成這樣：

``` js
function getStreams(name, cb) {
  fetch(url + '/streams?game=' + encodeURIComponent(name), {
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'xxxxxx'
    }
  })
  .then(res => res.json())
  .then(data => {
    cb(data)
  })
}

getStreams(topGames[0], (data) => {
  appendStreams(data.streams)
  addPlaceholder()
  addPlaceholder()
  addPlaceholder()
})
```

只有 getStreams 這個 function 有變而已，底下用的地方完全沒變，都還是跟原本一樣使用 callback function 去拿資料。

可是這樣其實沒那麼好，會被看出來你其實不會用 promise。因為如果會用的話，其實 callback 就不會出現了。

### 第二次嘗試：都改成用 Promise

Promise 基本上可以取代 callback，所以其實我們可以從 callback 的機制換成 Promise，會變這樣：

``` js
function getStreams(name) {
  // 這個 return 是重點，還記得 Promise.then 以後還是一個 promise 嗎？
  // 所以我們最後回傳的是一個 promise
  return fetch(url + '/streams?game=' + encodeURIComponent(name), {
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'xxxxxx'
    }
  })
  .then(res => res.json())
}

// 這邊改用 .then 拿資料
getStreams(topGames[0]).then(data => {
  appendStreams(data.streams)
  addPlaceholder()
  addPlaceholder()
  addPlaceholder()
}) // 順便加上錯誤處理好了
.catch(err => console.log(err))
```

這邊我們把原本的 callback 改成 promise，然後順便加上 .catch 來處理錯誤，就完全不需要再用到 callback 了，程式碼看起來也乾淨一些。

這邊提一個之前看到的錯誤，有人會這樣寫：

``` js
fetch(url + '/streams?game=' + encodeURIComponent(name), {
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'xxxxxx'
    }
  })
  .then(res => res.json())
  .then(data => data)
```

最後一個 .then 完全是不必要的，因為他只會回傳自己而已。有那行跟沒那行一模一樣，只是多此一舉。

### 第三次嘗試：async

最後我們試著來改成 async 的寫法，還記得我說過的訣竅嗎？就把東西先改成很像同步的樣子，最後再加上關鍵字就好。先來看 getStreams 怎麼改：

``` js
async function getStreams(name) {
  const response = await fetch(url + '/streams?game=' + encodeURIComponent(name), {
    headers: {
      Accept: 'application/vnd.twitchtv.v5+json',
      'Client-ID': 'xxxxxx'
    }
  })
  const data = await response.json()
  return data
}
```

大家可以自己對照之前 promise 的版本，其實可以看得出來就只是在 promise 前面加 await，然後前面就可以像同步那樣直接接收回傳值了。

再來是用的部分，會這樣用：

``` js
const data = await getStreams(topGames[0]).catch(err => console.log(err))
appendStreams(data.streams)
addPlaceholder()
addPlaceholder()
addPlaceholder()
```

這邊其實是錯的用法，因為變成 async 之後，錯誤就可以改用一般的 try catch 而不是 Promise 的 catch 了，會變這樣：

``` js
try {
  const data = await getStreams(topGames[0])
  appendStreams(data.streams)
  addPlaceholder()
  addPlaceholder()
  addPlaceholder()
} catch(err) {
  console.log(err)
}
```

這就是改成 async 的重點，那就是「用看起來很像同步的寫法，前面再加上 await 就好」

最後再講一個東西，那就是只有在 async 的 function 裡面才能使用 await 這個關鍵字，因此上面這一段必須被包在 async 的 function 裡面才行，像是這樣：

``` js
async function run() {
  try {
    const data = await getStreams(topGames[0])
    appendStreams(data.streams)
    addPlaceholder()
    addPlaceholder()
    addPlaceholder()
  } catch(err) {
    console.log(err)
  }
}

run()
````

總結幾個重點：

1. 有了 Promise 就不會有 callback，除非用的 library 不支援
2. 用了 async/await，通常就不會有 .then 跟 .catch 了
