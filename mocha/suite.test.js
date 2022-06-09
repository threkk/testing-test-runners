import assert from 'node:assert'
import { expect } from 'chai'
import { it, describe } from 'mocha'

describe('sub tests', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})

it.skip('this test will be skipped', function () {
  this.todo('this test will be skipped')
  expect(true).eq(false)
})

it('this test is a todo', function () {
  this.skip('this test is a todo')
  expect(true).eq(false)
})
