import types from './actionTypes'
import routines from '../routines'

const defaultState = {
    routineIndex: 0,
    routine: routines[0]
}

const routineReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.CHANGE_CURRENT_ROUTINE:
            return {
                routineIndex: action.index,
                routine: action.routine
            }
        default:
            return state;
    }

}

export default routineReducer;