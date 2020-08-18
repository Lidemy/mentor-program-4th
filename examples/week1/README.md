# Week1 作業自我檢討

請注意，當週自我檢討只有 hw1，參考解答只有 hw5 以及挑戰題。

### hw1：交作業流程

1. 新開一個 branch：`git branch hw1`
2. 切換到 branch： `git checkout hw1`
3. 寫作業
4. 如果有新增的檔案，記得加進去 git： `git add .`
5. 提交改動：`git commit -am "hw1"`
6. 推到 GitHub：`git push origin hw1`
7. 到自己的 repo 去，並且發起 PR（Pull Request）
8. 把 PR 的連結複製起來，並且在學習系統上繳交作業

等作業改完並且 merge 以後：

1. 切換到 master：`git checkout master`
2. 把最新的改動拉下來：`git pull origin master`
3. 刪除已經 merge 的 branch：`git branch -d hw1`

如果交作業步驟有錯的麻煩自己再修正一下，感謝～

然後要特別提醒幾件事情，第一件是課程中把 Git 的不同 branch 比喻為「不同的資料夾」，只是為了讓初學者比較方便去理解版本控制的概念。

實際上 Git 在運行時，不會真的每開一個 branch 就開一個資料夾，也不會每一個 commit 就複製一次檔案。如果真的是這樣，那假設你有一個 10MB 的檔案，做完 100 個 commit 複製完 100 次之後不就超級大了嗎？

因此，聰明的 Git 真正儲存的是「檔案的差異」，例如說你在檔案第二行插入了一行文字：「hello」，Git 就只會記住「檔案第二行插入 Hello」這件事情，並不會複製整個檔案。那 Git 要怎麼知道某個時間點的檔案長什麼樣子？就把原始檔案再重新套用一次每個 commit 的差異，不就是那個時間點的樣子嗎？（不過 Git 在這件事情上應該會做一些優化就是了）

所以大家一定要清楚地知道，Git 真正儲存的是檔案的差異。然後第一次 `git init` 的時候的確是會把整份檔案都記起來，才知道最一開始長什麼樣子。對於每一個檔案，Git 也都有自己的壓縮演算法去壓縮，所以比你的檔案還小是正常的。

再來還有一件事情很重要，那就是 master 就只是「預設的 branch」，或者通常是最主要的 branch，但這並不代表它是「最新的 branch」。舉例來說，你也可以切出一條 branch 叫做「test」，然後一直往 test 加東西，但是從來都不合併回 master，那 test 就是在你專案裡的最新的 branch。所以 master 就只是一條預設的 branch 而已，最新的東西不一定在上面。

另外，發 PR 的時候如果有東西你想改，其實你可以自己在電腦上改完以後 commit 再 push，GitHub 上的 PR 就會自動更新了，你什麼都不用做，更不用把 PR 關掉再開起來。因為 PR 的主體是「branch」，所以 branch 更新了，PR 的內容自然也會一起更新。


