### 挑戰題

這題請參考：https://blog.huli.tw/2016/09/23/binary-search-introduction/

``` js
function search(array, target){
  var L = 0, R = array.length - 1;
  while(L<=R) {
    var M = Math.floor((L+R)/2);
    if(array[M]<target){
      L = M;
    } else {
      R = M - 1;
    }
  }
  return M;
}
```

### 超級挑戰題

不能用到加減乘除，所以能用到的只有位元運算。事實上，在電腦底層的加法就是用位元運算去做到的。你要去思考的只有：該怎麼把兩個 bit 相加，然後重複做幾次之後就變成數字的加法了。

``` js
/*
  半加法器
  輸入兩個 1 bit 的數字
  輸出相加總和與進位

  畫個表格其實就知道為什麼可以這樣做了
  a b sum carry
  0 0  0   0
  0 1  1   0
  1 0  1   0
  1 1  0   1

  a, b 都是 1 的時候進位才會是 1
  a b 其中一個是 1 另一個是 0 的時候 sum 才會是 1
*/
function halfAdder(a, b) {
  const sum = a ^ b
  const carry = a & b
  return [sum, carry]
}

/*
  全加法器
  輸入三個 1 bit 的數字
  輸出相加總和與進位
  先把 a, b 相加，得到加起來的總和跟進位
  再把總和跟 c 相加，得到的結果就會是 a+b+c 的總和
  進位則是看 carry1 ^ carry2（或是 carry1 | carry2 應該也行）
*/
function fullAdder(a, b, c) {
  const [sum1, carry1] = halfAdder(a, b)
  const [sum2, carry2] = halfAdder(c, sum1)
  return [sum2, carry1 ^ carry2]
}

/*
  把 a 跟 b 的每一個 bit 都用 fullAdder 做相加
  然後要把這個結果設置到 result 上面去
  positionMask 就是這個作用
  初始值是 1，結束第一圈之後左移，就會變成 10
  然後 100, 1000, 10000，再搭配 or 就可以只設置相對應的 bit
*/
function adder(a, b) {
  let result = 0;
  let positionMask = 1;
  let carry = 0
  while(a > 0 || b > 0 || carry > 0) {
    const [sum, c] = fullAdder(a & 1, b & 1, carry);
    carry = c
    result = (sum ? positionMask : 0) | result
    a >>= 1
    b >>= 1 
    positionMask <<= 1
  }
  return result
}
```

### 超級超級挑戰題

請參考這兩位同學的作業：

1. https://github.com/Lidemy/mentor-program-4th-WooooHuan/pull/2
2. https://github.com/Lidemy/mentor-program-4th-cwc329/pull/4

