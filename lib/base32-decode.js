const { decode } = require('./helpers/')
const { base32Table } = require('./tables/')

const base32Dencode = input => decode(input, base32Table)

module.exports = base32Dencode
