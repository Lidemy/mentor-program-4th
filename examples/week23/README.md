# 注意事項

提示：在寫完作業之後看效果最佳，沒寫作業前請不要看

## 有關 Redux

簡單再來講一下 Redux 是什麼，它其實就是另外一個存放 state 的地方。

為什麼 React component 已經可以存了，卻還要另一個地方呢？因為有些 state 你不知道要放在哪個 component 底下，好像放哪裡都很奇怪，例如說一些 global 的 state。

這時候 Redux 就是一個可以讓你放這些 state 的地方。在 Redux 的運作模式裡面，你要改變 state 就要 dispatch 一個 action，action 到 reducer 之後會產生新的 state，就把 state 改變了。

然後 react-redux 就是把 Redux 的 state 給自動綁定到 component 的 props，也順便把 dispatch 一起傳進去，把 React 跟 Redux 給綁在一起，這樣才能使用。

## 好文推薦

1. [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

另外 Redux 官方文件真的很讚，把它認真看完你對 Redux 的理解會超越我（或是差我一點點啦）

再來推薦一個必看的，叫做 [Redux Style Guide](https://redux.js.org/style-guide/style-guide)，會釐清很多你對 redux 的疑惑，如果想看中文版的話這邊有：

1. [Redux Style Guide (中文翻譯) — Part 1](https://medium.com/@a401120174/tr-85e00315cd73)
2. [Redux Style Guide (中文翻譯) — Part 2](https://medium.com/@a401120174/redux-%E5%AE%98%E6%96%B9%E9%A2%A8%E6%A0%BC%E6%8C%87%E5%8D%97-%E8%AD%AF-part-2-a438fb544b61)

再推薦一篇：[Blogged Answers: A (Mostly) Complete Guide to React Rendering Behavior](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
