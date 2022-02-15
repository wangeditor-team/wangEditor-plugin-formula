/**
 * @description formula module entry
 * @author wangfupeng
 */

import './local' // 多语言

import { IModuleConf } from '@wangeditor/core'
import withFormula from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'
import { insertFormulaMenuConf, editFormulaMenuConf } from './menu/index'

const module: Partial<IModuleConf> = {
  editorPlugin: withFormula,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [insertFormulaMenuConf, editFormulaMenuConf],
}

export default module
