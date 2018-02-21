import mongoose from 'mongoose';
import bluebird from 'bluebird';

import config from '../config/db.config';

const dbConfig = config();

let db = null;

let options = { 
  poolSize: 10,
  promiseLibrary: bluebird,
  user: dbConfig.username,
  pass: dbConfig.password,
};

mongoose.connect(dbConfig.url, options);
mongoose.Promise = bluebird;

db = mongoose.connection;

global.db = db;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('Database is successfully running '))

export default db