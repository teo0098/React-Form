const reducer = (state, action) => {
    switch (action.type) {
        case 'EMAIL':
            return {
                ...state,
                email: { value: action.value }
            };
        case 'PASS':
            return {
                ...state,
                pass: { value: action.value }
            };
        case 'RPASS':
            return {
                ...state,
                rpass: { value: action.value }
            };
        case 'EMAILERROR':
            return {
                ...state,
                emailError: { value: 'Incorrect email' }
            };
        case 'PASSERROR':
            return {
                ...state,
                passError: { value: 'Password must consist of 8 to 30 characters like (@ ! $ # - _ letters digits)' }
            };
        case 'RPASSERROR':
            return {
                ...state,
                rpassError: { value: 'Passwords don\'t match' }
            };
        case 'CLEAR':
            return {
                email: { value: '' },
                pass: { value: '' },
                rpass: { value: '' },
                emailError: { value: '' },
                passError: { value: '' },
                rpassError: { value: '' }
            };
        default:
            return {
                ...state,
                emailError: { value: '' },
                passError: { value: '' },
                rpassError: { value: '' }
            };
    }
};

export default reducer;