/**
 * @description formula plugin test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import withFormula from '../../src/module/plugin'
import { FormulaElement } from '../../src/module/custom-types'

describe('formula plugin', () => {
  const editor = withFormula(createEditor())
  const formulaElem: FormulaElement = { type: 'formula', value: '123', children: [{ text: '' }] }

  it('isInline', () => {
    expect(editor.isInline(formulaElem)).toBe(true)
  })

  it('isVoid', () => {
    expect(editor.isVoid(formulaElem)).toBe(true)
  })
})
