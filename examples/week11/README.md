# Week11 作業自我檢討

## 提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## header 跟你想的不一樣（2020-10-25 更新）

在 PHP 裡面，我們會用：

``` php
header('Location: ./index.php');
```

把使用者導去其他地方，背後原理就是之前第四週講過的 HTTP status code，這樣的寫法會回一個 302 status code，然後帶上一個 response header 叫做：`Location: ./index.php`，瀏覽器收到這個 response 之後，就把使用者導過去，然後再發一個 request 去要求新頁面的資料。

但要注意的事情是，這個並沒有中斷程式的執行，例如說以下程式碼：

``` php
header('Location: ./index.php');
echo 123;
```

你用瀏覽器執行是看不到東西的，因為你換頁了，所以瀏覽器把之前頁面的 response 丟掉了不讓你看，但如果你自己用 curl 或是其他方法去試的話，會發現 response body 是有這個 123 的。

總之呢，header 並不會中斷程式執行，底下的東西還是會繼續跑，這點應該跟你想的不一樣。所以請確保 header() 後面都有 exit 或是 die，確保有結束程式的執行。

## 資安意識再度補充（2020-09-05 更新）

大家在寫後端的時候，一定要有兩個認知：

1. 你要預設你的程式碼已經被駭客看光光了
2. 不要存著僥倖心態

這週的作業有很多人寫到管理後台的時候，相關的操作都沒有做權限檢查，背後的心理應該是：「這頁面只有管理員知道，不需要做吧」

但如果你心中存有上面認知的第一點，你就會知道這是要做的。因為你不應該假設駭客看不到你的程式碼，正好相反，你應該假設程式碼被看光了。在程式碼被看光的前提下維持安全性，這才是最重要的，也是大家一定要有的一個心態。

所以後台的頁面依然要做權限檢查，要檢查現在的使用者是管理員才能進行操作，否則請把 user 導去其他地方。

再來，第二點，不要存著僥倖心態。

承上，管理員頁面有些人並沒有做 escape，所以身為一個惡意使用者，我可以註冊一個帳號是`<script>alert(1)</script`，一般使用者不會有事，但如果管理員打開後台管理頁面，就被 XSS 了！

因此，該做的地方都要做。或如果你不知道哪邊要做，你就全部都做就不會有事了。

這邊其實也是我教學裡面沒有示範好的地方，應該全部輸出資料庫內容的地方都用 escape 會比較好。為什麼呢？因為漏洞是可以結合的。

舉例來說，你文章的建立時間沒有 escape，因為你預期他只會是一個時間，但駭客找到了一個 SQL Injection 漏洞，把文章時間改成一個惡意的 XSS 字串，你的網站就從 SQL Injection 演變成 SQL Injection + XSS 了。

最後，使用 GET 傳遞的參數要特別注意，有些同學的程式碼會直接把 GET 的東西印到畫面上，這是非常危險的，因為這就是 reflected XSS，使用者點了某個網址之後就會中 XSS，也是 XSS 的一種。

大概就是這樣，如果不清楚的可以去看其他同學的作業，有很多人都有被我抓到錯誤XD

## prepare statement

大家要注意到 prepare statement 其實不是 PHP 的東西，是資料庫的。是你在 PHP 呼叫以後他幫你去告訴資料庫要做這件事。

所以只是上面的一層包裝而已，不要以為這是 PHP 的東西了。

詳情可以參考：[Prepared Statements ](https://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php)：

> The MySQL database supports prepared statements. A prepared statement or a parameterized statement is used to execute the same statement repeatedly with high efficiency.

而真正的 MySQL prepare statement 是這樣用的：[13.5 Prepared Statements](https://dev.mysql.com/doc/refman/8.0/en/sql-prepared-statements.html)

## 雜湊跟加密的區別

雜湊不可逆，加密可逆，叫做解密。

雜湊為什麼不可逆？你這樣想就很簡單了：因為無限的輸出對應到有限的輸入，就代表一定會有很多個 input 對應到同一個 output（就叫做碰撞），那你從同一個 output 怎麼可能知道 input 是哪一個？這是個很簡單的邏輯問題。

這樣大家就知道為什麼存密碼要用雜湊了，就不會有人知道你密碼原來是什麼。

但雜湊是不是絕對安全？當然不是，有一種最古老但也最有用的方法，叫做暴力破解。

今天你行李箱的數字鎖忘記密碼了，怎麼辦？有些人會 999 種組合都試過，雖然費時但有效。

破解雜湊也是類似的，假如我把 0000~9999 這一萬種組合都事先跑過一遍雜湊並把結果存入資料庫，我就有著這中間的對應關係。當我看見某個雜湊過後的值，就可以來這邊查表，如果有的話我就知道 input 是什麼了。

所以雜湊唯一能破解的就是這樣暴力破解而已，事先存好結果然後查表。若是六位數字的密碼，大小寫加數字就是 62 種組合，62^6 就是五百億種組合了。要是先把五百億種組合跑出來才能查到結果。

而且，為了增加密碼的長度，有一種方法很可愛，叫做「加鹽」（salting），會幫每一個 user 產生一個不同的鹽巴，例如說十六位的英數混合好了：`ab48fogir38e9fjl`，然後我的密碼是 abc123，那存在資料庫裡的密碼就是 `hash(ab48fogir38e9fjlabc123)`，這樣就需要先算好 22 位數的組合才有可能回推出原文是什麼。

難嗎？難。

更多相關資訊請參考：

1. [[資訊安全] 密碼存明碼，怎麼不直接去裸奔算了？淺談 Hash , 用雜湊保護密碼](https://medium.com/@brad61517/%E8%B3%87%E8%A8%8A%E5%AE%89%E5%85%A8-%E5%AF%86%E7%A2%BC%E5%AD%98%E6%98%8E%E7%A2%BC-%E6%80%8E%E9%BA%BC%E4%B8%8D%E7%9B%B4%E6%8E%A5%E5%8E%BB%E8%A3%B8%E5%A5%94%E7%AE%97%E4%BA%86-%E6%B7%BA%E8%AB%87-hash-%E7%94%A8%E9%9B%9C%E6%B9%8A%E4%BF%9D%E8%AD%B7%E5%AF%86%E7%A2%BC-d561ad2a7d84)
2. [一次搞懂密碼學中的三兄弟 — Encode、Encrypt 跟 Hash](https://medium.com/starbugs/what-are-encoding-encrypt-and-hashing-4b03d40e7b0c)

## 資訊安全的意識

這一週的重點就只有這個，沒了。

但光是這一個重點就可以把一大堆人打趴了。

資訊安全意識代表的是你在寫 code 的時候會去注意自己的 code 有沒有一些會被攻擊的地方，而這之中最最最常見的就是在處理與使用者相關輸入的時候，都要特別小心。

只要你能有這個意識，就能防止大多數的攻擊；但如果沒有的話...呵呵。

本週最常見的三個錯誤：

1. 沒有把所有用到 SQL 的地方都改成 prepared statement
2. 忘了防止使用者暱稱的 XSS
3. 沒有做好權限管理，可以刪除與編輯任意文章或是仿冒身份發文

以下直接來看幾個 case：

``` php
<?php 
    require_once('./conn.php'); 
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id;
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

問題是什麼？

第一個問題是沒有判斷權限，這邊只接收一個 GET 的參數然後就把留言給刪了。今天儘管我沒有登入，我還是可以刪除留言。

改一下之後變成這樣：

``` php
<?php 
    require_once('./conn.php'); 
    require_once('./check_login.php');
    if (!$username) {
        die('not login');
    }
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id;
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

好，這樣沒有登入的話就沒辦法刪除留言了。

夠了嗎？當然不夠，雖然有檢查登入但沒有檢查作者，意思就是我可以刪除任何人的留言，因為你後端沒做檢查。所以後端要記得檢查「這個留言是不是他的」，不然攻擊者就可以刪除任何人的留言了。

這邊最簡單的方法就是直接改 SQL query：

``` php
<?php 
    require_once('./conn.php'); 
    require_once('./check_login.php');
    if (!$username) {
        die('not login');
    }
    $id = $_GET['id'];
    $sql = "DELETE FROM  comment where id = ".$id." AND username='" + $username + "'";
    if ($conn->query($sql)) {
        header("Location: ./index.php");
    } else {
        die("failed.");
    }
?>
```

要同時符合文章 id 跟作者，就能確保只有作者本人可以刪到文章。

這樣夠了嗎？還不夠，你忘記 SQL Injection 了嗎？我 username 如果傳一個 `' or '1'='1` 之類的，SQL query 就變成 `DELETE FROM comment where id = xx AND username='' or '1'='1'`，就一樣可以刪除任何文章了。

所以要把上面的 query 換成 prepared statement，這樣才沒問題。

接著來看第二個 case，cookie 裡面存的是這一週作業要大家實作的 certificate：

``` php
<?php 
    include_once('./conn.php');
    if(isset($_COOKIE["user"]) && !empty($_COOKIE["user"])){
        $token = $_COOKIE["user"];
        $sql= 
        "SELECT u.nickname ,c.id, c.username 
        FROM certificate as c
        JOIN users as u
        ON c.username = u.username 
        where c.id = '$token'";
        $result = $conn->query($sql);
        if(!$result || $result->num_rows <=0){
            $user = null;
        }else {
            $row = $result->fetch_assoc();
            $user = $row['nickname'];
        }
    }else{
        $user = null;
    }

    function isLogin() {
        if (isset($_COOKIE["user"]) && !empty($_COOKIE["user"])) {
            return true;
        } else{
            return false;
        }
    }
?>
```

第一個問題是什麼？

跟上面一樣，SQL Injection，我如果改 Cookie 的值，就可以去操縱裡面那一個 query，就可以用任何人的身份登入了。

第二個問題跟資安無關，是邏輯問題。上面是用 cookie 存不存在來判斷是否登入，但這是錯的。如果我 cookie 隨便放個 123，我也叫登入嗎？當然不是，登入代表的是我要有一個合法的帳號才叫登入。

所以正確的檢驗方法是拿 cookie 裡面的值去 certificates 裡面查詢，有查到資料才代表我真的有登入。不然通行證機制都白做了。

在這邊提醒大家兩件事：

1. 永遠記得權限驗證，做任何操作時都要想一下有沒有人可以繞過權限驗證（或你根本忘記做權限驗證）
2. 永遠使用 prepared statement。你可能會說：「可是有些地方沒有參數，或有些地方參數是我自己能控制的」，對，這些地方可能不會有 SQL Injection 的風險，但第一如果你之後改那段 code 呢？第二，你怎麼知道那邊不會有？

上面舉的那些範例也可能是自認為沒有 SQL Injection 的風險，但這才是最致命的地方。不要為了偷懶用回比較方便的 query，只要有用到 SQL 的地方，全部都用 prepared statement 才是正解。

補充：

XSS 的部分除了留言內容，使用者暱稱也要防啊！不確定的話你就每個輸出的地方都 escape 就好，千萬不要自作聰明！

另外，這邊有 SQL Injection 的真實範例：https://www.youtube.com/watch?v=ABi1jUbDzPg&feature=youtu.be

## 用最適合的東西

如果有 a 可以用，就沒必要寫一個元素加上 onclick listener，然後再使用 window.location 去導向。a 這個元素本來就是要讓你導向的，何必多此一舉？

還有一個同學寫了一個滿有趣的機制，例如說編輯留言好了，到編輯留言頁面時他先把留言 id 存在 cookie 裡面，編輯完按下 submit 的時候導到 handle_edit.php，後端直接從 cookie 把留言 id 拿出來。

這樣帶資料當然也可以，但不是好的做法。

那什麼是好的做法？就是直接用 GET 或是 POST，把留言 id 放在表單裡面一起帶過去就好，沒必要直接存在 cookie。

## Early return

大家之前在寫 code 的時候，應該有看過一個 eslint 的錯誤：

``` js
function test(a) {
  if (a === '123') {
    return true
  } else {
    return false
  }
}
```

會給你一個 [Disallow return before else (no-else-return)](https://eslint.org/docs/rules/no-else-return) 的錯誤。

為什麼呢？因為上面的程式碼你仔細想一下，會發現 else 完全沒必要。

如果條件成立，就 return 了，函式就結束了。如果條件不成立，就要執行 `return false` 那行。那不就寫成下面這樣就好？

``` js
function test(a) {
  if (a === '123') {
    return true
  }
  return false
}
```

執行出來的結果跟順序是完全一樣的，所以才會跟你說 else 完全沒必要。

而今天要講的 early return 原理類似，請大家看一下以下程式碼：

``` php
$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
$stmt = $conn->stmt_init();
if ($stmt->prepare($sql)) {
  $stmt->bind_param("s", $account);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if ($result->num_rows > 0) {
    if (password_verify($password, $row['password'])) {
      getSessionId($conn, $account);
      setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
      echo "<script>
          alert('登入成功！');
          location.href = './index.php';
        </script>";
    } else {
      header("Location: ./login.php?error=pwderror");
      exit();
    }
  } else {
    header("Location: ./login.php?error=othererror");
    exit();
  }
  
  $stmt->close();
  $conn->close();
} 
```

你會看到因為狀況很多種，所以需要有很多 if 跟 else。但你可以注意到一個特性，就是 else 裡面的東西通常執行完畢就 exit 了，不會再執行其他程式碼。

這時候就可以利用這個特性，把條件「反過來寫」，先寫說如果不符合狀況就怎樣，可以少掉很多巢狀，可以參考底下程式碼：

``` php
$sql = "SELECT * FROM ChihYang41_users WHERE account = ?";
$stmt = $conn->stmt_init();

if (!$stmt->prepare($sql)) {
  exit();
}

$stmt->bind_param("s", $account);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();

if ($result->num_rows == 0) {
  header("Location: ./login.php?error=othererror");
  exit();
}

if (!password_verify($password, $row['password'])) {
  header("Location: ./login.php?error=pwderror");
  exit();
}

getSessionId($conn, $account);
setcookie("session_id", setSessionId($conn, $account), time()+3600*24);
echo "<script>
    alert('登入成功！');
    location.href = './index.php';
  </script>";
  
$stmt->close();
$conn->close();
```

是不是超級神奇！

原本三層 if 的程式碼，在換個順序判斷之後就改成只有一層，程式碼看起來乾淨很多。這個就叫做 early return，能早點 return（在這情形下是 exit，但也是離開）就早點，就可以避免掉無謂的 else 判斷。

（上面 code 來自同學的真實案例，可參考：https://github.com/Lidemy/mentor-program-3rd-ChihYang41/pull/28/files/c09007e1b0c8f2f54662cbbb7e1bb90eebcd6e2b ）

