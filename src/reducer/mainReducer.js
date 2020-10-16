const mainReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_ACTIVE':
            return {...state, active: action.payload};
        case 'UPDATE_PREV_ACTIVE':
            return {...state, prevActive: action.payload};
        case 'UPDATE_LANG':
            return {...state, language: action.payload};
        case 'UPDATE_DROPDOWN_MENU':
            return {...state, dropdownMenu: action.payload};
        case 'UPDATE_DROPDOWN_MENU_BOTTOM':
            return {...state, dropdownMenuBottom: action.payload};
        default:
            return state;
    }
}

export default mainReducer;