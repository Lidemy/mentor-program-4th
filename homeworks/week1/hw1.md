## 交作業流程
#### 下載作業設定環境
1. git clone 網址.git
2. git branch 新branch名稱(ex:hwWeek1)
3. git checkout hwWeek1(將版控切換到新的分支上)
4. git status(確認版控狀態)
5. 開始寫作業

(2.3步驟快速打法：git checkout -b 新branch名稱)

#### 寫好作業上傳至Github上
1. 寫完作業後git add .(更新所有修改過的檔案)
2. 2. git commit -am "hwWeek1 完成作業"
3. git push origin hwWeek1(將檔案推到遠端Github上)
4. 到Github網頁上按下Pull requests---compare & pull request(或是按new pull request 選想要pull的分支)

#### 將Github上檔案回傳至本機，並且將合併好的分支刪除
1. git checkout master
2. git pull origin master
3. git branch -d hwWeek1
4. git branch -v 或 git log (確認是否移除掉了)
5. 完成
