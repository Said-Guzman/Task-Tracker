// fetch("http://127.0.0.1:5500")
// .then((response) => {
//     response.json();
//   })
//   .then((data) => {
//     console.log(data);

//  });
// // data[0].id;


// const express = require("express");
// const { parse } = require("path");
// const router = express.Router()
// const uuid = require("uuid")

// let app = require ("./data.json")




// //getting from JSON file
// router.get("/", (req, res) => {
//     res.json(app)
// })
// // calling and routing it here to grab info from JSON
// router.get("/:id",(req, res) => {
//     const found = app.some(item => item.id === parseInt(req.params.id))

// if(found){
//     res.json(items.filter(item => item.id === parseInt(req.params.id)))
// }else{
//     res.sendStatus(400);
// }
// })



// //post new data into json
// router.post("/", (req,res) => {
//     const newItem = {
//         id:uuid.v4(),
//         task: req.body.task
//     };
//     if(!newItem.task){
//         return res.sendStatus(400)
//     }
//     app.push(newItem);
//     res.json(app)
// });



// // update json
// router.put("/:id",(req, res) =>{
// const found = app.some(item => item.id === parseInt(req.params.id))

// if(found){
// const updateItems = req.body;
// app.forEach(item =>{
//     if(item.user === parseInt(req.params.id)){
//         item.task = updateItems.task ? updateItems.task : item.task;
//         res.json({msg:"task added", item})
//     }
// });
// }else{
//     res.sendStatus(400)
// }




// })

// //delete user 
// router.delete("/:id", (req, res)=>{
//     const found = item.some(item => item.id === parseInt(req.params.id))
//     if(found){
//         app = app.filter(item => item.id !== parseInt(req.params.id))
//     res.json({
//         msg:"Item deleted",
//         app
//     })
//     }else{
//         res.sendStatus(400)
//     }
// });








// module.exports = router;




