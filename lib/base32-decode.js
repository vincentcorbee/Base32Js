const { decode } = require('./helpers/')
const { base32Table } = require('./tables/')

/**
 * @param {string|Buffer} input - The base32 source to decode.
 * @returns {string} - A base32 decoded string.
 */
const base32Dencode = input => decode(input, base32Table)

module.exports = base32Dencode
