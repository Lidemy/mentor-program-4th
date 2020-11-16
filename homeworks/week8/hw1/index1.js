/*串api => 抽獎按鈕 => 把資料跟標籤結合放到html => 判斷獎項 => 製作重新抽獎的按鈕 */

const obj = {
  first: '恭喜你中頭獎了！日本東京來回雙人遊！',
  second: '二獎！90 吋電視一台！',
  third: '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！',
  none: '銘謝惠顧'
};

function getPrize () {
  var request = new XMLHttpRequest();
  request.open('GET',`https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery`, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var result = JSON.parse(request.responseText)
      //console.log(result)
      if(result.prize === 'FIRST') {
        drawPrize('first',obj.first) 
      } else if(result.prize === 'SECOND') {
        drawPrize('second',obj.second)
      } else if(result.prize === 'THIRD') {
        drawPrize('third',obj.third)
      } else if(result.prize === 'NONE') {
        drawPrize('none',obj.none)
      }
    }else {
      alert('系統不穩定，請再試一次')
    }
  };
  request.send();
}

const lottery_btn = document.querySelector('.lottery_btn');
lottery_btn.addEventListener('click', () => {
  getPrize();
})

function drawPrize (prize, string) {
  const element_section = document.createElement('section');
  // <section></section>
  element_section.classList.add('draw_result',`${prize}`);
  // <section class='draw_result prize'></section>
  element_section.innerHTML = `
  <div class='prize_content'>${string}</div>
  <div>
    <div class='prize_btn'>再抽一次</div>     
  </div>`
  document.querySelector('.place').appendChild(element_section);
  document.querySelector('.init').classList.add('hide');
}

const place = document.querySelector('.place');
place.addEventListener('click',e =>{
  if(e.target.getAttribute('class') === 'prize_btn'){
    window.location.reload();
  }
})

