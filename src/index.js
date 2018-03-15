import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import Promise from 'bluebird'
import bodyParser from 'body-parser'

import config from '../config'

// Routes imports
import items from './routes/items'
import shops from './routes/shops'

// Connect to DB
mongoose.Promise = Promise
mongoose.connect(`mongodb://${config.MONGO_USER}:${config.MONGO_SECRET}@ds113799.mlab.com:13799/shopify-sandbox`, () => {
  console.log('Connected to mongodb...');
})
const db = mongoose.connection

// Check for db errors
db.on('error', (err) => {
  console.log("On error: " + err);
})

// Init App
const app = express()

// JSON Body Parser
app.use(bodyParser.json())

// Routes
app.use('/api/items', items)
app.use('/api/shops', shops)

// Home Route
app.get('/*', (req, res) => {
  res.json({
    message: "success"
  })
})

app.listen(3000, () => console.log('Running on port 3000...'))
