/**
 * @param {number} code - Character code.
 * @returns {boolean} - Verifies if the character code falls whitin the Latin1 range.
 */
const verifyInRange = code => {
  if (code > 0x0ff) {
    throw new Error(
      'The string to be encoded contains characters outside of the Latin1 range.'
    )
  }

  return code
}

module.exports = verifyInRange
