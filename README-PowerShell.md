# PowerShell note (Windows)

## Why `&&` fails
In your PowerShell environment, `&&` is not being parsed as a statement separator.

## Use this instead
Chain commands using `;` and the call operator `&`:

```powershell
cd C:\Users\User\Desktop\portfolio; & .\node\node-v22.23.1-win-x64\node.exe -v
```

## In this repo
`package.json` scripts run Next using the bundled Node executable at:

- `node/node-v22.23.1-win-x64/node.exe`

So you can run (after `npm install`):

```powershell
npm run dev
```

