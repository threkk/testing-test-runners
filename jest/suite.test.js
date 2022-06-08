import { describe, it, test, expect } from '@jest/globals'
import assert from 'node:assert'

describe('suite name', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).toEqual(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})

test.skip('this test will be skipped', () => {
  expect(true).toEqual(false)
})

test.todo('this test is a todo')
