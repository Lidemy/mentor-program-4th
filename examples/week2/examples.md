### 第一題：printStars

這題比較沒難度就不解釋了，照著做就行了。有很多人會把字串拼好再印出來，也是 ok

``` js
function printStars(n) {
  for (let i = 0; i < n; i += 1) {
    console.log('*');
  }
}
```

### 第二題：capitalize

有很多人都會用 charAt 或是先把字串用 split 變成陣列再來做這題，但其實在 JS 裡面你本來就可以用 str[0] 取到第一個字，不需要用 chatAt。  

另一個常見問題是會檢查第一個字是否是小寫再轉，但內建的 toUpperCase 如果本來就是大寫，轉完也還是大寫，想一下之後會發現根本不需要檢查。

``` js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```

### 第三題：reverse

迴圈倒著做就好

``` js
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  console.log(result);
}
```

### 第四題：printFactor

這題的迴圈不要從 0 開始，因為語意上是不通的，你不會想拿數字去除以 0

``` js
function printFactor(n) {
  for (let i = 1; i <= n; i += 1) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}
```

### 第五題：內建函式自己做

這一題最常見的錯誤是最後面多了一個連接的字串。 

另外，當陣列是空的的時候可以特別處理，在這情形下應該要回傳空字串

``` js
function join(arr, concatStr) {
  if (arr.length === 0) { // special case
    return '';
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    result += concatStr + arr[i];
  }
  return result;
}
```

repeat 比較容易，就迴圈一下

``` js
function repeat(str, times) {
  let result = '';
  for (let i = 0; i < times; i += 1) {
    result += str;
  }
  return result;
}
```

## hw6：簡答題

執行流程就不多講了，這個當作人體 debugger 一行一行寫出來就好，而這個函式做的檢查是：確定陣列前兩項的和是不是等於下一項，是的話就回傳 valid，如果不是或者陣列裡面有元素 <=0 的話，也回傳 invalid。

對於這種「前兩項的和要等於下一項」的數列，有個專有名詞叫做費氏數列，有興趣的朋友們可以去查查看，這個在電腦科學界裡面非常有名。