const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, action) => {
    swicth (action.type) {
        default:
            return state
    }
}