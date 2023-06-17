import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "hello-to-hey" is now active!');

    let disposable = vscode.commands.registerCommand('extension.convertHelloToHey', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selections = editor.selections;

            editor.edit(editBuilder => {
                selections.forEach(selection => {
                    const text = document.getText(selection);
                    const convertedText = text.replace(/hello/gi, 'hey');
                    editBuilder.replace(selection, convertedText);
                });
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
