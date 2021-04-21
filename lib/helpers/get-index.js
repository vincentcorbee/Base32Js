const verifyEncoding = require('./verify-encoding')

/**
 * @param {string} char - A base32 encoded character.
 * @param {string} table - The base32 encoding table.
 * @returns {number} - A index in the table.
 */
const getIndex = (char, table) =>
  char === '=' ? 0 : table.indexOf(verifyEncoding(char, table))

module.exports = getIndex
