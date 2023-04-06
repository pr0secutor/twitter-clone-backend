const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const routes = require('./routes/route')

const app = express()

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const port=5000

mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log(`Connected to MongoDB.....`))
.catch((err) => console.log(err))

app.use(routes)

app.listen(port, () => console.log(`Listening on : ${port}`))