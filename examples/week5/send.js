const mailgun = require("mailgun-js");
const fs = require('fs');
const DOMAIN = 'YOUR_DOMAIN';
const api_key = 'YOUR_APIKEY'
const mg = mailgun({
  apiKey: api_key, domain: DOMAIN
});

const data = fs.readFileSync('./email.txt', 'utf8')
const emails = data.split('\n')
  .filter(data => data !== '')
  .map(data => {
    let temp = data.split(' ')
    return {
      to: temp[0],
      name: temp[1]
    }
  })

const subjectTemplate = `Long time no see, {{name}}!`

const messageTemplate = `
  Hello,  {{name}}
  How are you today?
  https://google.com
`

sendEmailIndex(0)

// 我要寄給 emails[index] 的人
function sendEmailIndex(index) {
  if (emails.length <= index) return
  let {to, name} = emails[index]
  console.log('sending email to', to)
  send(
    to,
    subjectTemplate.replace('{{name}}', name),
    messageTemplate.replace('{{name}}', name),
    function(err, body) {
      if (err) {
        console.log('QQ', err)
        return
      }
      console.log(body)
      sendEmailIndex(index + 1)
    }
  )
}

function send(to, subject, text, cb) {
  const data = {
    from: 'Excited User <mailgun@test.mailgun.org>',
    to,
    subject,
    text
  };
  mg.messages().send(data, function (error, body) {
    cb(error, body)
  });
}