import * as express from 'express';

import {
  getAll,
  getTodoById,
  saveTodo,
  updateTodo
} from '../controllers/todoController';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getTodoById);
router.post('/', saveTodo);
router.put('/:id', updateTodo);

export default router;