## 跟你朋友介紹 Git
1. 首先上網[https://git-scm.com/book/zh-tw/v2/%E9%96%8B%E5%A7%8B-Git-%E5%AE%89%E8%A3%9D%E6%95%99%E5%AD%B8](https://)
先將git安裝好
2. git --version 可以看目前git的版本
3. git init 建立一個新的隱藏資料夾.git
4. touch gitignore 建立一個叫gitignore的資料夾
5. vim gitignore 將檔案用`i`輸入進去並按下`esc`轉換模式`:wq`存檔跳出
6. git status 可隨時看目前git的狀態
7. git add 
* git add . (可將所有資料夾內的檔案都加入版本控制)
* git 檔名 (可將指定的檔案加入到版本控制)
加入後可使用git status 查看目前的狀態，會發現有分成
    * untracked(不加入版本控制)
    * staged(已加入版本控制)
如果不小心將不想要加入版本控制的檔案加入進去的話，可使用`git rm --cached 檔名` 將他再拉出來
8. git commit -am "message" 將檔案commit上去
9. git log 可看歷史狀態
10. 之後如果是新增新的檔案則是一樣跑`7`流程，如果是舊有的檔案做修改則可直接用`8`流程
11. 完成最簡單的本地端Git 版本控制
