## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
<hr>：添加一條水平分隔線
可於 CSS 中設定：width, size, color, align 等屬性
<del>：刪除線標籤
瀏覽器會在輸入的內容上加上刪除線
<ins>：底線標籤
瀏覽器會在輸入的內容下方加上底線
<sub>：下標
瀏覽器會將內容變成下標
<sup>：上標
瀏覽器會將內容變成上標 (像我們平常書寫的幾次方一樣)

## 請問什麼是盒模型（box modal）
可以想像 HTML 的元素是個盒子，藉由調整盒子的各項尺寸，能幫助我們調整元素的大小。
由內至外包含：
content：元素本身
width ：寬度會因為 display 的屬性，預設值會有所差異
display: block ：寬度為 100%
display: inline or inline-block ：寬度會被內容撐開
height：高度沒有設定的話，會被內容撐開
padding：元素與內容的內邊距
border：元素的邊框
margin：元素與外部的外間距
注意:外間距不算在元素裡面

預設為 content-box
元素的實際大小會是 content + padding + border

border-box
元素的實際大小就會是 width 及 height 的值



## 請問 display: inline, block 跟 inline-block 的差別是什麼？

inline 行內元素
常見的 inline 元素有：<span>、<a>、<strong>
會向左邊排列，不會換行、直到排滿才會換行
無法設定 width & height，寬、高會自然被內容撐開
無法設定 上下 margin
inline 元素不該包著 block 元素
總結:
＊會自適應內容大小。
＊不能設定width、height、margin、background-img等。
＊如：a、span、img…

block 塊級元素
常見的 block 元素有：<div>、<h1>、<p>
一個人佔滿一整行
向下排列，會換行
可以設定 width & height
預設寬度會佔滿父容器的 100%、高度會自然被內容撐開
就算「 兩個寬度加起來小於父容器 」的 block 並排，也是會換行
總結:
＊預設會佔滿父元素的寬度，可以設定寬高
＊如：div、p、ul、li、h1、h2…

inline-block 會流動的塊級元素，兼顧 inline 跟 block 的優點
常見的 inline-block 元素有： <bottom>、<input>、<select>
按照畫面的流動，會向左邊排列，一行裡面可以有多個block
可以設定 width & height
預設寬、高會自然被內容撐開
總結:
外在像inline不會換行且會自適應大小，
內在像block可以設定width、height、margin、background-img…等參數。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
參照點：

relative： 元素本身

如果沒有設置偏移量 （ left | top | right | bottom ），則不會有任何改變。
不會影響其他元素：
不管元素本身怎麼偏移，都不會影響到其他元素的定位。

absolute： 往上層找到「 第一個 」非 static 的元素
跳脫原本的流動，定位位置有兩種可能：
找到父層參照點 (relative | absolute | fixed )
找不到父層參照點，意指上層的所有元素都以 static 定位，參照點則會是 <body> 元素。
如果沒設座標，預設位置為： left: 0; top: 0;（ 即父層參照點的左上角 ）
會影響其他元素：
假設 A、B、C 是三個同級元素、且定位是 static 或 relative，當 B 設置 position: absolute，會影響到 C 元素的流動（ C 會補上原本 B 的位置 ）。
應用：
某元素要定位於右上角： relative & absolute 組合技
最常見的狀況應該是當某個元素要定位在「 右上角 」，通常是按鈕。 只要設置父容器為 relative，定位子元素為 absolute。

fixed： viewpoint，指瀏覽器可視範圍
跳脫原本的流動，直接固定在相對於 viewpoint 的某個位置
不會隨著滑動頁面而移動位置
一定要設定座標才有作用
例如:一般網站的廣告
水平 & 垂直 方向至少要設定一個 top | bottom & left | right
會影響其他元素：
假設 A、B、C 是三個同級元素、且定位是 static 或 relative，當 B 設置 position: fixed，會影響到 C 元素的流動（ C 會補上原本 B 的位置 ）。
應用：
選單固定於上方： fixed 的主場
這就很簡單了，可以使用 fixed 固定於上方（ 或 sticky 也可以 ）

新屬性 sticky： viewpoint
當視窗滾到該元素時，才固定在相對於 viewpoint 的某個位置，一直到父容器離開畫面為止
一定要設定座標才有作用
上下滾動要設定 top | bottom （ 左右是根據原本的位置，無法更改 ）
左右滾動要設定 left | right（ 上下是根據原本的位置，無法更改 ）
不會影響其他元素：
只有當視窗滾到該元素時，才會讓該元素位置改變，但同時並不會影響到其他元素。
可以想成是 static 跟 fixed 的混合版
視窗滾到該元素前： static
視窗滾到該元素後： fixed
應用：
當視窗滾到某段落、段落標題固定於上方： 新功能 sticky
