import {render} from '@testing-library/vue'
import Button from '../src/button'
import {expect, test} from "vitest";


// base功能
test('should work', () => {
  const {getByRole} = render(Button)
  getByRole('button')
})

test('default slot should be 按钮', () => {
  const {getByText} = render(Button)
  getByText('按钮')
})

test('slot should work', () => {
  const {getByText} = render(Button, {
    slots: {
      default() {
        return 'confirm'
      }
    }
  })
  getByText('confirm')
})

test('default prop type should be secondary', () => {
  const {getByRole} = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--secondary')).toBe(true)
})

test('prop type should work to primary', () => {
  const {getByRole} = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--primary')).toBe(true)
})

test('prop type should work to test', () => {
  const {getByRole} = render(Button, {
    props: {
      type: 'test'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--test')).toBe(true)
})

test('default prop size should be medium', () => {
  const {getByRole} = render(Button, {
    props: {
      size: 'medium'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--medium')).toBe(true)
})

test('prop size should work to small', () => {
  const {getByRole} = render(Button, {
    props: {
      size: 'small'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--small')).toBe(true)
})

test('prop size should work be large', () => {
  const {getByRole} = render(Button, {
    props: {
      size: 'large'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--large')).toBe(true)
})

test('prop block should work', () => {
  const {getByRole} = render(Button, {
    props: {
      block: true
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('m-btn--block')).toBe(true)
})

test('prop disabled should work', () => {
  const {getByRole} = render(Button, {
    props: {
      disabled: true
    }
  })
  const button = getByRole('button')
  expect(button.disabled).toBe(true)
})
