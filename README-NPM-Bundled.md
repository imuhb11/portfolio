# Use bundled Node/NPM (Windows)

Your terminal does not have `node`/`npm` on PATH, but this repo includes them under:

- `node/node-v22.23.1-win-x64/node.exe`
- `node/node-v22.23.1-win-x64/npm.cmd`

## Check versions
```powershell
cd C:\Users\User\Desktop\portfolio
.\node\node-v22.23.1-win-x64\node.exe -v
.\node\node-v22.23.1-win-x64\npm.cmd -v
```

## Install + run
```powershell
cd C:\Users\User\Desktop\portfolio
.\node\node-v22.23.1-win-x64\npm.cmd install
.\node\node-v22.23.1-win-x64\npm.cmd run dev
```

## Why this is needed
PowerShell command `&&` chaining failed in your environment, and `npm` is not available on PATH—so the repo uses the bundled executables directly.

