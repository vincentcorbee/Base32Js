const verifyPadding = require('./verify-padding')
const verifyEncoding = require('./verify-encoding')
const getIndex = require('./get-index')
const getChar = require('./get-char')

/**
 * @param {string} base32 - Base32 encoded string.
 * @param {string} table - The base32 encoding table.
 * @returns {string} - The decoded base32 string.
 */
const decode = (base32, table) => {
  if (!verifyPadding(base32)) {
    throw new Error('The string is not correctly encoded.')
  }

  const length = base32.length
  let i = 0
  let result = ''

  while (i < length) {
    // First 20 bytes
    const a =
      ((table.indexOf(verifyEncoding(base32[i++], table)) & 31) << 15) |
      ((table.indexOf(verifyEncoding(base32[i++], table)) & 31) << 10) |
      ((getIndex(base32[i++], table) & 31) << 5) |
      (getIndex(base32[i++], table) & 31)

    // Second 20 bytes
    const b =
      ((getIndex(base32[i++], table) & 31) << 15) |
      ((getIndex(base32[i++], table) & 31) << 10) |
      ((getIndex(base32[i++], table) & 31) << 5) |
      (getIndex(base32[i++], table) & 31)

    result +=
      getChar((a >>> 12) & 0xff) +
      getChar((a >>> 4) & 0xff) +
      getChar(((a & 0x0f) << 4) | (b >>> 16)) +
      getChar((b >>> 8) & 0xff) +
      getChar(b & 0xff)
  }

  return result
}

module.exports = decode
