``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```
## 執行流程
1. ..設一個主函式isValid
2. ..迴圈
3. ..執行第一行 設定變數i=0 i小於陣列長度 是 繼續執行 進入第一圈
4. ..執行第二行 判斷i值是否小於等於0 是 回傳 invalid
5. ..第一圈i=0 arr[0]等於3 x
6. ..第二圈i=1 arr[1]等於5 x
7. ..第三圈i=2 arr[2]等於8 x
8. ..第四圈i=3 arr[3]等於13 x
9. ..第五圈i=4 arr[4]等於22 x

迴圈
執行第三行 設定變數i=2 i小於陣列長度 是 繼續執行
執行第四行 
第一圈
i=2
判斷arr[2]=8 不等於 5 + 3 x 
第二圈
i=3
判斷i值13 不等於 8 + 5 x 
第三圈
i=4
判斷i值22 不等於 13 + 8 是 
回傳invalid



執行完畢
14. ..
15. ..
16. ..
17. ..
18. ..
19. ..
20. ..