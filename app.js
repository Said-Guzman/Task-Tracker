
fetch("http://127.0.0.1:5500")
.then((response) => {
    response.json();
  })
  .then((data) => {
    console.log(data);
  });

data[0].id;


const express = require("express");
const { parse } = require("path");
const router = express.Router()
const uuid = require("uuid")

let app = require ("./data.json")

router.get("/", (req, res) => {
    res.json(app)
})
// calling and routing it here to grab info from json
router.get("/:id",(req, res) => {
    const found = app.some(item => item.id === parseInt(req.params.id))

if(found){
    res.json(items.filter(item => item.id === parseInt(req.params.id)))
}else{
    res.sendStatus(400);
}
})

router.post("/", (req,res) => {
    
})






