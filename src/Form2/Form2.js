import React, { useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import reducer from './Reducer/Reducer';
import initialState from './Reducer/InitialState';
import validator from 'validator';
import Alert from '@material-ui/lab/Alert';
import mapDispatchToProps from '../store/globalAction';
import { connect } from 'react-redux';

const Form2 = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const validateCredentials = (type, pattern) => {
        if (!pattern || state[type].value.trim() === '') {
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
            case 'email':
                validateCredentials('email', validator.isEmail(value));
            break;
            case 'pass':
                validateCredentials('pass', /^[A-Za-z0-9@!#$\-_]{8,30}$/.test(value));
            break;
            default: validateCredentials('rpass', value === state.pass.value);
        }
    }

    const validateData = () => {
        if (validateCredentials('email', validator.isEmail(state.email.value)) 
            && validateCredentials('pass', /^[A-Za-z0-9@!#$\-_]{8,30}$/.test(state.pass.value))
            && validateCredentials('rpass', state.rpass.value === state.pass.value)) return true;
        return false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateData()) {
            props.setForm2({
                email: state.email.value,
                password: state.pass.value
            });
            props.goNext();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="App__Form" autoComplete="off" noValidate>
            <TextField autoComplete="nope" name="email" label="Email" variant="filled" value={state.email.value} 
            onChange={e => changeValue(e.target)}/>

            {state.emailError.value !== '' ? <Alert severity="error">{state.emailError.value}</Alert> : null}

            <TextField type="password" name="pass" label="Password" variant="filled" value={state.pass.value}
            onChange={e => changeValue(e.target)} />

            {state.passError.value !== '' ? <Alert severity="error">{state.passError.value}</Alert> : null}

            <TextField type="password" name="rpass" label="Repeat password" variant="filled" value={state.rpass.value}
            onChange={e => changeValue(e.target)} />

            {state.rpassError.value !== '' ? <Alert severity="error">{state.rpassError.value}</Alert> : null}

            <Button type="submit" variant="contained" color="primary">Next step</Button>
            <Button onClick={props.goPrev} variant="contained" color="secondary">Previous step</Button>
        </form>
    );
};

export default connect(null, mapDispatchToProps)(Form2);