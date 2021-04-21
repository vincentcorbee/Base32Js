const { encode } = require('./helpers/')
const { base32Table } = require('./tables/')

const base32Encode = input => encode(input, base32Table)

module.exports = base32Encode
