# Week8 作業參考解答

## 第一題獎項機率

first 5%  
second 20%  
third 30%  
none 40%  
error 5%  

## 怎麼算出來的？

你可以寫一隻程式一直去發 request 然後做統計，越多次數量越準，以下是我寫的簡單版本：

[連結](./week8-challenge.html)

JS 主程式碼：

``` js
const data = {
  total: 0,
  first: 0,
  second: 0,
  third: 0,
  none: 0,
  error: 0
}

const delay = 200
const max = 200
const errorMessage = 'error'

const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery'

// 抽獎
function getPrize(cb) {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', apiUrl, true)
  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      let data
      try {
        data = JSON.parse(xhr.response)
      } catch(err) {
        cb(errorMessage)
        return
      }

      if (!data.prize) {
        cb(errorMessage)
        return
      }

      cb(null, data)
    } else {
      cb(errorMessage)
    }
    
  }
  xhr.onerror = function() {
    cb(errorMessage)
  }
  xhr.send()
}

function loop() {
  if (data.total >= max) return
  getPrize((err, response) => {
    data.total++
    if (err) {
      data.error++
    } else {
      data[response.prize.toLowerCase()]++
    }
    update()
    setTimeout(loop, delay)
  })
}

loop()

function update() {
  const keys = ['first', 'second', 'third', 'none', 'error']
  const total = data.total
  document.querySelector('.total').innerText = total
  for(let key of keys) {
    document
      .querySelector('.' + key)
      .innerText = (Number(data[key])*100) / total
  }
}
```
