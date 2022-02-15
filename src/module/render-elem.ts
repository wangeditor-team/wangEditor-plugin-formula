/**
 * @description render elem
 * @author wangfupeng
 */

import { h, VNode } from 'snabbdom'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'
import { FormulaElement } from './custom-types'

function renderFormula(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  // 当前节点是否选中
  const selected = DomEditor.isNodeSelected(editor, elem)

  // 构建 formula vnode
  const { value = '' } = elem as FormulaElement
  const formulaVnode = h(
    'w-e-formula-card',
    {
      dataset: { value },
    },
    null
  )

  // 构建容器 vnode
  const containerVnode = h(
    'div',
    {
      props: {
        contentEditable: false, // 不可编辑
      },
      style: {
        display: 'inline', // inline
        marginLeft: '3px',
        marginRight: '3px',
        border: selected ? '1px solid #ccc' : '1px solid transparent', // 选中/不选中，样式不一样
        padding: '3px 3px',
      },
    },
    [formulaVnode]
  )

  return containerVnode
}

const conf = {
  type: 'formula', // 节点 type ，重要！！！
  renderElem: renderFormula,
}

export default conf
