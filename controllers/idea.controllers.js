//write the logic to create the controllers for the idea resources

const ideas=require('../models/ideas.model')

let id=3;//initial count of id
/*
Create the controller for fetching all the ideas

GET 127.0.0.1:8000/ideaApp/api/v1/ideas

Return list of all the ideas

*/

exports.getAllIdeas=(req,res)=>{

    //Read all the ideas from the idea model file
    //return all those ideas
    res.status(200).send(ideas)


}

//controller that fetches idea based on id
//GET 127.0.0.1:8000/ideaApp/api/v1/ideas/2
exports.getideaBasedOnId=(req,res)=>{

    //1st. we need to read the idea id from the path param
    idea_id=req.params.id
    //using id,check if the idea with that id is present or not
    if(ideas[idea_id]){
        res.status(200).send(ideas[idea_id])
    }else{
        res.status(404).send({
            message: "Idea with the given id not found"
        })
    }
    //send response

}

exports.createIdea=(req,res)=>{

    //1st need to read the request body
    idea_object=req.body
    id++
    idea_object["id"]=id //setting the id in the new created idea object
    ideas[id]=idea_object
    //add the object provided in the ideas object

    //return the response
    res.status(201).send(idea_object)

}

//controller for updating the idea
exports.updateIdea=(req,res)=>{

    //read the idea id
    idea_id=req.params.id;

    //check if the idea id is present or not
    if(ideas[idea_id]){
         //read the new idea body and replace it
        idea_obj=req.body
        ideas[idea_id]=idea_obj
        //return the updated idea
        res.status(200).send( idea_obj)
    }else{
        return res.status(404).send({
            message: "Idea ypu wanted to update ,not found"
        })
    }

}

//controller for deleting an idea
exports.deleteIdea=(req,res)=>{

     //read the idea id
     idea_id=req.params.id;

     //check if idea is present in it or not
     if(ideas[idea_id]){
        delete ideas[idea_id]
        res.status(200).send({
            message: "Your idea got deleted"
        })
     }else{
        return res.status(404).send({
            message: "Idea you want to delete, not found"
        })
     }

}







