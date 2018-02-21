import * as express from 'express';

import {
  getAll,
  getTodoById,
  saveTodo,
  updateTodo
} from '../controllers/todoController';

const router = express.Router();

router.get('/todo', getAll);
router.get('/todo:id', getTodoById);
router.post('/todo', saveTodo);
router.put('/todo:id', updateTodo);

export default router;