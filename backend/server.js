import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv'
import router from './router/route.js'
const app = express()

// import conn file
import connect from './database/conn.js'

//app middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
config()

// application port

const port = process.env.PORT || 8080

// routes
app.use('/api', router) // gets all routes from router. apis

app.get('/', (req, res) => {
  try {
    res.json('Get request')
  } catch (error) {
    res.json(error)
  }
})

// start server only when we have a valid connection

connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`)
      })
    } catch (error) {
      console.log('Cannot connect to the server')
    }
  })
  .catch((error) => {
    console.log('Invalid Database Connection')
  })
