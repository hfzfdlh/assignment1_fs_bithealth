const express = require('express')
const router = require('./routes')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)

const server = app.listen(port,()=>{
    console.log(`masuk port ${port}`)
})
let gracefulEnd = (server)=>{
    return ()=>{
        server.close()
        console.log("server is shutting down")
    }
}

process.on('SIGTERM', gracefulEnd(server))
process.on('SIGINT', gracefulEnd(server))

