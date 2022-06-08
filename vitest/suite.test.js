import { assert, describe, expect, it, test } from 'vitest'

describe('suite name', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })

  it('snapshot', () => {
    expect({ foo: 'bar' }).toMatchSnapshot()
  })
})

test.skip('this test will be skipped', () => {
  expect(true).toBe(false)
})

test.todo('this test is a todo', () => {
  expect(true).toBe(false)
})
