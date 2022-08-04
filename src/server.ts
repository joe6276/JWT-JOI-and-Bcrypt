import express, { json } from 'express'
import router from './Routes/routes'

const app= express()

app.use(json())

app.use('/user', router)


app.listen(6000,()=>{
    console.log("Application Running");
    
})