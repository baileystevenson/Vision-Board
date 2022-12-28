const express= require('express')

const path=  require('path')

const app = express()


app.use(express.json())
app.use(express.static('public'))


const {getAllWants,createWant,deleteWant} = require('./controller')

app.get(`/api/want`, getAllWants)
app.post(`/api/want`, createWant)
app.delete(`/api/want/:id`, deleteWant)




app.listen(4000, console.log("Server running on 4000."))
