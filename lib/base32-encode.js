const { encode } = require('./helpers/')
const { base32Table } = require('./tables/')

/**
 * @param {string|Buffer} input - The source to base32 encode.
 * @returns {string} - A base32 encoded string.
 */
const base32Encode = input => encode(input, base32Table)

module.exports = base32Encode
