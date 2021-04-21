/**
 * @param {string} char - A base32 encoded character.
 * @param {string} table - The base32 encoding table.
 * @returns {string} - The character if valid else throws an error.
 */
const verifyEncoding = (char, table) => {
  if (table.indexOf(char) > -1) {
    return char
  }

  throw new Error('The string is not correctly encoded.')
}

module.exports = verifyEncoding
