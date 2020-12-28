/*
先串API取得前五名熱門的遊戲
手動新增前五名熱門的遊戲HTML <li> 標籤
放回 <ul> 標籤上
利用response回傳第一名的遊戲名稱去呼叫getStreams
*/ 

const CLIENT_Id = 't1i56f8yeobnh6vqwymu1jo3tkhtlp';
let API_Url = "https://api.twitch.tv/kraken";
let streams_limit = 20;
let current_game = '';

function getTopGames () {
  var request = new XMLHttpRequest();
  request.open('GET', `${API_Url}/games/top?limit=5`, true);
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.setRequestHeader('Client-ID', CLIENT_Id);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var result = JSON.parse(request.response);
      //console.log(result);
      for(let i=0; i<result.top.length; i++) {
        //console.log(result);
        let element = document.createElement('li');
        element.innerHTML = `<a>${result.top[i].game.name}</a>`
        document.querySelector('.nav_title_list').appendChild(element);
      }
      getStreams(result.top[0].game.name)
    }  
  };
  request.send();
}

getTopGames()


/*
監聽畫面前五名遊戲
並限制每次產生實況內容為20個
利用點擊事件拿到的遊戲名稱去呼叫getStreams
e.target.text =>表示拿到的遊戲名稱
*/
document.querySelector('.nav_title_list').addEventListener('click', (e) => {
  if(e.target.text){
    //console.log(e.target.text);
    streams_limit = 20 ;
    getStreams(e.target.text);
  }
});

/*
getStreams函式帶入參數name
name =>表示為上面傳進來的遊戲名稱
串API取得目前的遊戲
手動新增實況內容HTML <li> 標籤
放回 <ul> 標籤上
*/

function getStreams(name) {
  current_game = name ;
  //抓取每個遊戲的名稱顯示在畫面背景中間
  document.querySelector('h1').innerText = `${name}`;
  //抓取當遊戲前20個的實況內容
  const request2 = new XMLHttpRequest();
  let topGameUrl2 = `${API_Url}/streams?game=${encodeURIComponent(name)}&limit=${streams_limit}`;
  request2.open('GET', topGameUrl2, true);
  request2.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request2.setRequestHeader('Client-ID', CLIENT_Id);
  request2.send();
  request2.onload = function() {
    if (request2.status >= 200 && request2.status < 400) {
      var result = JSON.parse(request2.response);
      document.querySelector('.live_streams').innerHTML = ''
      //console.log(result)
      for(let i=0; i<result.streams.length; i++) {
        console.log(result);
        let element_li = document.createElement('li');
        element_li.innerHTML = `
          <li class='live_content'>
            <div class='live_shadow'>
              <a href='${result.streams[i].channel.url}'>
                <div class='live_content_top' style="background: url(${result.streams[i].preview.large}) center/cover no-repeat;">
                  <div class='flex'>
                    <span class='live_views'></span>
                    <p>${result.streams[i].viewers}</p>
                  </div>
                </div>
              </a>
              <div class='live_content_bottom'>
                <a href='${result.streams[i].channel.url}'><div class='streamer_avatar' style="background: url(${result.streams[i].channel.logo}) center/cover no-repeat;"></div></a>
                <div class='streamer_detail'>
                  <p class='live_topic'><a href='${result.streams[i].channel.url}'>${result.streams[i].channel.display_name}</a></p>
                  <p class='streamer_name'><a href='${result.streams[i].channel.url}'>${result.streams[i].channel.name}</a></p>
                </div>
              </div>
            </div>
          </li>
        `
        document.querySelector('.live_streams').appendChild(element_li);
      }
    }
  }
}

/*
監聽 載入更多按鈕標籤
每按一次載入更多後，每次新增20 個
呼叫 getStreams
*/
document.querySelector('.more_btn').addEventListener('click', (e) => {
  console.log(e.target);
  streams_limit += 20;
  getStreams(current_game);
});


//瀏覽器consolog後，找到該物件或陣列，點右鍵copy pr後，找到該物件或陣列，點右鍵copy property path可快速copy下來，如下:
//大頭貼 streams[0].channel.logo
//觀看人數 streams[0].viewers
//直播主名稱 streams[0].channel.name
//直播影片 streams[0].preview.large
//影片主題名稱 streams[0].channel.display_name
//直播超連結 streams[0].channel.url