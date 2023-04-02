import { commands, window, workspace } from 'vscode'
import type { ExtensionContext } from 'vscode'
import { fakerFactory } from './faker-factory'
import { getEntities, getTemplateVars, insertText } from './utils'

export async function activate(context: ExtensionContext) {
  const configLocale: string = workspace
    .getConfiguration('vscode-fakerjs')
    .get('locale') || 'zh_CN'
  const { faker } = await fakerFactory(configLocale)

  const fakerEntities = getEntities()

  context.subscriptions.push(commands.registerCommand('vscode-fakerjs.insert', async () => {
    const selectEntity = await window.showQuickPick(fakerEntities)
    if (!selectEntity)
      return

    executeInsert(faker, selectEntity.label)
  }))

  const templateVars = getTemplateVars(faker)
  context.subscriptions.push(commands.registerCommand('vscode-fakerjs.generate', () => {
    const editor = window.activeTextEditor
    const selectedText = editor?.document.getText(editor.selection)
    if (!selectedText)
      return
    let template = selectedText
    Object.keys(templateVars).map(item => ({
      searchValue: new RegExp(`:\\s*${item}`, 'ig'),
      replaceValue: `: {{${item}}}`,
    })).forEach(({ searchValue, replaceValue }) => {
      template = template.replace(searchValue, replaceValue)
    })
    const text = faker.helpers.mustache(template, templateVars)
    insertText(text)
  }))
}

export function deactivate() {

}

async function executeInsert(faker: any, entityName: string) {
  const [moduleName, methodName] = entityName.split('.')
  if (!moduleName || !methodName)
    return

  const generateFn = faker[moduleName][methodName]

  insertText(generateFn)
}
