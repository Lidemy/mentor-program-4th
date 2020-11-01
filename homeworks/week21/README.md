# 作業

注意，這週 React 的作業可以 hooks 跟 class 的寫法都用用看，但之後建議以 hooks 為主。

## hw1：Todo List

請你用 React 實作出一個 todo list，需要實作的功能有：

1. 新增 todo
2. 編輯 todo（這個比較複雜，可以最後再來做，沒有做也可以）
3. 刪除 todo
4. 標記完成/未完成
5. 清空 todo
6. 篩選 todo（全部、未完成、已完成）

## hw2：五子棋遊戲

請實作出一個簡單的五子棋遊戲，讓黑棋白棋可以輪流下，並且判定勝負。棋盤的話請用十九路棋盤（19x19），黑棋先下。

在寫之前你或許會想先看[官方教學英文版](https://reactjs.org/tutorial/tutorial.html)或是[中文版](https://zh-hant.reactjs.org/tutorial/tutorial.html)。

不過要注意的是官方教學是用 class component 的寫法，你需要吸收之後自己試著用 function component 寫寫看。

<details>
  <summary>提示 #1 - 不知道怎麼存棋盤的 state 看這邊</summary>

這邊用二維陣列來做比較好做，用一個 board[y][x] 來存每一個的棋子，左上角是 board[0][0]，往下 y + 1，往右 x + 1，所以第二行一個棋子就是 board[1][0]

利用 `Array(19).fill(null)` 可以產生 `[null, null, ....]` 一共 19 個 null 的陣列，這就是每一個橫排的內容。所以整個棋盤可以用：`Array(19).fill(橫排內容)`來產生，就是 `Array(19).fill(Array(19).fill(null))`

``` js
const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)))
```

要改變棋盤的時候要記得不能直接去改變 state，所以有兩種方式，第一種最簡單，就是把整個陣列做 deep clone 然後改值就好

``` js
function updateBoard(x, y, newValue) {
  const newBoard = JSON.parse(JSON.stringify(board))
  newBoard[y][x] = newValue
  setBoard(newBoard)
}
```

第二種則是用我們在課程中教過的 map，不過因為有兩層所以會比較複雜一點：

``` js
function updateBoard(x, y, newValue) {
  setBoard(
    board.map((row, currentY) => {
      // 如果這一個橫排不是我要改的，直接回傳即可
      if (currentY !== y) return row;

      // 如果是的話，找到我要改的那個 x 的位置
      return row.map((col, currentX) => {
        if (currentX !== x) return col
        return newValue
      })
    })
  )
}
```

</details>

### 延伸挑戰題

1. 你的棋子是下在線的交叉點嗎？如果你是把棋子畫在格子內，試試看畫在線的交叉點吧！
2. 試著做一個可以返回任意步驟的功能，可以回到之前任何一個步驟
3. 試著做一個紀錄棋譜的功能，在下完棋之後可以把對局分享給朋友，朋友就能看到這一局棋的棋譜

### 延伸進階挑戰題

1. 試著做一個簡單的 AI，可以選擇跟電腦下棋

## hw3：報名表單改寫

之前第七週有做了一個報名表單，表單在 React 當中是個滿需要練習的東西，因此這個作業就是要請你把第七週的報名表單用 React 改寫，然後一樣需要有驗證的功能！

你可能會需要用到的參考資料（舊版 class component）：https://reactjs.org/docs/forms.html

## hw4：簡答題

1. 為什麼我們需要 React？可以不用嗎？
2. React 的思考模式跟以前的思考模式有什麼不一樣？
3. state 跟 props 的差別在哪裡？
