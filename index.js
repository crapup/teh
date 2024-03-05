const count = require('text-count');

function teh() {
  const text = "T E H"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = Teh
