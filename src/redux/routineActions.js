import types from './actionTypes'
import routines from '../routines'
import { getRandomQuote } from '../quoteAPI'

export const changeRoutine = (index) => {
    return { type: types.CHANGE_CURRENT_ROUTINE, index: index, routine: routines[index] }
}

export const changeQuote = () => {
    return { type: types.CHANGE_QUOTE, quote: getRandomQuote() }
}