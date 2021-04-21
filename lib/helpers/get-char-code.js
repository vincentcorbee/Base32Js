const verifyInRange = require('./verify-in-range')

/**
 * @param {string} input - The source string.
 * @param {number} index - Index to get the char code from.
 * @returns {number} - The character code or zero.
 */
const getCharCode = (input, index) => verifyInRange(input.charCodeAt(index) || 0)

module.exports = getCharCode
