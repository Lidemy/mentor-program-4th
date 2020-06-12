## 交作業流程

1.  先 clone github上的資料到電腦內 : git clone https://github.com/ruofanwei/mentor-program-4th.git

2.  到mentor-program-4th的資料後 建立一個新的branch ex: wk1 : git checkout -b wk1

3.  在hw1.md寫作業

4.  存檔

5.  git status 可以看到hw1內容被新增 

6.  git commit -am wk1

7.  git push original wk1

8. 到github介面點選pull request

9.  點選compare & pull request

10.  接著按 creat pull request

11.  到Llidemy系統的作業列表新增作業

12.  看過自我檢測後才可以交作業

13.  助教看完作業後會merge branch 到master上

14.  git pull original master讓遠端的master跟本地的master同步

15.  同步之後就可以把本地的wk1 branch刪掉了 ：git branch -d wk1
