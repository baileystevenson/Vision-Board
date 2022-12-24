const express= require('express')

const path=  require('path')

const app = express()

// app.use(cors())
// app.use(express.json())
app.use(express.static('../public'))





app.listen(4000, console.log("Server running on 4000."))