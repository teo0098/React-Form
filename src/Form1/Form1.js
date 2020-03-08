import React, { useReducer } from 'react';
import './Form1.css';
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

    const changeValue = (target) => {
        const { name, value } = target;
        dispatch({ type: name.toUpperCase(), value });
        switch (name) {
            case 'name': 
                if (/^[A-Za-z\s]{2,15}$/.test(state[`${name}`].value) === false || state[`${name}`].value.trim() === '') {
                    dispatch({ type: 'NAMEERROR' });
                } 
                else dispatch({ type: '' });
            break;
            case 'lastname':
                if (/^[A-Za-z\s]{2,15}$/.test(state[`${name}`].value) === false || state[`${name}`].value.trim() === '') {
                    dispatch({ type: 'LASTNAMEERROR' });
                } 
                else dispatch({ type: '' });
            break;
            default: dispatch({ type: 'GENDER', value });
        }
    }
    
    const validateData = () => {
        let validData = true;

        if (/^[A-Za-z\s]{2,15}$/.test(state.name.value) === false || state.name.value.trim() === '') {
            validData = false;
            dispatch({ type: 'NAMEERROR' });
        }
        else {
            validData = true;
            dispatch({ type: '' });
        }

        if (/^[A-Za-z\s]{2,15}$/.test(state.lastname.value) === false || state.lastname.value.trim() === '') {
            validData = false;
            dispatch({ type: 'LASTNAMEERROR' });
        } 
        else {
            validData = true;
            dispatch({ type: '' });
        } 

        if (!validData) return false;
        return true;
    };

    const handleSubmit1Form = event => {
        event.preventDefault();
        if (validateData()) console.log('DONE');
    }

    return (
        <form onSubmit={handleSubmit1Form} className="Form1" autoComplete="off" noValidate>
            <TextField name="name" id="filled-basic" label="Your name" variant="filled" value={state.name.value} 
            onChange={(e) => changeValue(e.target)} />
    
            {state.nameError.value !== '' ? <Alert severity="error">{state.nameError.value}</Alert> : null}
    
            <TextField name="lastname" id="filled-basic" label="Your last name" variant="filled" value={state.lastname.value}
            onChange={(e) => changeValue(e.target)} />
    
            {state.lastnameError.value !== '' ? <Alert severity="error">{state.lastnameError.value}</Alert> : null}
    
            <RadioGroup aria-label="gender" name="gender" value={state.gender.value} 
            onChange={(e) => changeValue(e.target)}>
    
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
        
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
    
            </RadioGroup>
    
            <Button type="submit" variant="contained" color="primary">
                Next step
            </Button>
        </form>
    ) 
}

export default Form1;