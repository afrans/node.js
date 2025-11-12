## Install
```bash
npm init -y # create package.json
npm install express
npm install --save-dev nodemon   # só se quiser reinício automático em desenvolvimento
```

## package.json
usar metodo de importar e exportar modulos, default c, common
"type": "module",

## Run
node .\api_express.js

## Test
curl http://localhost:3000/
curl http://localhost:3000/users/5
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Anderson"}'
obs: curl POST don't working
Postman POST
Header
| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |
Body -> raw > JSON
{
  "name": "Anderson"
}

## Update GitHub
Create repository in the github.com
 git init -b main
 git add .
 git commit -m "node.js projects"
 git remote add origin https://github.com/afrans/node.js.git
 git push -u origin main