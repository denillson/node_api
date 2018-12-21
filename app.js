const express = require('express')
const logger = require('morgan')
const app = express()

// Define Port
const port = process.env.PORT || 4000

// Middleware *//Morgan 
app.use(logger('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended : false}))

// Routes
const usersRoute = require('./src/routes/userRoute')

app.use('/users', usersRoute)


app.get('/', (req, res) => {
    res.status(200).send('Ok')
})

app.listen(port, () => {
    console.log('Servidor rodando na porta', port)
})


