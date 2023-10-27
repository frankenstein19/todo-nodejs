const TodoModel = require('../model/todo.model');

class TodoServices {
    static async addTodo (userId,title,description){
       try {
        var todo = new TodoModel({userId,title,description})
        return await todo.save();
       } catch (error) {
         throw error
       }
      
    }

    static async getTodos (userId){
      try {
       var todos = await TodoModel.find({userId})
       return todos;
      } catch (error) {
        throw error
      }
     
   }

   static async deleteTodo (_id,userId){
    try {
     var todo = await TodoModel.findOneAndDelete({_id,userId})
     return todo;
    } catch (error) {
      throw error
    }
   
 }

 static async updateTodo (_id,userId,title,description){
  try {
   let todo = await TodoModel.findOne({_id,userId})
   Object.assign(todo, {title: title ?? todo.title, description: description ?? todo.description})
   await todo.save() 
   return todo;
  } catch (error) {
    throw error
  }
 
}
}

module.exports = TodoServices