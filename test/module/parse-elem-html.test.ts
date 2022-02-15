/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { FormulaElement } from '../../src/module/custom-types'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('span[data-w-e-type="formula"]')
  })

  it('parse html', () => {
    const value = '123'
    // elem-to-html 产出的 html 格式： <span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="${value}"></span>
    const elem = document.createElement('span')
    elem.setAttribute('data-w-e-type', 'formula')
    elem.setAttribute('data-value', value)

    const formula = parseHtmlConf.parseElemHtml(elem, [], editor) as FormulaElement
    expect(formula.type).toBe('formula')
    expect(formula.value).toBe(value)
  })
})
