const express = require('express')  // pulls and install express
const app = express() // to use express

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('api/users', require('./routes/api/users'))

app.listen(80, () => {
    console.log('Server started')
})