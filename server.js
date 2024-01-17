import express from 'express'
import tutorialRouter from "./router/tutorial.js";
const app = express()

app.use(express.json())
app.use('/', tutorialRouter)

const port = 9999
app.listen(port, () => {
    console.log(`Web server running on: http://localhost:${port}`)
})