const cors = require('cors')
const express = require('express')
const axios = require('axios')

const app = express()
//middleware
app.use(cors())

//port
app.listen('4444')

//route
app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    res.json(data)
  } catch (error) {
    console.error(error)
  }
})
