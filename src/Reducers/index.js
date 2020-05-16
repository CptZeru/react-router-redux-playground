import { crudStudent } from './CrudStudent.reducer.js';
import { viewStudents } from './ViewStudents.reducer.js';
import { auth } from './Login.reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth,
  crudStudent,
  viewStudents
});

export default rootReducer;