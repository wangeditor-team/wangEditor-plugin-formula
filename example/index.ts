/**
 * @description examples entry
 * @author wangfupeng
 */

import { createEditor, createToolbar, Boot, i18nChangeLanguage } from '@wangeditor/editor'
import module from '../src/index'

Boot.registerModule(module)

// i18nChangeLanguage('en')

// 创建编辑器
const editor = createEditor({
  selector: '#editor-container',
  config: {
    hoverbarKeys: {
      formula: {
        menuKeys: ['editFormula'], // “编辑”菜单
      },
    },
    onChange(editor) {
      const html = editor.getHtml()
      // @ts-ignore
      document.getElementById('text-html').value = html
      const contentStr = JSON.stringify(editor.children, null, 2)
      // @ts-ignore
      document.getElementById('text-json').value = contentStr
    },
  },
  // content: [
  //   {
  //     // @ts-ignore
  //     type: 'paragraph',
  //     children: [
  //       { text: 'hello world' },
  //       // @ts-ignore
  //       { type: 'formula', value: 'c = \\pm\\sqrt{a^1 + b^2}', children: [{ text: '' }] },
  //     ],
  //   },
  // ],
  html: `<p>hello&nbsp;world<span data-w-e-type="formula" data-w-e-is-void data-w-e-is-inline data-value="c = \\pm\\sqrt{a^2 + b^2}"></span>100</p><p><br></p>`,
})
const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: {
    insertKeys: {
      index: 0,
      keys: ['insertFormula'], // “插入”菜单
    },
  },
})

// @ts-ignore 为了便于调试，暴露到 window
window.editor = editor
// @ts-ignore
window.toolbar = toolbar
