import { buy_book } from "./BookTypes";
// purchase_book is action name 
// Action creator function that returns action objects.
const purchase_book = () => {

    return {
        type : buy_book
    }
    
}

export default purchase_book