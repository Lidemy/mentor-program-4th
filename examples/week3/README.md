# Week3 作業自我檢討

請注意，這週沒有自我檢討，因為交作業前就已經跟大家說過，要拿到 AC 才能交作業。拿到 AC 代表答案是對的，所以不需要特別改什麼。

底下就直接進入參考解答。

挑戰題的部分請去別的檔案觀看。

### hw1：好多星星

比較平易近人的解法：

``` js
function solve(lines){
  let n = Number(lines[0])
  for (let i = 1; i <= n; i++){
    console.log('*'.repeat(i))
  }
}
```

比較帥氣（？）的解法，先產生一個長度是 n 的 array，然後用 map 與 repeat 來填值，最後用 join 結合起來。看起來很帥，但其實用上面平易近人的寫法我覺得會更好。

``` js
function solve(lines){
  let n = Number(lines[0])
  console.log(
    Array.from({length: n})
      .map(
        (item, index) => '*'.repeat(index + 1)
      )
      .join('\n')
  )
}
```

### hw2：水仙花數

可以參考 ALG101 課程中的解法：https://github.com/Lidemy/ALG101-too-weak-to-leetcode/blob/master/unit4/examples/1025.js

``` js
// 拿到所有資料
function solve(lines) {
  // 5 200 => ['5', '200']
  let temp = lines[0].split(' ')
  let n = Number(temp[0])
  let m = Number(temp[1])
  for(let i=n; i<=m; i++) {
    if (isNarcissistic(i)) {
      console.log(i)
    }
  }
}

// 回傳數字幾位數
function digitsCount(n) {
  if (n===0) return 1
  let result = 0
  while(n != 0) {
    n = Math.floor( n / 10)
    result++
  }
  return result
}

function isNarcissistic(n) {
  // 幾位數
  let m = n
  let digits = digitsCount(m)
  let sum = 0
  while(m != 0) {
    let num = m % 10
    // 可改成 Math.pow(num, digits)
    sum += num**digits 
    m = Math.floor( m / 10)
  }

  // 可簡化成
  // return sum === n
  if (sum === n) {
    return true
  } else {
    return false
  }
}

// 偷吃步的做法
function isNstr(n) {
  let str = n + ''
  let digits = str.length
  let sum = 0
  for(let i=0; i<str.length; i++) {
    sum += Number(str[i])**digits
  }
  return sum === n
}
```

### hw3：判斷質數

可以利用上一週學過的找因數，直接回傳因數數目是否等於 2 即可，但數字 1 要額外做處理。

或是也可以用迴圈去判斷。

``` js
function solve(lines){
  for(let i=1; i<lines.length; i++) {
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  // 一行的時候可以偷省略括號，雖然我不知道 eslint 會不會給過就是了XD
  if (n === 1) return false;

  // 找根號以內的數就好，這是數學小知識
  // 先把開根號的值存好，否則每一圈迴圈都會運算一次
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

### hw4：判斷迴文

把字串拿去跟 reverse 之後的比較，看是不是一樣即可。

``` js
function solve(lines) {
  let str = lines[0]
  if (reverse(str) === str) {
    console.log('True')
  } else {
    console.log('False')
  }
}

function reverse(str) {
  let result = ''
  for(let i=str.length - 1; i>=0; i--) {
    result += str[i]
  }
  return result
}
```

或是也可以帥氣的用一行解決：

``` js
function solve(lines) {
  let str = lines[0]
  console.log(str.split('').reverse().join('') === str ? 'True' : 'False')
}
```

### hw5：聯誼順序比大小

這題要注意的是題目範圍，因為數字太大，所以用 JS Number 會出問題。因此要自己用字串實作判斷的邏輯，或者是用新的資料型態 BigInt。

``` js
function solve(lines) {
  let m = Number(lines[0])
  for(let i=1;i<=m; i++){
    let [a, b, p] = lines[i].split(' ')
    if (BigInt(a) === BigInt(b)) {
      console.log('DRAW')
    } else if ((BigInt(a) > BigInt(b) && p == 1) || (BigInt(a) < BigInt(b) && p == -1) ) {
      console.log('A')
    } else {
      console.log('B')
    }
  }
}
```

自己實作比對邏輯就會變這樣：

``` js
function compare(a, b, p) {
  if (a === b) return "DRAW"

  // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
  // 那如果是比小怎麼辦？把 AB 對調就好
  // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
  // 但如果是比小，把 AB 對調，就會回傳 B 了
  if (p == -1) {
    let temp = a
    a = b
    b = temp
  }

  const lengthA = a.length
  const lengthB = b.length

  if (lengthA != lengthB) {
      return lengthA > lengthB ? "A" : "B"
  }
  for (let j = 0; j < lengthA; j++) {
      if (a[j] == b[j]) {
          continue;
      }
      return a[j] > b[j] ? "A" : "B"
  }
}

function solve(lines) {
  let m = Number(lines[0])
  for(let i=1;i<=m; i++){
    let [a, b, p] = lines[i].split(' ')
    console.log(compare(a, b, p))
  }
}
```

但更進一步去想就會發現其實不需要自己用迴圈比大小，因為字串其實比的是字典序，如果兩個字串長度相同，那字典序其實就是數字大小的順序，所以可以簡化成這樣：

``` js
function compare(a, b, p) {
  if (a === b) return "DRAW"

  // 先假設我們都是比大，所以 A 大就回傳 A，B 大就回傳 B
  // 那如果是比小怎麼辦？把 AB 對調就好
  // 假設 A 是 5，B 是 3，我們的邏輯會回傳 A
  // 但如果是比小，把 AB 對調，就會回傳 B 了
  if (p == -1) {
    let temp = a
    a = b
    b = temp
  }

  const lengthA = a.length
  const lengthB = b.length

  if (lengthA != lengthB) {
      return lengthA > lengthB ? "A" : "B"
  }
  return a > b ? 'A' : 'B'
}
```
