import fs from "fs"
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())

const baseData = fs.readFile("./data.json", (err, data) => {
    console.log(JSON.parse(data))
})

app.get("/", (req, res) => {
    fs.readFile("./data.json", (err, data) => {
        if (err) return err
        res.json(JSON.parse(data))
    })
})



app.listen(4000, (err) => {
    if (err) return err;
    console.log(`running on port 4000..`)
})