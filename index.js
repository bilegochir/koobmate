import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './src/routes/clientRoutes'

const PORT = process.env.PORT || 3000
const app = require('express')()

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://bilegochir:Googleplus9@ds031832.mlab.com:31832/book_db')

app.use(bodyParser.urlencoded ({ extended: true}))
app.use(bodyParser.json())
app.use(cors())

routes(app);

app.get('/', (req, res) => 
    res.send(`Server is running on ${PORT}`)
)

app.listen(PORT, (req, res) => {
    console.log(`Server is running on ${PORT}`)
})
