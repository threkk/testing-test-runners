import test from 'node:test'
import assert from 'node:assert'
import { expect } from 'chai'

test('sub tests', async (t) => {
  await t.test('foo', () => {
    assert.equal(Math.sqrt(4), 2)
  })

  await t.test('bar', () => {
    expect(1 + 1).eq(2)
  })
})

test('this will always run', { only: true }, () => {
  expect(true).to.be.a('boolean')
})

test('skip', (t) => {
  t.skip('this test will be skipped')
})

test('todo', (t) => {
  t.todo('this test is a todo')
})
