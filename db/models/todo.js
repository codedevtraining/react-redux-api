import { Schema, Mongoose } from 'mongoose';
import dbConnection from '../../db/db.connection';

const todoSchema = new Schema({
  description: { type: String, required: true },
  done: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default dbConnection.model('todo', todoSchema);