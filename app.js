import express from 'express'
import { connection } from './db/connect.js'



const app = express()
const PORT = 8080

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)

app.listen(PORT, ()=>{
    console.log(`server listen on ${PORT}`)
})