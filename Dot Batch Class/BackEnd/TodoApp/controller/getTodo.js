// import the model
const Todo = require("../models/Todo");

// define route handler

exports.getTodo = async (req,res) => {
    try{
        // Fetch all data's from database
        const todos = await Todo.find({});
 
        // Response
        res.status(200).json(
            {
                success:true,
                data:todos, 
                message:'Entry Todo Data is fetched',
            }
        );
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:'Internal server error',
            error:err.message,
        })
    }
}

// Export by id
exports.getTodoById = async (req,res) => {
    try{
        // Extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById( {_id: id})

        // Data for given id not found
        if(!todo){
            return res.status(404).json(
                {
                    success:false,
                    message:'No Data Found with given id'
                }
            )
        }

        // Data for given id found
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} data succesfully fetched`
        })

    }

    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            data:'Internal server error',
            error:err.message,
        })
    }
}