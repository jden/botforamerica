var getCoolFace = require('cool-ascii-faces')

module.exports = function (bot) {
  bot.respond(/how are you/, give411)
  bot.respond(/sup/, give411)
  bot.respond(/what\'?s up/, give411)

  function give411(msg) {
    msg.send(getCoolFace())
  }
}
