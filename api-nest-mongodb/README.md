
## Como usar (rodar local)
   ```bash
   npm install
   npm run start:dev
   ```
Endpoints:
   - GET  /health          -> { "status": "ok" }
   - POST /users           -> cria usuário { "name": "...", "email": "..." }
   - GET  /users           -> lista usuários
   - GET  /users/:id       -> busca por id
   - PUT  /users/:id       -> atualiza usuário
   - DELETE /users/:id     -> remove usuário

Para rodar em produção (compilar + rodar):
   ```bash
   npm run build
   npm start
   ```

## Observações
- Certifique-se do MongoDB estar acessível em `localhost:27017` (se estiver em Docker, verifique `docker ps`).
- A aplicação usa `class-validator` para validar o DTO do usuário.

## First Update GitHub
Create repository in the github.com
```bash
 git init -b main
 git add .
 git commit -m "node.js projects"
 git remote add origin https://github.com/afrans/node.js.git
 git push -u origin main
 ```

 ## Update GitHub
```bash
 git add .
 git commit -m "node.js projects"
 git push -u origin main
 ```