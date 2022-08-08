import express, { json } from 'express'
import router from './Routes/routes'
import cors from 'cors'
const app= express()

app.use(json())
app.use(cors())
app.use('/user',router)



app.listen(7000,()=>{
    console.log("Application Running");
})


// http://locahost:7000/user