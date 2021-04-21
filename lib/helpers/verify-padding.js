/**
 * @param {string} base32
 * @returns {boolean} - A boolean indicating wheter the string is correclty padded.
 */
const verifyPadding = base32 => {
  const pad = (base32.match(/=+$/) || [''])[0].length
  const length = base32.length - pad

  switch (length % 8) {
    case 0:
      return true
    case 2:
      return pad === 6
    case 4:
      return pad === 4
    case 5:
      return pad === 3
    case 7:
      return pad === 1
    default:
      return false
  }
}

module.exports = verifyPadding
