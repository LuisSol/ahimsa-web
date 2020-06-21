import types from './actionTypes'

const defaultState = {
    routineIndex: 0,
    routine: {}
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