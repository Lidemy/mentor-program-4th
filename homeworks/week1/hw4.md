## 跟你朋友介紹 Git
因為你的人實在是太好，時不時就會有朋友跑來找你來幫忙。

這次來的是一個叫做菜哥的朋友，會叫做菜哥是因為家裡賣菜，跟你認識的其他人同名的話純屬巧合。

菜哥：「就是啊，我最近有一個煩惱。因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」

『好吧，我試試看』

菜哥：「謝啦，話說你來參加這個計畫學程式真的選對了欸，之後就不會有貧血的困擾了」

『為什麼』

「因為你會寫程式」

『...』

「喔...原來是血乘四的部分啊（拍手）」

就是這樣，在一陣尬聊之中你答應了菜哥的要求，要教他怎麼使用 Git 來管理他的笑話。

因此，你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講，菜哥能不能順利成為電視笑話冠軍，就靠你了！

請將答案寫在 [hw4.md](hw4.md)。
# Git V.S GitHub
## GIT
是一個幫你做版本控制的程式，
可以保留檔案過去的每個版本，並可以隨時切換到過去某個「版本」時候的狀態。
## GitHub:類似託管區的概念，將專案Git版本控制後，存放在GitHub上的倉庫(repository)，你可以在GitHub上建立多個倉庫(repository)。
`注意`:如果專案用GitHub託管版本控制的話，就一定要使用Git做版本控制。但專案用Git做版本控制也可以上傳到其他網站託管。
`注意`:你可以用Git但不用GitHub，但你要用GitHub就一定要會用Git。
# 關於GIT基本指令
`git init`版本控制初始化
`git status`查看狀態
`git add .`將此資料夾下的全部檔案加入版本控制
`git commit --cached <檔案名稱>` 將檔案解除版本控制
`git commit -am <名稱>` 將所有檔案加入版本控制，建立新版本，並完成命名。
`git log`查看紀錄
`git checkout master`切換回穩定上線版
`.gitignore`忽略不需要版本控制的檔案ps:這是一個檔案，不是 Git 指令！
`.gitignore 檔案`本身也需要加入版本控制
查看版本差異
`clone`：GitHub →下載到 自己電腦
把 GitHub repository 的資料下載到本地端repository

`注意`:若是 clone 別人的 repository，我們無權修改別人repository的內容
`fork`： 複製一份別人的repository，變成自己的repository

`注意`:可以編輯自己的那份 repository，並且可以pull回GitHub
`git commit -amend`更改 commit 名稱與內容
`git reset HEAD^ --hard`上一個commint整個刪除不要
`git reset HEAD^`上一個commint取消版本控制但是保留修改的檔案
`git checkout --<file>` 把某個檔案復原
`git checkout -- .`把全部檔案復原
`git branch -m <名稱>`改branch的名字
`git checkout <branch名稱>`可以直接拉下遠端的 branch