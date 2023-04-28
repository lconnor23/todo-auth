const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req, res) => {
        console.log(req.user)
        try {
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id, completed: false})
        } catch (error) {
            console.log(error)
        }
    },
    createTodo: async (req, res) => {
        try {
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/todos')
        } catch (error) {
            console.log(error)
        }
    },
    markComplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIDFromJSFile}, {
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch (error) {
            console.log(error)
        }
    },
    markIncomplete: async (req, res) => {
        try {
            await Todo.findOneAndUpdate({_id:req.body.todoIDFromJSFile}, {completed: false})
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch (error) {
            console.log(error)
        }
    },
    deleteTodo: async (req, res) => {
        console.log(req.body.todoIDFromJSFile)
        try {
            await Todo.findOneAndDelete({_id:req.body.todoIDFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        } catch (error) {
            console.log(error)
        }
    }
}