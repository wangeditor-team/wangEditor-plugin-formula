/**
 * @description edit formula menu test
 * @author wangfupeng
 */

import { SlateEditor, DomEditor, SlateNode } from '@wangeditor/editor'
import createEditor from '../../utils/create-editor'
import { FormulaElement } from '../../../src/module/custom-types'
import EditorFormulaMenu from '../../../src/module/menu/EditFormula'
import withFormula from '../../../src/module/plugin'

describe('edit formula menu', () => {
  let editor = withFormula(createEditor())
  const startLocation = SlateEditor.start(editor, [])
  const menu = new EditorFormulaMenu()

  function genFormulaElem() {
    const formulaElem: FormulaElement = { type: 'formula', value: '123', children: [{ text: '' }] }
    return formulaElem
  }

  beforeEach(() => {
    editor = withFormula(createEditor())
  })

  it('getValue', () => {
    // 选中空编辑器
    editor.select(startLocation)
    expect(menu.getValue(editor)).toBe('')

    // 选中 formula 节点
    editor.insertNode(genFormulaElem())
    editor.select({ path: [0, 1, 0], offset: 0 })
    expect(menu.getValue(editor)).toBe('123')
  })

  it('isActive', () => {
    expect(menu.isActive(editor)).toBe(false)
  })

  it('isDisabled', () => {
    // 选中空编辑器
    editor.select(startLocation)
    expect(menu.isDisabled(editor)).toBeTruthy()

    // 选中 formula 节点
    editor.insertNode(genFormulaElem())
    editor.select({ path: [0, 1, 0], offset: 0 })
    expect(menu.isDisabled(editor)).toBeFalsy()
  })

  it('getModalPositionNode', () => {
    editor.select(startLocation)
    editor.insertNode(genFormulaElem())
    editor.select({ path: [0, 1, 0], offset: 0 })

    const positionNode = menu.getModalPositionNode(editor)
    expect(positionNode).not.toBeNull()
    expect(DomEditor.getNodeType(positionNode as SlateNode)).toBe('formula')
  })

  it('getModalContentElem', () => {
    editor.select(startLocation)
    editor.insertNode(genFormulaElem())
    editor.select({ path: [0, 1, 0], offset: 0 })

    const modalElem = menu.getModalContentElem(editor)
    expect(modalElem.tagName).toBe('DIV')
  })
})
