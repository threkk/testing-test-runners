import { describe, it } from 'node:test'
import assert from 'node:assert'
import { expect } from 'chai'

describe('sub tests', () => {
  it('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  it('bar', () => {
    expect(1 + 1).eq(2)
  })
})

describe('other functionalities', () => {
  it.skip('skip', () => {
    expect(true).eq(false)
  })

  it.todo('todo', () => {
  })
})
