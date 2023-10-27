const TodoServices = require('../services/todo.services')

module.exports = {
   createTodo, 
   getTodos,
   deleteTodo,
   updateTodo
}

  async function createTodo (request,response,next){
   try {
      const {title,description} = request.body
   
      const successResponse = await TodoServices.addTodo(request.userId,title,description);
  
      response.json({status:true,message:'Todo Created Successfully'})
  
   } catch (error) {
     response.json({status:false,message:error.message})
   }
  }

  async function getTodos (request,response,next){
   try {
      const successResponse = await TodoServices.getTodos(request.userId);
  
      response.json({status:true,message:'Todo fetch Successfully',data:successResponse})
  
   } catch (error) {
     response.json({status:false,message:error.message})
   }
  }

  async function deleteTodo(request,response,next){

   try {
      const {id} = request.body
      const successResponse = await TodoServices.deleteTodo(id,request.userId);
      if(!successResponse)
      {
         response.json({status:false,message:'Todo not found'})
         return
      }
      response.json({status:true,message:'Todo deleted Successfully'})
  
   } catch (error) {
     response.json({status:false,message:error.message})
   }
  }

  async function updateTodo(request,response,next){

   try {
      const requiredFields = ['id','title']; // List of required fields

      // Check if all required fields are present in the request body
      const missingFields = requiredFields.filter(field => !(field in request.body));
  
      if (missingFields.length > 0) {
          // If any required fields are missing, send a 400 Bad Request response
          return response.status(400).json({ error: `Missing required fields: ${missingFields.join(', ')}` });
      }

      const {id,title,description} = request.body
      const successResponse = await TodoServices.updateTodo(id,request.userId,title,description);
      if(!successResponse)
      {
         response.json({status:false,message:'Todo not found'})
         return
      }
      response.json({status:true,message:'Todo updated Successfully',data:successResponse})
  
   } catch (error) {
     response.json({status:false,message:error.message})
   }
  }


  