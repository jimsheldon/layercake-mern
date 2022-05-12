import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './db/db.js'
import routes from './routes/index.js'
dotenv.config({ path: './config.env' })

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes.customRoutes())

db.connectDb()
const PORT = process.env.PORT || 5001
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
)
export default app
