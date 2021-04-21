/**
 * @param {string} base32 - A base32 encoded string.
 * @param {number} length - The lenght of the source string.
 * @returns {string} - A (padded) base32 encoded string.
 */
const padBase32 = (base32, length) => {
  switch (length % 5) {
    case 0:
      return base32
    case 1:
      return `${base32.substring(0, base32.length - 6)}======`
    case 2:
      return `${base32.substring(0, base32.length - 4)}====`
    case 3:
      return `${base32.substring(0, base32.length - 3)}===`
    case 4:
      return `${base32.substring(0, base32.length - 1)}=`
  }
}

module.exports = padBase32
