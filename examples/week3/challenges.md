### 挑戰題

如果你的方法跟我不太一樣，那很有可能得不出正確答案。最簡單的測試方法是去 [LIOJ](https://oj.lidemy.com/problem/1053)，答案對就是對，錯就是錯。

另外，這題不會也沒關係，如果看了我的講解看不懂也沒關係，因為這是以後我在演算法課程裡面想要教的，放在這邊其實太早。而且都說了這是超級挑戰題，不是給一般的學生解的。

先大概講一下這題的解題方向，其實就是「我把每個點走過一遍，求出走到每個點的最少步驟就好了」。

我們可以先宣告一個二維陣列 `ans[y][x]` 來儲存「從起點走到 (x,y)」的最短距離。所以預設值可以設成無限大，方便我們之後來做判斷。再來的話 ans[0][0] 顯然是 0，因為從起點走到起點最短當然是 0 步。

接下來呢，我們可以宣告一個 Queue，把想要走的點都丟進去，所以我們先把起點丟進去。

然後我們會一直把 Queue 裡面的點拿出來看，試著往四個方向去走走看，可是要怎麼決定是不是該走？

假設現在 Queue 裡面的點是 A，我們想要走到 B 點。

如果：

1. B 點可以走（不是牆壁）或是 B 點沒走過
2. 而且「從起點走到 A 加上從 A 走到 B 的」距離比「從起點走到 B」的距離還要近的話

那就應該走，反之就不該走

如果該走的話，就更新走到 B 的最短距離，然後把點放到 Queue 裡面，等 Queue 清空就代表所有可能都已經找過，ans 就是答案了。

程式碼：

``` js
function solve(map) {
  let h = 10
  let w = 10
  let startX = 0
  let startY = 0
  let endX = w - 1
  let endY = h - 1
  let ans = []
  for(let i=0; i<h; i++) {
    ans[i] = []
  }

  let queue = [{x: startX, y: startY}]
  let dir = [
    {dx: 1, dy: 0},
    {dx: -1, dy: 0},
    {dx: 0, dy: 1},
    {dx: 0, dy: -1}
  ]
  ans[0][0] = 0
  while(queue.length) {
    let {x, y} = queue.shift()
    for(let d of dir) {
      let newX = x + d.dx
      let newY = y + d.dy
      if (newX >= w || newX < 0 || newY >= h || newY < 0 || map[newY][newX] !== '.') continue
      if (ans[y][x] + 1 >= ans[newY][newX] && ans[newY][newX] !== undefined) continue
      ans[newY][newX] = ans[y][x] + 1
      queue.push({x: newX, y: newY})
    }
  }
  console.log(ans[endY][endX])
}

solve([
    '..########',
    '#........#',
    '########.#',
    '#........#',
    '#.########',
    '#........#',
    '########.#',
    '#........#',
    '#.######.#',
    '########..'
])
```

### 超級挑戰題

這題我還沒想好怎樣講解會比較好，所以先不講大家查到的「動態規劃」應該怎麼講。我先給一個暴力搜尋的版本：

``` js
var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  let [n, weight] = lines[0].split(' ').map(Number)
  let w = []
  let p = []
  for(let i=1; i<lines.length; i++) {
    let [a, b] = lines[i].split(' ').map(Number)
    w.push(a)
    p.push(b)
  }
  
  // dfs(w, p, max, index, left)
  // = 現在有物品列表的重量 w[] 與價值 p[]
  // 目前的價值為 max, 剩餘空間為 left
  // 從 index 開始拿物品直到拿完，最多能獲得的價值多少？
  // 所以答案就是：dfs(w, p, 0, 0, weight)
  console.log(dfs(w, p, 0, 0, weight))
})

function dfs(w, p, max, index, left) {
  // 那要怎麼決定這個函式要回傳什麼呢？
  // 首先，如果已經沒有東西可以放了（index >= w.length）
  // 就把 max 回傳，目前的最大價值就是答案
  if (index >= w.length) return max

  // 如果不拿第 index 項
  // 最大的價值就是 dfs(w, p, max, index + 1, left)
  let a = dfs(w, p, max, index + 1, left)

  let b = -1
  // 如果這項物品能放進去，才去算放進去之後可以獲得多少價值
  // 否則的話根本不用算，因為放不進去
  if (left >= w[index]) {
    // 如果拿了第 index 項
    // 最大的價值就會是：dfs(w, p, max + p[index], index + 1, left-w[index])
    b = dfs(w, p, max + p[index], index + 1, left-w[index])
  }

  // 拿跟不拿兩個做比較，回傳比較大的那個就是答案
  return a > b ? a : b
}
```

### 超級超級挑戰題

等 week3 結束再來寫XD
