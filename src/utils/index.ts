import { Range, window } from 'vscode'
import { entities } from '../entities'

type FakerResult = string | Date | []

export function insertText(text: FakerResult | (() => FakerResult)) {
  const editor = window.activeTextEditor
  if (!editor)
    return
  const { selections } = editor

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      const { start, end } = selection
      const range = new Range(start, end)
      let res: any = ''
      if (typeof text === 'function')
        res = text()
      else
        res = text

      if (res instanceof Date)
        editBuilder.replace(range, res.toLocaleString())
      else
        editBuilder.replace(range, res.toString())
    })
  })
}

export function getEntities() {
  return Object.entries(entities).reduce((res: { label: string; detail: string }[], [moduleName, module]) => {
    const methods = Object.entries(module).map(([methodName, method]) => ({
      label: `${moduleName}.${methodName}`,
      detail: `${method.description || ''}`,
    }))
    return res.concat(methods)
  }, [])
}

export function getTemplateVars(faker: any) {
  return {
    string: () => `${faker.datatype.string()}`,
    number: () => `${faker.datatype.number()}`,
    boolean: () => `${faker.datatype.boolean()}`,
    date: () => `${faker.datatype.datetime().toLocaleDateString()}`,
    datetime: () => `${faker.datatype.datetime().toLocaleString()}`,
  }
}
