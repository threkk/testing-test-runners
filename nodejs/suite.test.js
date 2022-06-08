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

test('skip', (t) => {
  t.skip('this test will be skipped')
  expect(true).eq(false)
})

test('todo', (t) => {
  t.todo('this test is a todo')
  expect(true).eq(false)
})
