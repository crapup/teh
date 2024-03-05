const count = require('text-count');

function crapup() {
  const text = "T E H"
  return {
    text,
    length: count.charCount(text)
  }
}


module.exports = crapup
