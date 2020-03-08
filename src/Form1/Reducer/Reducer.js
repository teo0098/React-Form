const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {
                ...state,
                name: { value: action.value }
            };
        case 'LASTNAME':
            return {
                ...state,
                lastname: { value: action.value }
            };
        case 'GENDER':
            return {
                ...state,
                gender: { value: action.value }
            };
        case 'NAMEERROR':
            return {
                ...state,
                nameError: { value: 'Name must consist of 2 to 15 letters or spaces' }
            };
        case 'LASTNAMEERROR':
            return {
                ...state,
                lastnameError: { value: 'Last name must consist of 2 to 20 letters or spaces'}
            };
        case 'CLEAR':
            return {
                name: { value: '' },
                lastname: { value: '' },
                gender: { value: 'female' },
                nameError: { value: '' },
                lastnameError: { value: '' }
            }
        default:
            return {
                ...state,
                nameError: { value: '' },
                lastnameError: { value: '' } 
            };
    }
}

export default reducer;