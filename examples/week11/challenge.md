# Week11 作業挑戰題

在 hw1 的延伸挑戰題中我們需要更強的身份系統，這就是考驗你 table design 功力的時刻了。

在 users 上面一樣會放一個 roleId，但重點是你必須引進一個新的概念叫做 permissions：

| id | entity  | action     |
|----|---------|------------|
| 1  | comment | view       |
| 2  | comment | delete     |
| 3  | comment | delete_all |
| 4  | comment | update     |
| 5  | comment | update_all |
| 6  | comment | create     |

裡面每一個 item 都表示著一個 entity 的行為。然後還要另外開一個 table 叫做 roles，儲存每一個 role：

| id | name  |
|----|---------|
| 1  | admin |
| 2  | editor |
| 3  | viewer |

接著你要有另一個 table 叫做 roles_permissions：

| id |  role_id  | permission_id     |
|----|---------|------------|
| 1  | 1 | 1       |
| 2  | 1 | 2     |
| 3  | 1 | 3 |
| 4  | 2 | 1     |
| 5  | 2 | 6 |
| 6  | 4 | 1     |

所以要看一個 user 的權限，你就可以從他的 role id 去撈這個 role 擁有的 permission ids，例如說 role_id 1 有的權限就是 1, 2, 3，代表著瀏覽評論、刪除評論跟刪除所有評論。

而 role_id 2 有的權限是 1, 6，代表觀看文章以及新增文章。

現在已經可以知道這些 role 有哪些權限了，接著後端在做的時候，可以先把 permission table 整個撈出來，然後設定成一個變數，目標是讓 `$permission['comment']['delete']` 的值是 2，這樣就可以在相關的檔案裡面去做權限判斷了。

新增 role 的時候就是有一個地方可以輸入 role 的名稱，然後可以勾選需要哪些權限，再把這些東西寫進 roles 跟 roles_permissions 就好。
