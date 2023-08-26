import * as inquirer from 'inquirer'
import {red} from 'kolorist'
import createComponent from "../shared/create-component";

//创建类型
const CREATE_TYPES: string[] = ['component', 'lib-entry']
//组件分类
const DOCS_CATEGORYS: string[] = ['通用', '导航', '反馈', '数据录入', '数据显示']

export async function onCreate(args = {type: ''}) {
  let {type} = args
  // 用户没输入，让用户选择
  if (!type) {
    const result = await inquirer.prompt([
      {
        // 获取输入后的名称
        name: 'type',
        // 交互的方式
        type: 'list',
        // 提示信息
        message: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        // 默认选项
        default: 0
      }
    ])
    type = result.type
  }
  // 用户输入错误 回退让用户重新输入
  if (!CREATE_TYPES.includes(type)) {
    // @ts-ignore
    console.log(red(`当前类型仅支持：${CREATE_TYPES.join(', ')},你输入的是：${type}，请重新选择`))
    return onCreate()
  }
  //输入则创建对于的内容
  try {
    switch (type) {
      case 'component' :
        // 如果是组件，继续收集信息
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件的name，用于文件名和文件夹的名称',
            validate(value: string) {
              if (value.trim() === '') {
                return '组件name不能为空！'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件的中文名称，用于文档列表中的显示',
            validate(value: string) {
              if (value.trim() === '') {
                return '组件名称不能为空！'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件的分类,将用作文档列表的分类中',
            choices: DOCS_CATEGORYS,
            default: 0,
          },
        ])
        // 创建组件模板文件
        createComponent(info)
        break;

      default:
        break;
    }
  } catch (e) {
    console.log(e)
  }
}