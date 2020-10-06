# Week16 自我檢討

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## Callback queues

這一週附上的 event loop 影片應該就講的滿清楚的了，但大部分同學都會忽略掉一個小細節。

以下面的程式碼為例：

``` js
setTimeout(() => {
  console.log('hello')
}, 0)
```

執行流程是什麼？

是先把這整段放到 call stack 裡面去執行，所以才會執行 setTimeout 這個 function。然後 setTimeout 會呼叫瀏覽器幫忙設定一個 0 ms 後到期的定時器，到期之後就會把第一個參數：`() => {console.log('hello')}` 放進去 callback queue。

這邊最多人誤解的點就是會把 `setTimeout(...)` 整段丟進去 callback queue，不是這樣的，只會把第一個參數丟進去而已。你必須先執行 setTimeout 才能設定計時器，才能把第一個參數丟進去 callback queue。

然後還有另一個會搞錯的地方，那就是很多人以為是把 `console.log('hello')` 丟進去 callback queue，不是，這是一個 function call，不是一個 function。丟進去 callback queue 的是 `() => {console.log('hello')}` 這個 function。

設定完成以後從 call stack pop 出來，main 也 pop，stack 清空，把 `() => {console.log('hello')}`  丟進去 call stack，執行這個 function，執行之後發現這個 function 裡面還要呼叫 `console.log('hello')`，所以把 `console.log` 丟進去 call stack，印出 hello，pop，然後原本的 function 也沒東西要執行了所以也 pop，stack 清空，結束。

## 錯誤範例

底下找幾個現成的錯誤範例來解釋錯在哪裡：

### 範例一

``` js
console.log(1)        // 放入 Call Stack 並直接執行，印出 1，執行完後移除
setTimeout(() => {    // setTimeout() 放到 Webapis 執行，直到倒數完畢，
  console.log(2)      // () => { console.log(2) } 被放到 Callback Queue 待命
}, 0)
```

錯誤的點在：「setTimeout() 放到 Webapis 執行」，web api 不是一個地方，是一個種類，setTimeout 是屬於 web api 的其中一個，但是不是 web api 跟非同步無關。

### 範例二

1. 將`console.log(1)`放入 call stack 執行，輸出 1
2. 將`setTimeout(() => { console.log(2) }, 0)`放入 call stack 執行，在經過 0 秒後呼叫`() => { console.log(2) }`，由於 setTimeout 屬於 WebAPI，
所以將 `() => { console.log(2) }` 排進 callback queue，執行結束後，setTimeout 就會從 call stack 中 pop 掉

錯誤的點在於第二步，「由於 setTimeout 屬於 WebAPI，所以...」，不是，這跟是不是 WebAPI 無關，而是跟 setTimeout 本身要做的事有關。

換句話說，有同步的 WebAPI，也有非同步的 API，有同步的不是 WebAPI 的東西，也有非同步的不是 WebAPI 的東西。

這邊我看了一下我之前寫的文章，發現是我讓大家誤解了，描述得不夠好，我文章中是這樣寫的：

> 然後 setTimeout 屬於 Web API，所以會跟瀏覽器說：「欸欸，幫我設定一個計時器，2000 毫秒以後呼叫 fn」，然後就執行結束，從 call stack 裡面 pop 掉。

我這邊要強調的是：「因為 setTimeout 是 WebAPI，所以會跟瀏覽器溝通，要瀏覽器去執行某些事情」，而不是「因為是 WebAPI 所以會把 callback 丟進 callback queue」。

### 範例三

把 `setTimeout` 放進 call stack
因為 `setTimeout` 是非同步函式，所以會移進 Web API 等待時間到
經過 0 ms 之後，將 `() => { console.log(2)}` 放進 Queue 
此時因為 call stack 裡也有任務正在執行，所以先在 Queue 裡面等待

錯誤的點在於 Web API 不是一個地方。這邊可以直接講瀏覽器就好，呼叫 setTimeout 之後叫瀏覽器設定一個計時器，0ms 之後會觸發，那這個計時器設定在哪邊？不重要，這是瀏覽器會去處理的事。

### 範例四

將 `setTimeout(() => {
  console.log(2)
}, 0)` 放進 Call Stack 執行，呼叫 setTimeout 這個 Web API，本行執行完畢，setTimeout 倒數時間設定為 0，倒數完畢後，將 `console.log(2)` 放入 Callback Queue 待命。

錯誤的點在於：將 `console.log(2)` 放入 Callback Queue 待命，是將 `() => { console.log(2) }` 放入 callback queue。

有關 setTimeout 的延伸閱讀：

1. [为什么 setTimeout 有最小时延 4ms ?](https://juejin.im/post/6846687590616137742)
2. [HTML spec: 8.6 Timers](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers)

## Function expression 的初始化

這邊可以參考我跟同學們的討論：https://github.com/Lidemy/mentor-program-3rd-ClayGao/pull/24
