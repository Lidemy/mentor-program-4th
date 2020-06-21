## 交作業流程

# 複製檔案到本地

1 : 點選影片網址，點選 clone or download 複製作業。  
2 : 再到自己電腦裡，終端機使用指定：git clone +網址。
3 :  複製完成。

# 開新的branch

1:現在本地的檔案是master ，需要開一個新的branch，來去做編輯。使用指令：git branch weeek1(新分支名稱)。
＊在branch改動，養成好習觀
2:使用指令：git status，確認自己的位子在新的分支上。
3:完成。

# 寫作業

1:在新的分之下打開作業，使用指令: open. hw1，開始寫。
2:寫完，檢查自我檢討。
3:完成。

# 推回github

1:在終端機使用指令：git commit-am +weeek1ok
2:到 Github的simple，再次檢查作業，確認無誤。
3:在本地的新分支推到遠端上，使用指令：git push orgin weeek1
4:到 Github，Pull Request 到分頁上，按下 compare & Pull Request
5:選擇要合併的分支，選擇weeek1，增加標題和敘述，再次檢查確認無誤後，按下 Create Pull Request。

# 學習系統上面

1:到學習系統的作業列表上面，新增作業選擇 week1。
2:回到 Github 複製 PR 連結，貼上並送出。

# 交作業到此一個段落，接下來等作業批改完成。
 
 1 : 作業批改完成後看到 merge 出現，回到本地使用指令：git checkout master ，切換回主要。
 2 : 從遠端把最新的改動拉下來，使用指令 : git pull origin master
 3 : 然後把本地的 hw1 刪掉，使用指令: git branch -d hw1

終了