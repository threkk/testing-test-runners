import test from 'node:test'
import assert from 'node:assert'
import { expect } from 'chai'

test('Math.sqrt()', () => {
  expect(Math.sqrt(4)).to.equal(2)
  expect(Math.sqrt(144)).to.equal(12)
  expect(Math.sqrt(2)).to.equal(Math.SQRT2)
})

test('JSON', () => {
  const input = {
    foo: 'hello',
    bar: 'world',
  }

  const output = JSON.stringify(input)

  expect(output).eq('{"foo":"hello","bar":"world"}')
  assert.deepEqual(JSON.parse(output), input, 'matches original')
})
