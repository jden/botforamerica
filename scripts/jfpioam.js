var sarcasticMessages = [
  'JFPIOAM!',
  'put a map on it!',
  'remember, this is an exercise in adhoc-ness!',
  'there\s a fine line between effective community organizing and stalking'
]

module.exports = function (robot) {
  
  /* respond to existential queries with a direct,
   * actionable tactic!
   */
  robot.hear(/what should i do\??/i, sarcasticReply)
  robot.hear(/what do\??/i, sarcasticReply)

  function sarcasticReply(msg) {
    msg.reply(random(sarcasticMessages))
  }

  function random(arr) {
    return arr[Math.round(Math.random()*(arr.length-1))]
  }

}
