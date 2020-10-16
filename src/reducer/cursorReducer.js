const mainReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_CURSOR_STYLE':
            return {...state, cursorStyle: action.payload};
        default:
            return state;
    }
}

export default mainReducer;