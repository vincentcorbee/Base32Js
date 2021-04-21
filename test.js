const assert = require('assert').strict
const base32 = require('.')

assert.equal(base32.base32Encode(''), '')
assert.equal(base32.base32Encode('f'), 'MY======')
assert.equal(base32.base32Encode('fo'), 'MZXQ====')
assert.equal(base32.base32Encode('foo'), 'MZXW6===')
assert.equal(base32.base32Encode('foob'), 'MZXW6YQ=')
assert.equal(base32.base32Encode('fooba'), 'MZXW6YTB')
assert.equal(base32.base32Encode('foobar'), 'MZXW6YTBOI======')

assert.equal(base32.base32Decode(''), '')
assert.equal(base32.base32Decode('MY======'), 'f')
assert.equal(base32.base32Decode('MZXQ===='), 'fo')
assert.equal(base32.base32Decode('MZXW6==='), 'foo')
assert.equal(base32.base32Decode('MZXW6YQ='), 'foob')
assert.equal(base32.base32Decode('MZXW6YTB'), 'fooba')
assert.equal(base32.base32Decode('MZXW6YTBOI======'), 'foobar')

assert.throws(() => base32.base32Decode('MZXW6YTBOI====='), {
  message: 'The string is not correctly encoded.',
})

assert.throws(() => base32.base32Decode('M*======'), {
  message: 'The string is not correctly encoded.',
})

assert.throws(() => base32.base32Encode('ѿ'), {
  message: 'The string to be encoded contains characters outside of the Latin1 range.',
})
