/**
 * @description insert formula menu test
 * @author wangfupeng
 */

import { SlateEditor } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import { FormulaElement } from '../../../src/module/custom-types'
import InsertFormulaMenu from '../../../src/module/menu/InsertFormula'
import withFormula from '../../../src/module/plugin'

describe('insert formula menu', () => {
  const editor = withFormula(createEditor())
  const startLocation = SlateEditor.start(editor, [])
  const menu = new InsertFormulaMenu()

  function genFormulaElem() {
    const formulaElem: FormulaElement = { type: 'formula', value: '123', children: [{ text: '' }] }
    return formulaElem
  }

  it('getValue', () => {
    expect(menu.getValue(editor)).toBe('')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  it('isDisabled', () => {
    // 选中空编辑器
    editor.select(startLocation)
    expect(menu.isDisabled(editor)).toBeFalsy()

    // 选中 formula 节点
    editor.insertNode(genFormulaElem())
    editor.select({ path: [0, 1, 0], offset: 0 })
    expect(menu.isDisabled(editor)).toBeTruthy()
  })

  it('getModalPositionNode', () => {
    expect(menu.getModalPositionNode(editor)).toBeNull()
  })

  it('getModalContentElem', () => {
    const elem = menu.getModalContentElem(editor)
    expect(elem.tagName).toBe('DIV')
  })
})
