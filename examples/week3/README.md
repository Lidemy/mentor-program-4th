# Week3 作業自我檢討

請注意，這週沒有自我檢討，因為交作業前就已經跟大家說過，要拿到 AC 才能交作業。拿到 AC 代表答案是對的，所以不需要特別改什麼。

挑戰題的部分請去別的檔案觀看。

底下我先補充幾個重點。

## return 與 console.log

以判斷質數那一題來說，你可以這樣寫：

``` js
function solve(lines){
  for(let i=1; i<lines.length; i++) {
    logPrime(Number(lines[i]));
  }
}

function logPrime(n) {
  if (n === 1) {
    console.log('Composite');
  }
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      console.log('Composite');
    }
  }
  console.log('Prime')
}
```

看起來沒什麼問題吧？不，問題可大了。

問題就在於，你的這段程式沒辦法重複使用。為什麼呢？假設你今天有另外一個程式也需要判斷質數的功能，你可能會想把程式碼複製貼上。但你會發現有一個問題，那就是 `logPrime` 這個函式其實「並不會回傳判斷的結果」。

你可能會說：「咦？不是有嗎？不是印出來了嗎？」

印出跟回傳是完完全全不同的兩件事！

印出來是印出來啊，但如果我不想要印出來怎麼辦？我只是需要知道一個數字「是不是質數」，不代表我要把它印出來。舉個例子，我想做一個程式是如果一個數字是質數，我就不管它；不是質數的話，我就要把它的因數都印出來，那我用 `logPrime` 怎麼做到？

做不到，除非我去改裡面程式碼。所以這就是我上面說的：「這段程式沒辦法重複使用」。

接著我們來看看參考解答：

``` js
function solve(lines){
  for(let i=1; i<lines.length; i++) {
    // 重點是這行
    console.log(isPrime(Number(lines[i])) ? 'Prime' : 'Composite')
  }
}

function isPrime(n) {
  if (n === 1) return false;
  const num = Math.sqrt(n);
  for (let i = 2; i <= num; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

我們寫了一個 `isPrime` 的函式，如果傳進去的數字是質數，就會回傳 true，反之則是 false。承接上面那個範例，如果今天要寫一個不是質數就把因數全部印出來的程式，我們可以重用這個 `isPrime` 的函式嗎？

當然可以！

因為這個函式把結果回傳回來，我們可以根據那個結果來做事，例如說：

``` js
for(let i=1; i<lines.length; i++) {
  if (isPrime(Number(lines[i]))) {
    // do something
  } else {
    // do something
  }
}
```

所以請特別注意一件事情，那就是在函式裡面，不會透過「console.log」來回傳結果，而是透過 return。所以最好的寫法就是像我這樣分開，功能歸功能，log 歸 log，才會讓這個 function 可以重複使用。

## 變數命名：語意

上一週有提過變數命名的語意很重要，函式其實也是一樣。

如同我上面寫的，你有沒有看到我的函式名稱叫做：`isPrime`？通常 `is` 開頭的函式就代表：「這個函式只會回傳 true 或是 false」，例如說 week2 的 `isNarcissistic` 也是一樣。

這個就叫做語意，光看 `Narcissistic` 或是 `Narc` 你一定不懂他在幹嘛，但是看：`isNarcissistic` 就知道他是在判斷一個東西，然後會回傳 boolean。

不過這次強調，這是慣例，不是規則。

你可以把函式名稱叫做 `isNarcissistic`，但卻不回傳東西，或是回傳字串，這都是可以的，但都是不應該做的事，因為這樣只會混淆看程式碼的人（還有自己）。

然後再提醒一下上週講過的命名慣例，一律使用小寫開頭的 camel case 來命名。

## 型態

這週一定有很多人因為型態吃到苦頭，所以再次提醒大家型態的重要性。

尤其是字串跟數字，當你搞不清楚又不知道 == 與 === 的差別時，就很容易出錯。所以在寫程式的時候請務必知道每一個變數的型態是什麼。

## early return

這週大家在寫作業時，應該會發現有個 eslint 的規則叫做：[no-else-return](https://eslint.org/docs/rules/no-else-return)，這個第 11 週會再提到一次，但沒關係我這邊就先講了。

有些人在寫程式的時候，畢竟是初學者嘛，會很習慣以：if...else 的模式去思考，這個很正常。以判斷質數為例，可能會是這樣：

``` js
function isPrime(n) {
  if (n === 1) {
    return false
  } else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }  
}
```

看起來十分合理，但是 eslint 會不給過，原因上面有提到了，是一個叫做 no-else-return 的規則。這個是來幹嘛的呢？首先，你看看上面的程式碼，如果 n 是 1 的話，就會直接 return false 對吧？

函式一旦 return 就結束執行了，所以如果 n 不是 1 的話才會繼續往下執行。所以呢，把 else 拿掉，其實邏輯是一模一樣的：

``` js
function isPrime(n) {
  if (n === 1) {
    return false
  }

  // 會跑到這邊，代表 n 一定不是 1
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true; 
}
```

拿掉之後的好處是什麼？好處就是你的程式碼的「層級」變低了。你可以簡單想成就是縮排變少了，大括號也變少了，這樣其實在看程式碼的時候是非常有幫助的，尤其是程式碼一多的時候。

舉另外一個 hw5 的程式碼為例（改寫自其他同學）：

``` js
if (K === '1') {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] > arr2[i] ? 'A' : 'B';
      }
    }
  } else {
    return arr1.length > arr2.length ? 'A' : 'B';
  }
} else {
  return false;
}
```

在寫程式的時候有個技巧叫做：early return，意思就是能夠儘早把結果傳回去，就趕快傳回去，可以省掉很多不必要的判斷，也可以讓我們在看程式碼的時候順暢許多。你想想看，如果你的 if 到了三四層，會不會看一看就忘記這一層在判斷什麼？例如說：

``` js
if (..) {
  if (...) {
    if (..) {

    } else {

    }
  } else {
  }
} else {

}
```

我光看了就頭痛...

但很多情形之下，你其實可以想辦法把這些 if else 壓平，變這樣：

``` js
if (...) {
  return xxx
}

if (...) {
  return xx
}

if (...) {
  return xxx
}

return xxx
```

這樣程式碼就會變得可讀性高很多。所以上面那個範例：

``` js
if (K === '1') {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return arr1[i] > arr2[i] ? 'A' : 'B';
      }
    }
  } else {
    return arr1.length > arr2.length ? 'A' : 'B';
  }
} else {
  return false;
}
```

改完之後可以變這樣：

``` js
// 條件反過來寫，就可以先 return，底下就不用接 else
if (K !== '1') {
  return false
}

// 這也是，先 return
if (arr1.length !== arr2.length) {
  return arr1.length > arr2.length ? 'A' : 'B';
}

// 最後才做要做比較多事情的段落
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] !== arr2[i]) {
    return arr1[i] > arr2[i] ? 'A' : 'B';
  }
}
```

有發現差別了嗎？這兩個的邏輯其實一模一樣，而前者有很多巢狀的 if else，多層之後其實很難去看，但是後者換一個寫法，就少了很多層，程式碼就可以順順地看下去。

像這種 return 後面不接 else 其實是個非常常見而且很不錯的做法，只是大家可能剛開始不習慣，之後就會慢慢習慣了。

## hw1：好多星星

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

## hw2：水仙花數

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

## hw3：判斷質數

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

## hw4：判斷迴文

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

## hw5：聯誼順序比大小

這題要注意的是題目範圍，因為數字太大，所以用 JS Number 會出問題，一個很大的數字被轉成 Number 之後會變成無限大（Infinity），所以比較大小就失去作用了。

因此要自己用字串實作判斷的邏輯：

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

或是你也可以用比較新的資料型態：BigInt 去解這題，但建議大家試著不要用這個來解解看：

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
