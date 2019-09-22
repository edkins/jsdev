function panel(state = {active:'module'}, action) {
    switch (action.type) {
        case 'GET_MODULE_SUCCESS':
            return {active:'module'};
        case 'GET_FILE_SUCCESS':
            return {active:'file'};
        default:
            return state;
    }
}

export default panel;
