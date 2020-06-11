## 交作業流程
1. 先開一個新的 branch，我命名為 week1 `git branch week1`

2. 在切換到 week1 這個 branch `git checkout week1`

3. 接著在 branch 上編輯 hw1.md `vim hm1.md`

4. 完成作業後，記得先進行 commit，先 `git add .` 再 `git commit -am "h1w1"`

5. 以防萬一可以做個確認的動作 `git log` 查看是否有剛剛 commit 的紀錄

6. commit 完後再將 local 端的變動給 push 到 GitHub `git push origin week1`

7. 接著再點選上方的 PR，再點選 New pull request 

8. 設定 base : master <- compare : week1，接著填入標題及留言，如果有需要別人 review，可以 tag 對方名稱或點選右邊 Reviewers 的欄位輸入對方帳號 

9. 以上都輸入完成後，就可點擊 Create pull request

10. 接著就是等待 Reviewers 審查，如果作業 ok，對方就會 merge pull request 到 master，並刪除遠端的 (week1) branch 刪掉

11. 這時因為 GitHub 上的版本才是最新的，所以我們要先回到 local 端的 master branch `git checkout master`，再將遠端最新版的 master 抓下來 `git pull origin master`

12. 抓下來後可以輸入 `git log` 查看是否有最新的 commit 

13. 確認完後，就可以將 local 端的(week1) branch 刪除 `git branch -d week1`

14. finish，以上就是繳交作業的完整流程

**提醒**：養成一個良好習慣，只要做改動就要先開一個新的 branch 

完整教學可參考 -> [程式導師實驗計畫：Lesson 1 之 git 講解](https://www.youtube.com/watch?v=9YmeBhekqps&list=PLeWlPscCzV-e-EeGkrYKHavBnYSzJ4gMw&index=2)
