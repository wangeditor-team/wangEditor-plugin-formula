/**
 * @description formula elem-to-html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { FormulaElement } from '../../src/module/custom-types'

describe('formula elem-to-html', () => {
  const formulaElem: FormulaElement = { type: 'formula', value: '123', children: [{ text: '' }] }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('formula')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(formulaElem, '')
    expect(html).toBe(
      `<span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="123"></span>`
    )
  })
})
