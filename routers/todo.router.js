const router = require('express').Router();

const TodoController = require('../controller/todo.controller')

router.post('/create',TodoController.createTodo);

router.get('/gettodos',TodoController.getTodos);

router.delete('/deletetodo',TodoController.deleteTodo);

router.post('/updatetodo',TodoController.updateTodo);



module.exports = router;