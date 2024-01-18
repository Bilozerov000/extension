import {
  ExtensionContext,
  window,
  ViewColumn,
  commands,
  WebviewPanel,
  Uri,
} from "vscode";
import { EDITOR_OUTPUT_FILE, LOCAL_SERVER_URL } from "./utils/constants";

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand("embedd.start", () => {
    const panel = window.createWebviewPanel(
      "embedd",
      "Embedd",
      ViewColumn.One,
      {
        enableScripts: true,
      }
    );

    panel.webview.html = getHtmlTemplate(context, panel);
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function getHtmlTemplate(context: ExtensionContext, panel: WebviewPanel) {
  const codiconsUri = panel.webview.asWebviewUri(
    Uri.joinPath(
      context.extensionUri,
      "node_modules",
      "@vscode/codicons",
      "dist",
      "codicon.css"
    )
  );
  const scriptUri = panel.webview.asWebviewUri(
    Uri.joinPath(context.extensionUri, "dist", EDITOR_OUTPUT_FILE)
  );

  return `
  <!DOCTYPE html>
  <html lang="en" style="width:100%;height:100%;margin:0;padding:0;">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="${codiconsUri}" rel="stylesheet" />
    <title>Embedd Panel</title>
  </head>
  <body style="width:100%;height:100%;margin:0;padding:0;overflow:hidden">
    <div id="app" style="width:100%;height:100%;margin:0;padding:0;"></div>

    <script src="${scriptUri}"></script>
  </body>
  </html>
`;
}
