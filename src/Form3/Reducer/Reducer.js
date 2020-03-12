const reducer = (state, action) => {
    switch (action.type) {
        case 'TERMS':
            return {
                ...state,
                checkbox1: { value: 'TERMS', checked: action.checked }
            };
        case 'PROCESS':
            return {
                ...state,
                checkbox2: { value: 'PROCESS', checked: action.checked }
            };
        case 'UPDATE':
            return {
                ...state,
                checkbox3: { value: 'UPDATE', checked: action.checked }
            };
        case 'CHECKBOX1ERROR':
            return {
                ...state,
                checkbox1Error: { value: 'This field is required' }
            };
        case 'CHECKBOX2ERROR':
            return {
                ...state,
                checkbox2Error: { value: 'This field is required' }
            };
        default:
            return {
                ...state,
                checkbox1Error: { value: '' },
                checkbox2Error: { value: '' }
            }
    }
};

export default reducer;