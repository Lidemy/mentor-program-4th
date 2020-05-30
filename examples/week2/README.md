# Week2 作業自我檢討

這週的參考解答放在另外一個檔案裡面，然後自我檢討只有兩件事情要請大家檢查。

第一，請看清楚題目的要求，「印出」代表在 function 裡面會出現 `console.log`，把東西印出來；「回傳」代表要利用 `return` 把答案回傳，所以在呼叫 function 時不會有任何輸出，一定要把這兩點分得很清楚。

第二，hw5 的 join 那題，請試試看以下幾個 case 是否有回傳正確答案：

``` js
join([1, 2, 3], '')，正確回傳值：123
join(["a", "b", "c"], "!")，正確回傳值：a!b!c
join(["aaa", "bb", "c", "dddd"], ',,')，正確回傳值：aaa,,bb,,c,,dddd
```

要特別注意的是分隔符號只會在每個元素中間出現，所以如果你寫成：

``` js
function join(arr, concatStr) {
  let result = '';
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i] + concatStr;
  }
  return result;
}
```

是標準錯誤寫法，因為最後面會多了一個 concatStr。
