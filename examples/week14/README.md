# Week14 自我檢討

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 部署

本週重點就只有這一個而已，但這當然也不是件容易的事。

這一期幸運的地方在前一期有學長姐留下的筆記，所以很多時候都跟著做就好。但你要知道那是前人血淚的結晶（？），他們也是部署過很多次，崩潰很多次之後才記起來的。

如果你這週是順利的，未來某一天你一樣會經歷這個崩潰的過程。如果你這週本來就很崩潰，放心，以後還有更多讓你崩潰的事。

另外，這週最常見的問題就是防火牆的設定，你東西連不進去基本上都是防火牆的問題。防火牆有兩個，一個是你主機上的，一個是你用的雲服務上面的，請確保兩個防火牆都有設定好，應該就沒問題了。

附上第四期同學做得很完整的筆記：[在 AWS 上面部署 LEMP server](https://github.com/Lidemy/mentor-program-4th-Lauviah0622/blob/master/homeworks/week14/hw2.md)

## DNS

之前在第四週有提過 DNS 但其實講的滿淺的，事實上 DNS server 其實是有分層級的，大家可以參考底下幾篇文章：

1. [DNS原理总结及其解析过程详解](https://blog.csdn.net/qq_32642107/article/details/102665148)
2. [金三銀四網絡面經之 DNS 詳解！](https://www.chainnews.com/zh-hant/articles/998094400229.htm)
3. [How DNS Works – the Domain Name System (Part One)](https://cloudacademy.com/blog/how-dns-works/)
4. [How DNS works（可愛的漫畫）](https://howdns.works/ep5/)
5. [What happens when you update your DNS?（這篇比較偏技術）](https://jvns.ca/blog/how-updating-dns-works/)

## 安全性

提醒一下各位同學，week14 架的主機要注意一下密碼的安全性

有同學用一個滿好猜的密碼，然後發現被駭客入侵了！你可能會想說：你一台這麼小的主機，怎麼會被入侵？

但其實駭客根本也不知道你是誰，應該是他們有做機器人去掃某些 ip 段，然後去試一些知名的服務（例如說 mysql），發現有開就再測測看常見密碼，試出來連得進去以後就自動把你資料庫備份，然後把原本的刪掉，並且留下勒索訊息

這一切都是自動化的，所以他們連你是誰都不知道XD

防範方法有幾個，第一個就是資料庫帳號密碼不要設太弱  
第二個就是防火牆開好開滿，你可以設定只有 localhost 可以連到資料庫，這樣外面就都進不去，你甚至連 3306 port 都可以不打開

那這樣我們自己要怎麼看資料庫的內容呢？

有一種技術叫做 SSH Tunnel，就跟之前我在 week16 提過的 port forwarding 很像，你可以把遠端主機的 3306 透過 ssh tunnel 對應到自己電腦的 3306，所以你連 localhost:3306 就等於是連你遠端主機

然後駭客沒有你連 ssh 的那個 key，所以也連不進去，因此就會是安全的

ssh tunnel 參考資料：[[教學] 透過 SSH Tunnel 將伺服器內部服務綁定到本機電腦上 | 辛比誌](https://xenby.com/b/269-%E6%95%99%E5%AD%B8-%E9%80%8F%E9%81%8E-ssh-tunnel-%E5%B0%87%E4%BC%BA%E6%9C%8D%E5%99%A8%E5%85%A7%E9%83%A8%E6%9C%8D%E5%8B%99%E7%B6%81%E5%AE%9A%E5%88%B0%E6%9C%AC%E6%A9%9F%E9%9B%BB%E8%85%A6%E4%B8%8A)

然後如果你想反其道而行，試試看被駭客入侵的感覺，可以把資料庫帳號密碼設成什麼 test 或是 root, admin, guest 這種常見的，然後等個一兩週看看，就可以體會到這是什麼感覺

## 主機連不上

先確認幾件事情：

1. AWS 上的 security group 22 port 有開
2. AWS 主機預設 IP 是會換的，有設定可以調整，讓 IP 不會換
3. 在 AWS 後台有其他方式可以連進去，可參考：[Open Terminal Sessions on EC2 Instances in your Web Browser](https://trevorsullivan.net/2018/10/16/open-terminal-sessions-on-ec2-instances-in-your-web-browser/) 跟 [SSH to AWS EC2 instance using the web browser](https://medium.com/@michael.niedermayr/ssh-to-aws-ec2-instance-using-the-web-browser-786bd4d2663b)
4. 連進去主機後確認主機上的防火牆 22 port 有開：`sudo ufw status`
5. 確認 ssh 服務有開：`sudo netstat -tulpn | grep :22`

