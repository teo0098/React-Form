const mapDispatchToProps = dispatch => {
    return {
        setForm1: values => dispatch({ type: 'FORM1', values }),
        setForm2: values => dispatch({ type: 'FORM2', values }),
        setForm3: values => dispatch({ type: 'FORM3', values })
    }
}

export default mapDispatchToProps;