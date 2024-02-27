## 交作業流程

1.先在本機上面新建一個資料夾

2.打開 vscode，使用下方終端機，創建資料夾，再創建文字檔

3.連結 git ，使用「git init」就會初始化一個新的 git 資料庫

4.確認系統是否創建成功，由於 git 初始化後會自動創建「.git」的資料夾，但是隱藏的，所以要想看到需要「ls -Force」，至於 mac 可以使用「ls -a」看到隱藏資料夾

5.上傳至 staging area，使用 「git add "檔案名稱"」

6.將 staging area 暫存區，提交給 localrepo 本地儲存庫，使用 「git commit -m "註解(例如：第五次測試、新增功能 a 的變更)"」

7.將 localrepo 本地儲存庫，提交給 remote repository 遠端資料庫(例如 github、gitlab)，使用 「git remote add origin "網址" 」

8.將資料推送至 github ，使用 「git push origin master」這將推送 master 分支的更改到 GitHub 上名為 "origin" 的遠端儲存庫。如果使用的是不同的分支名稱，請將 master 替換為實際分支名稱

9.接著登陸 github 確認是否成功
