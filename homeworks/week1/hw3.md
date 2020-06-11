## 教你朋友 CLI

如果你的電腦是 Windows，可以再電腦搜尋 CMD (命令提示字元)，應該就會出現了
 
1. 點選 CMD，接著先輸入 `cd` 查看位置
```
C:\Users\User>cd
C:\Users\User
```
2. 再來是選擇要編輯的區域使用，例如我想到 D 槽，可以輸入 `d:`
```
C:\Users\User>d:
D:\>
```
如果是想移動到 C 槽，則可以輸入 `c:`
```
D:\>c:
C:\Users\User>
```
3. 假設我在 D 槽，想創建一個 wifi 的資料夾，這是就可以輸入 `mkdir wifi` 
```
D:\>mkdir wifi
```
4. 使用 `ls` 指令，則是可以查看當檔案夾下的所有檔案
```
D:\>ls
 
2020/06/11  下午 02:21    <DIR>          wifi
```
5. 接著移動到 wifi 的資料夾的位置
```
D:\>cd wifi
```
6. 如果想創建 afu.js 這個檔案，可以輸入 `touch afu.js`
```
D:\wifi>touch afu.js
```
**備註**：Windows 內部並沒有 touch 指令，所以需另外安裝

7. 輸入 `ls` 再來查看一次資料夾內是否有這個檔案吧
```
D:\wifi>ls

2020/06/11  下午 02:23                  afu.js
```
---
ok，以上就是這次的教學啦！

更多詳細指令介紹可以參考 [CMD 指令](https://github.com/small-leaf/My-Blog/issues/1) 
