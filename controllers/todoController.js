import Todo from '../db/models/todo';
import { prop } from 'ramda';

export const getAll = async(req, res, next) => {
  try{
    const todos = await Todo.find(req.query)
    res.json(todos)
  } catch(err) {
    next(err)
  } 
}

export const getTodoById = async(req, res, next) => {
  try{
    const _id = prop('id', req.params)
    const todo = await Todo.findById(_id)
    res.json(todo)
  } catch(err) {
    next(err)
  }
}

export const saveTodo = async(req, res, next) => {
  try{
    const todo = prop('body', req)
    const todoModel = new Todo(todo)
    const newTodo = await todoModel.save()
    res.json(newTodo)
  } catch(err) {
    next(err)
  }
}

export const updateTodo = async(req, res, next) => {
  try{
    const todo = prop('body', req)
    const _id = prop('id', req.params)
    const todoUpdate = await Todo
      .findByIdAndUpdate(_id, todo, {
        runValidators: true
      })
    res.json(todoUpdate)
  } catch(err) {
    next(err)
  }
}