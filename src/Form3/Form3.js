import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import reducer from './Reducer/Reducer';
import initialState from './Reducer/InitialState';
import Alert from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import mapDispatchToProps from '../store/globalAction';

const Form3 = props => {
    const [state, dispatch] = useReducer(reducer, initialState);    

    const validateCredentials = (name, type, checked) => {
        dispatch({ type, checked });
        if (!checked) {
            dispatch({ type: `${name.toUpperCase()}ERROR` });
            return false;
        }
        dispatch({ type: '' });
        return true;
    }

    const changeValue = target => {
        const { name, checked } = target;
        switch (name) {
            case 'checkbox1': validateCredentials('checkbox1', 'TERMS', checked);
            break;
            case 'checkbox2': validateCredentials('checkbox2', 'PROCESS', checked);
            break;
            default: validateCredentials('checkbox3', 'UPDATE', checked);
        }
    }

    const validateData = () => {
        if (state.checkbox1.checked && state.checkbox2.checked) return true;
        if (state.checkbox1.checked === false) dispatch({ type: 'CHECKBOX1ERROR' });
        else if (state.checkbox2.checked === false) dispatch({ type: 'CHECKBOX2ERROR' });
        return false;
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validateData()) {
            props.setForm3({
                agreement: state.checkbox1.value,
                processing: state.checkbox2.value,
                updating: state.checkbox3.value
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="App__Form">
            <FormControlLabel
            control={<Checkbox color="primary" checked={state.checkbox1.checked} name="checkbox1" 
                        value={state.checkbox1.value} onChange={e => changeValue(e.target)}/>}
            label="I have read the rules and I agree on terms of using this website"
            />

            {state.checkbox1Error.value !== '' ? <Alert severity="error">{state.checkbox1Error.value}</Alert> : null}

            <FormControlLabel
            control={<Checkbox color="primary" checked={state.checkbox2.checked} name="checkbox2" 
                        value={state.checkbox2.value} onChange={e => changeValue(e.target)} />}
            label="I agree on processing my personal data"
            />

            {state.checkbox2Error.value !== '' ? <Alert severity="error">{state.checkbox2Error.value}</Alert> : null}

            <FormControlLabel
            control={<Checkbox color="primary" checked={state.checkbox3.checked} name="checkbox3" 
                        value={state.checkbox3.value} onChange={e => changeValue(e.target)} />}
            label="I want to have emails sent to me about any updates"
            />
            <Button type="submit" variant="contained" color="primary">Sign me up</Button>
            <Button onClick={props.goPrev} variant="contained" color="secondary">Previous step</Button>
        </form>
    );
};

export default connect(null, mapDispatchToProps)(Form3);