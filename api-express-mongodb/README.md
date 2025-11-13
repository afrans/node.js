
## Install mongodb local by docker
docker-compose up -d  

## Test mongodb
install chocolatey # ver chocolatey  
open/close terminal  
choco install mongodb-shell -y  
open/close terminal  
mongosh --version  
mongosh "mongodb://localhost:27017"  

If connect prompt -> test>  

## Run api-express-mongodb
```bash
npm run start
```

## Test postman

POST http://localhost:3000/items  
Body  
{  
  "name": "Anderson",  
  "type": "teste"  
}  
GET http://localhost:3000/items  