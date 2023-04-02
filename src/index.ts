import { Range, commands, window, workspace } from 'vscode'
import type { ExtensionContext, TextEditor } from 'vscode'
import { fakerFactory } from './faker-factory'
import { entities } from './entities'

export async function activate(context: ExtensionContext) {
  const configLocale: string = workspace
    .getConfiguration('vscode-fakerjs')
    .get('locale') || 'zh_CN'
  const { faker } = await fakerFactory(configLocale)

  const fakerEntities = Object.entries(entities).reduce((res: { label: string; detail: string }[], [moduleName, module]) => {
    const methods = Object.entries(module).map(([methodName, method]) => ({
      label: `${moduleName}.${methodName}`,
      detail: `${method.description || ''}`,
    }))
    return res.concat(methods)
  }, [])

  context.subscriptions.push(commands.registerCommand('vscode-fakerjs.generate', async () => {
    const selectEntity = await window.showQuickPick(fakerEntities)
    if (!selectEntity)
      return

    executeFaker(faker, selectEntity.label)
  }))
}

export function deactivate() {

}

function insertText(editor: TextEditor, generateFakeFn: () => string) {
  const { selections } = editor

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      const { start, end } = selection
      const range = new Range(start, end)

      const res = generateFakeFn()
      if ((res as any) instanceof Date)
        editBuilder.replace(range, res.toLocaleString())
      else
        editBuilder.replace(range, res.toString())
    })
  })
}

async function executeFaker(faker: any, entityName: string) {
  const [moduleName, methodName] = entityName.split('.')
  if (!moduleName || !methodName)
    return

  const generateFn = faker[moduleName][methodName]

  const editor = window.activeTextEditor
  if (!editor)
    return

  insertText(editor, generateFn)
}
