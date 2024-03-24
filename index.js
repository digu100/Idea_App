const express=require('express')
//express is a function, therefore we need to call it
const app=express()

//Acting as a middleware to convert JSON file to JS 
app.use(express.json())

//stitching the route-> what came is function,hence passed app
require("./routes/idea.routes")(app)



//starting the server
app.listen(8000,()=>{
    console.log("App started on port no.", 8000)
})





