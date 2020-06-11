## 跟你朋友介紹 Git

  Git 就是一種版本控制系統，那甚麼是版本控制呢？

  其實每個人或多或少都有版本控制的經驗，就是對一個檔案進行修改或變動，但希望同時保存新版和舊版
  ```
  舉例來說：

  期末報告
  期末報告-01
  期末報告-02
  期末報告-03
  ```
  檔案量不大的時候，當然可以這樣管理，但如果是多人管理資料的時候，可能就不是那麼方便了

  還好，現在有 Git 這個方便的工具，那麼接下來就讓我一步步教你如何操作 Git 吧！

  0. 首先要先安裝 [Git](https://git-scm.com/) 到電腦上，因為我自己是用 Windows，所以這邊主要也是以 Windows 的版本講解
  ---
  1. 再開啟 `Git Bash` 這個檔案，利用 `cd` 這個指令移動到想進行控制的檔案夾
  ---
  2. 移動到目的地後，輸入 `git init` 初始化這個檔案，可以透過 `ls -al` 查看目前檔案內是否有加入 .git
  ```
  $ ls -al

  drwxr-xr-x 1 User 197609      0 六月   11 16:38 .git/
  ```
  也可以直接查看目前位置看到自己是否有被加入版本控制
  ```
  User@ASUS MINGW64 /d/test (master)
  ```
  又或者使用 `git status` 這個指令查看，如果是出現以下畫面，這就代表這個檔案有加入 Git 的版本控制內
  ```
  $  git status
  On branch master 
   Your branch is up to date with 'origin/master'. 

  nothing to commit, working tree clean  
  ```
  如果是出現以下畫面，則代表這個檔案尚未加入 Git 的版本控制內，記得輸入 `git init` 加入版本控制
  ```
  $ git status
  fatal: not a git repository (or any of the parent directories): .git
  ```
---
  3. 這邊先介紹一個重要的概念，在 Git 中可分為「Untracked」、「Staged」、「Repository」三個區塊，能透過不同的指令，移動資料前往不同的區塊

  ![](https://gitbook.tw/images/tw/using-git/working-staging-and-repository/all-states.png)

  假設我的檔案內又 `note.txt`、`test`、`code.js` 三個檔案，先輸入 `git status` 查看
  ```
  $ git status
  On branch master //目前在 master 這個 branch

  No commits yet  //還沒有 commit 檔案

  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          test
          code.js
          note.txt

  nothing added to commit but untracked files present (use "git add" to track)
  ```
  先輸入 `git add note.txt`，在輸入 `git status`查看，就會呈現以下畫面
  ```
  $ git status
  On branch master

  No commits yet

  Changes to be committed:
   (use "git rm --cached <file>..." to unstage)
          new file:   note.txt

  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          test
          code.js
  ```
  如果一次將所有檔案加入 Staged 區塊，可以輸入 `git add .`，讓我們再查看一次，就可以發現，所有的檔案都已經加入 Staged 區塊了
  ```
  $ git status
  On branch master

  No commits yet

  Changes to be committed:
    (use "git rm --cached <file>..." to unstage)
         new file:   test
         new file:   code.js
         new file:   note.txt
  ```
  如果需要將某個檔案移動到 Untracked 的話，可以利用提示區所給的指令 `git rm --cached <file>` 將檔案移回 Untracked 區塊

  例如我輸入 `git rm --cached text`，再查看一次，可以看到 test 檔案就被移回 Untracked 區塊了
  ```
  $ git status
  On branch master

  No commits yet

  Changes to be committed:
      (use "git rm --cached <file>..." to unstage)
          new file:   code.js
          new file:   note.txt

  Untracked files:
     (use "git add <file>..." to include in what will be committed)
          test
  ```
---
4. 再來是將 Staged 區塊的檔案移至 Repository區塊，這時就需要輸入 `git commit -m "first commit"`，再查看一次
  ```
  $ git status
  On branch master
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
          test

  nothing added to commit but untracked files present (use "git add" to track)

  ```
  我們也可以透過 `git log` 指令，查看剛剛 commit 的紀錄
  ```
  $ git log
  commit 9e86d29a102a3e37710a046a87a2fff1665a5eed (HEAD -> master)
  Author: small_leaf <hh741456963@gmail.com>
  Date:   Thu Jun 11 19:41:18 2020 +0800

      first commit

  ```
---
  5. 如果想回到上一個 commit 的話，可以輸入 `git checkout <commit 的編號>` 
     
     首先先輸入 `git log` 查看先前 commit 的紀錄我想回到
  
  ```
  $ git log
  commit 49b9fe1806d7a14834add5396aa95ff64b12ccd3 (HEAD -> master)
  Author: small_leaf <hh741456963@gmail.com>
  Date:   Thu Jun 11 19:51:36 2020 +0800

      add 123

  commit 9e86d29a102a3e37710a046a87a2fff1665a5eed
  Author: small_leaf <hh741456963@gmail.com>
  Date:   Thu Jun 11 19:41:18 2020 +0800

    first commit
  ```
  例如我想回到 first commit，就可以輸入 `git checkout 9e86d29a102a3e37710a046a87a2fff1665a5eed`，這樣就可以回到 first commit 的時間點了
  ```
  $ git checkout 9e86d29a102a3e37710a046a87a2fff1665a5eed

  ```
---
  6. 如果有不想被 commit 的檔案，可以放進 `.gitignore` 來，這樣就算這個檔案被 commit 了，Git 也會自動忽略 .gitignore 
  
  讓我們先輸入 `touch .gitignore` 這個指令創建 .gitignore，接著輸入 `vim .gitignore` 編輯 .gitignore 
  ```
  $ touch .gitignore
  
  $ vim .gitignore
  
  ```
  在裡面輸入 test 完後，之後就算這個檔案被 commit 了，Git 也會自動忽略 .gitignore 

---
ok，以上就是單人操作 Git 的基本指令啦！

  
  
