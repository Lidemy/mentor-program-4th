## 跟你朋友介紹 Git

### 什麼是 Git?
在幫檔案做版本控制的程式，方便管理。

### 什麼是版本控制？
你有一堆檔案，你如何管理他們？就像你平常整理檔案時候一樣，把最新寫好的專題叫做report1，教授看過後又更改了第二版本叫做report1.1，不停的更新我們就要保留更新的紀錄，Git就在在幫我們做這些事情的程式，他會記錄我們的更動歷史，並且幫我們整理好。

### Ｇit 基本指令

* git init : 初始化，讓電腦知道這個檔案夾要做版本控制。
* git status : 檢視狀態
* git rm --cached 檔案：將檔案移除版本控制狀態

* git add. 全部檔案加入版本控制
* git commit 建立一個新的版本
* git commit - m ooo 建立一個ooo的版本
* git commit - am new file ：new file就會被放入版本控制，方便好用。

* git log：歷史紀錄
* git diff：改動紀錄

* git checkout 版本名稱：變回輸入版本的狀態
* git checkout master：回到最新版本
* git - oneline ：簡短狀態

* .gitignore : 要忽略的東西

### 平行時空branch

在兩條 branch 上可以平行同時做開發。一邊 debug 一邊做新功能開發，並可將兩個 branch 做合併 merge。

* git branch - v：會得到 master 這個分支
* git branch new feature：開一個叫 new feature 的分支
* git bransh - d new-feature：刪掉 new feature 這個分支。d 亦為 delete。

### 切換分支

* git checkout branch-A：切換到 branch-A 。

### 合併分支

* git merge new-feature：把 new-feature 合併進來，new-feature 是被動被合併進去。

### 介紹 Push 指令
目的：最新版本推到遠端

1. 先完成檔案加入git，使用指令：git commit -am ooo
2. 把檔案推到 Github 的master branch ，使用指令：git push origin master

### 介紹 Pull 指令

可使用 pull 指令來拉檔案到本地做同步。 
使用指令：git pull origin master

＊有可能會遇到衝突 conflict 就一樣以手動解決。 