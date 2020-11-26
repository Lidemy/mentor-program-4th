# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 本週參考

1. [HW1 todo list（無編輯功能）](https://codesandbox.io/s/week21-todo-list-example-ot7fg?file=/src/App.js)
2. [HW1 todo list（有編輯功能）](https://codesandbox.io/s/di-21-zhou-todo-list-kebianjiban-mzo11
)
3. [HW2 五子棋](https://codesandbox.io/s/di-21-zhouwuziqi-h7j1t?file=/src/App.js)

## 關於 state 的改變

這邊建議大家去找更多關於 React 裡面 useState 相關的文章，因為有些部分課程沒有仔細提到。

可以參考：

1. [關於 useState，你需要知道的事](https://medium.com/@xyz030206/%E9%97%9C%E6%96%BC-usestate-%E4%BD%A0%E9%9C%80%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B-5c8c4cdda82c)
2. [Functional updates](https://reactjs.org/docs/hooks-reference.html#functional-updates)

React 的 useState 中 updateState 的部分基本上是非同步的，所以如果你有一個 object 的 state：

``` js
const [data, setData] = useState({ a: 1, b: 1})
```

然後你在某個 function 裡面連續做兩次 update：

``` js
setData({
  ...data,
  a: 2,
})
setData({
  ...data,
  b: 2
})
```

呼叫完第一次的 setData 以後，data 不會變，依舊是 `{a: 1, b: 1}`，所以你這邊執行完，新的 data 會是 `{a: 1, b: 2}` 而不是預期中的 `{a: 2, b: 2}`

如果你要連續改變同一個 state，請用 functional update 的方式，就可以變成你想做的樣子：

``` js
setData(data => ({
  ...data,
  a: 2,
}))
setData(data => ({
  ...data,
  b: 2
}))
```

## controlled component 與 uncontrolled component

有點忘記這邊課程有沒有提到，但這很重要：

1. https://reactjs.org/docs/glossary.html#controlled-vs-uncontrolled-components

## 關於五子棋判斷邏輯

如果某方下了一顆棋子然後產生勝負的話，就代表最後一顆落子一定在連成一線當中，才會產生勝負，因此只要朝那顆棋子的周邊去搜就可以了。

可以寫一個很 general 的 function，能夠傳入最後一個的 x, y 以及要判斷的方向：

``` js
function countTotal(currentX, currentY, directionX, directionY) {

  // 現在要檢查的棋子是什麼顏色
  const now = board[currentX][currentY]

  let tempX = currentX
  let tempY = currentY
  let total = 0
  do {
    tempX += directionX // 檢查下一顆棋子
    tempY += directionY

    // 如果新的棋子等於我現在要檢查的（意思就是連續啦）
    if (board[tempX][tempY] === now) {

      // 連續的棋子數 + 1
      total++
    } else {
      break
    }
  }
  return total
}
```

這樣就可以得到某個方向的總數，於是判斷勝負的程式碼就可以這樣寫：

``` js
if (
  countTotal(x, y, 1, 0) + countTotal(x, y, -1, 0) >= 4 ||
  countTotal(x, y, 0, 1) + countTotal(x, y, 0, -1) >= 4 ||
  countTotal(x, y, 1, 1) + countTotal(x, y, -1, -1) >= 4 ||
  countTotal(x, y, 1, -1) + countTotal(x, y, -1, 1) >= 4
) {
    // do something
}
```

優雅地解決了這一題，而且程式碼可能還比窮舉法少XD

然後如果你是用一維陣列去存棋盤的話，建議不要，因為會變得很麻煩，用二維方便很多。