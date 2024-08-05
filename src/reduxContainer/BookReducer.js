import { buy_book } from "./BookTypes"
const initialState = {
    NumberOfBooks: 20
}

// pures function chnages are made with pure function 

const BookReducer = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: return {
            ...state, 
            NumberOfBooks: state.NumberOfBooks - 1
        }
        default: return state
    }
}

export default BookReducer;

