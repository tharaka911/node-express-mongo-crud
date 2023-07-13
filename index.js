const express = require('express')
const mongoose = require('mongoose');
const alienRouter = require('./routes/alient.js');
const Connection = require('./database/db.js');

const app = express()
Connection();



// const url = 'mongodb://root:4LLTwFb6LXXxI8h@188.40.185.120:27017/?authMechanism=DEFAULT'


// mongoose.connect(url, {useNewUrlParser:true})
// const con = mongoose.connection

// con.on('open', () => {
//     console.log('connected..')
// })




app.use(express.json())

app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})