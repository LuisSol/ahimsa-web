import types from './actionTypes'
import routines from '../routines'

export const changeRoutine = (index) => {
    return { type: types.CHANGE_CURRENT_ROUTINE, index: index, routine: routines[index] }
}