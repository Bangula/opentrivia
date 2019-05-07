import {combineReducers} from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    questions: questionsReducer
});

export default rootReducer;