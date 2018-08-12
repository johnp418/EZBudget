import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';

export default combineReducers({
    transactions: transactionReducer
});