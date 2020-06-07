var request = require('request')

const url = 'https://pda.5284.gov.taipei/MQS/businfo2.jsp?routename='

function getBusData(number, cb) {
  request(url + number, (err, response) => {
    if (err){
      cb(err)
      return
    }

    cb(null, response.body)
  })
}

getBusData(process.argv[2], (err, html) => {
  if (err) {
    return console.log(err)
  }

  let result = getStopInfo(html)
  console.log(result.join('\n'))
})

function getStopInfo(html) {
  let result = []
  let start = 0
  let end

  while(start >= 0) {
    start = html.indexOf('<tr class="ttego', start + 1)
    end = html.indexOf('</tr>', start)
    let str = html.slice(start, end)
    let data = parseData(str)
    result.push(data.name + ' ' + data.time)
  }
  return result
}

function parseData(str) {
  let firstALeft = str.indexOf('<a')
  let firstARight = str.indexOf('>', firstALeft)
  let firstAclose = str.indexOf('</a>')

  let name = str.slice(firstARight + 1, firstAclose)

  let nowrap = str.indexOf('nowrap>')
  let end = str.indexOf('<', nowrap)
  let time = str.slice(nowrap + 7, end)

  return {
    name,
    time
  }
}
