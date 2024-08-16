import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import purchase_book from './BookAction'

const BookContainer = () => {
    const noofBooks = useSelector(state => state.NumberOfBooks)
    const dispatch = useDispatch()

    const handleBuy = () => {
        dispatch(purchase_book())
    }
    
  return (
    <>
    <div>BookContainer</div>
    <h2>No of Books - {noofBooks}  </h2>
    <button onClick={handleBuy}>Buy Book</button>
    </>
  )
}

export default BookContainer