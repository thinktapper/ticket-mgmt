const express = require('express')
const cors = require('cors')
const colors = require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const connectDB = require('./config/db')
require('dotenv').config()

const app = express()
app.use(cors())
const port = process.env.PORT || 5000

connectDB()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true //process.env.NODE_ENV === 'development'
}))

app.listen(port,() => console.log(`Listening on port ${port}`))