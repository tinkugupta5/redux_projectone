import {createStore} from 'redux'
import BooksReducer from './BookReducer'

const Store = createStore(BooksReducer)


export default Store;