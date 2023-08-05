const express = require('express')
const app = express()
const port = 3000
const connect_to_database = require('./database/connect')

// data base connection 
connect_to_database().catch(err => console.log(err))

app.use(express.json());

// routes 
app.use('/',require('./routes/basic'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/linktree',require('./routes/linktree'))


app.listen(port,()=>{
    console.log(`Backend of linktree listening at http://localhost:${port}`)
})