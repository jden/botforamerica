// for great merit! thanks wraithan

module.exports = function (bot) {
  bot.hear(/^!m ?(.*)/, function (msg) {

    var name = msg.match[1]
    name = name.trim()
    if (name === '') {
      name = msg.message.room
    }


    msg.send('You\'re doing great work, ' + name + '!')
  })
}
