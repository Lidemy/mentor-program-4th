## 什麼是 DOM？
DOM 全名為 Document Object Model
就是把 HTML 的標籤（ Document ） 轉換成物件( Object )。
JavaScript 可以操作物件，但不能直接操作頁面上的標籤，所以 DOM 就是瀏覽器幫 object 轉換成 => HTML 對應的標籤，進而讓 JS 可以改變到頁面的元素。也就是說「DOM 就是 JS 跟 HTML 溝通的橋樑。」


## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
DOM 的事件在傳播時，會先從根節點開始往下傳遞到 target，再往上從子節點一路逆向傳回去根節點。這段過程中共分為三個階段：
整個傳遞機制的流程就是：
捕獲 => 目標本身 => 冒泡
捕獲：
* 從根節點開始往下傳遞到 target 的過程
* 以點選 `<td>` 標籤為例，事件得傳遞可能會像這樣：
  * window => document => `<html>` => `<body>` => `<table>` => `<tbody>` => `<tr>`

目標本身：
* 事件傳遞到目標本身 
* 不會分捕獲或冒泡
* 以點選 `<td>` 標籤為例，事件傳遞就在目前這個目標 `<td>` 本身  

冒泡：
* 從子節點一路逆向傳回去根節點的過程
* 以點選 `<td>` 標籤為例，事件得傳遞可能會像這樣：
  * `<tr>` => `<tbody>` => `<table>` => `<body>` => `<html>` => document => window

1.先捕獲，再冒泡
2.當事件傳到 target 本身，若要裝監聽器的話，監聽器沒有分捕獲(左邊)跟冒泡(右邊)，監聽器會裝在target 本身
3.捕獲與冒泡是「無論如何」都會發生的，而且順序永遠不會改變的一個東西。當你點擊某個按鈕時，就會先從 window 一路把事件由左邊傳遞下去，再從按鈕一路把事件傳遞由右邊傳遞回來。所以，儘管你什麼 event listener 都沒有加，背後的捕獲與冒泡還是存在。
事件機制也是這樣的，捕獲跟冒泡這個流程永遠都在，但如果你沒有加監聽器，你是察覺不到的。所以 addEventListener 的第三個參數只是覺得你要在「哪邊」加上這個監聽器，而不是改變原本事件傳遞的流程。


## 什麼是 event delegation，為什麼我們需要它？
如果我們要把非常大量的「按鈕」加上監聽器，我們可以手動一個一個加，或者利用迴圈幫忙加上去。

但是我們有更方便的作法，就是把監聽器加在這些按鈕共同的「父層元素」。因為事件的傳遞從根節點到 target 的過程一定會經過這個「父層元素」。（上面有提到捕獲與冒泡是「無論如何」都會發生的，且事件的傳遞順序永遠不會改變。）這種由父層元素協助監聽的方式，就叫做「事件代理」。

* 比起手動一個一個加上監聽器，事件代理的效率更高
* 在這個父層元素底下動態新增的子元素，也可以一併綁定到 eventListener


## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`e.stopPropagation` 停止的是後續事件
`e.stopImmediatePropagation()` 讓其他同一層級的 listener 也不要被執行
`e.preventDefault()` 可以停止瀏覽器的預設行為
如果我想要阻止頁面上所有的 `click` 事件（ 包括 `<a>` 預設的動作 ），可以在 window 物件監聽捕獲階段，來阻止底下的所有元素

```js
window.addEventListener('click', function (e) {
  e.preventDefault(); // 停止預設功能
  e.stopPropagation(); // 停止後續傳遞
}, true) // 指定為從捕獲階段(左邊）開始監聽

// 底下的事件傳遞全都被阻止了
function addEvent(className) {
  document.querySelector(className)
    .addEventListener('click', function (e) {
      console.log(className, '捕獲', e.eventPhase);
    }, true)
  document.querySelector(className)
  .addEventListener('click', function (e) {
    console.log(className, '冒泡', e.eventPhase);
  }, false)
};
```


