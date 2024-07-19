//importing the json-server library 

const jsonServer =require('json-server') 
//create a server instance 
const MPserver = jsonServer.create()
// Routing json server resource to server 
const router = jsonServer.router('db.json')
//Implementing default middleware 
const middleware =jsonServer.defaults()
//define port number for service  
const PORT = 3000||process.env.PORT

//Configuring router, middleware, port into server 
MPserver.use(middleware);
MPserver.use(router);

MPserver.listen(PORT, ()=> {
    console.log(`Media PLayer server running at  ${PORT}`)
})