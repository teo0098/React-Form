import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import initialState from './Reducer/InitialState';
import reducer from './Reducer/Reducer';

const Form1 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const validateCredentials = (type, pattern) => {
        if (pattern.test(state[type].value) === false || state[type].value.trim() === '') {
            dispatch({ type: `${type.toUpperCase()}ERROR` });
            return false;
        } 
        else dispatch({ type: '' });
        return true;
    }

    const changeValue = target => {
        const { name, value } = target;
        dispatch({ type: name.toUpperCase(), value });
        switch (name) {
            case 'name': 
                validateCredentials('name', /^[A-Za-z\s]{2,15}$/);
            break;
            case 'lastname':
                validateCredentials('lastname', /^[A-Za-z\s]{2,20}$/);
            break;
            default: dispatch({ type: 'GENDER', value });
        }
    }
    
    const validateData = () => {
        if (validateCredentials('name', /^[A-Za-z\s]{2,15}$/) && validateCredentials('lastname', /^[A-Za-z\s]{2,20}$/)) return true;
        return false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateData()) console.log('DONE');
    }

    return (
        <form onSubmit={handleSubmit} className="App__Form" autoComplete="off" noValidate>
            <TextField name="name" id="filled-basic" label="Name" variant="filled" value={state.name.value} 
            onChange={e => changeValue(e.target)} />
    
            {state.nameError.value !== '' ? <Alert severity="error">{state.nameError.value}</Alert> : null}
    
            <TextField name="lastname" id="filled-basic" label="Last name" variant="filled" value={state.lastname.value}
            onChange={e => changeValue(e.target)} />
    
            {state.lastnameError.value !== '' ? <Alert severity="error">{state.lastnameError.value}</Alert> : null}
    
            <RadioGroup aria-label="gender" name="gender" value={state.gender.value} 
            onChange={e => changeValue(e.target)}>
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            </RadioGroup>
    
            <Button type="submit" variant="contained" color="primary">Next step</Button>
        </form>
    ) 
}

export default Form1;