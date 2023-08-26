//创建组件测试文件的模板
import {upperFirst} from "./utils";

export default function genTestTemplate(name: string) {
  return `\
import {render} from '@testing-library/vue'
import ${upperFirst(name)} from '../src/${name}'
import {expect, test} from 'vitest'

describe('${name} test', () => {
  test('${name} init render', async () => {
    const {getByRole} = render(${upperFirst(name)})
    getByRole('${name}')
  })
})
`
}