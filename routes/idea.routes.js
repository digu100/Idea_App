
const idea_controller=require("../controllers/idea.controllers")
/*
Creating route for
GET 127.0.0.1:8000/ideaApp/api/v1/ideas
*/

module.exports=(app)=>{
    app.get('/ideaApp/api/v1/ideas',idea_controller.getAllIdeas)

    //GET 127.0.0.1:8000/ideaApp/api/v1/ideas/5
    app.get("/ideaApp/api/v1/ideas/:id",idea_controller.getideaBasedOnId)

    //POST 127.0.0.1:8000/ideaApp/api/v1/ideas
    app.post("/ideaApp/api/v1/ideas",idea_controller.createIdea)

    //PUT 127.0.0.1:8000/ideaApp/api/v1/ideas/1
    app.put("/ideaApp/api/v1/ideas/:id",idea_controller.updateIdea)

    //DELETE 127.0.0.1:8000/ideaApp/api/v1/ideas/1
    app.delete("/ideaApp/api/v1/ideas/:id",idea_controller.deleteIdea)
}




