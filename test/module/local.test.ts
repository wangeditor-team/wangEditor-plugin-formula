/**
 * @description formula local test
 * @author wangfupeng
 */

import '../../src/module/local'
import { i18nChangeLanguage, t } from '@wangeditor/editor'

describe('local', () => {
  it('zh-CN', () => {
    expect(t('formula.formula')).toBe('公式')
  })
  it('en', () => {
    i18nChangeLanguage('en')
    expect(t('formula.formula')).toBe('Formula')
  })
})
