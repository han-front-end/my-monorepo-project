import {render} from '@testing-library/vue'
import Tree from '../src/tree'
import {expect, test} from 'vitest'

describe('tree test', () => {
  test('tree init render', async () => {
    const {getByRole} = render(Tree)
    getByRole('tree')
  })
})
