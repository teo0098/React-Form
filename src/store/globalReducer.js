import initialState from './globalInitialState';

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM1':
            return {
                ...state,
                form1: { values: action.values }
            }
        case 'FORM2':
            return {
                ...state,
                form2: { values: action.values }
            }
        case 'FORM3':
            return {
                ...state,
                form3: { values: action.values }
            }
        case 'CLEAR':
            return {
                form1: { values: {} },
                form2: { values: {} },
                form3: { values: {} }
            }
        default:
            return state;
    }
}

export default globalReducer;