const getCharCode = require('./get-char-code')
const padBase32 = require('./pad-base32')

/**
 * @param {string} input - The input string to encode.
 * @param {string} table - The base32 encoding table to use for the encoding.
 * @returns {string} - A base32 encoded string.
 */
const encode = (input, table) => {
  const length = input.length
  let i = 0
  let base32 = ''

  while (i < length) {
    // Second 20 bits consists of the 1st and 2 byte plus the high 4 bits from the third byte.
    let a = (getCharCode(input, i++) << 12) | (getCharCode(input, i++) << 4)

    // The third byte.
    const split = getCharCode(input, i++)
    // Hight 4 bits.
    const high = split >> 4
    // Low 4 bits.
    const low = split & 0xf

    a |= high

    // Second 20 bits consists of the 4th and 5th byte plus the low 4 bits from the third byte.
    const b = (low << 16) | (getCharCode(input, i++) << 8) | getCharCode(input, i++)

    // console.log(a.toString(2), b.toString(2))

    base32 +=
      table[(a >>> 15) & 31] +
      table[(a >>> 10) & 31] +
      table[(a >>> 5) & 31] +
      table[a & 31] +
      table[(b >>> 15) & 31] +
      table[(b >>> 10) & 31] +
      table[(b >>> 5) & 31] +
      table[b & 31]
  }

  return padBase32(base32, length)
}

module.exports = encode
