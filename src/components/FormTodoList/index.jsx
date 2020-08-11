import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormTodoList.propTypes = {
    onSubmitForm: PropTypes.func,
};

FormTodoList.defaultProps = {
    obSubmitForm: null
}


function FormTodoList(props) {

    const { onSubmitForm } = props;
    const [value, setValue] = useState('');
    function handleChangeValue(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmitForm) return;

        const formValue = {
            title: value,
        };
        onSubmitForm(formValue);

        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChangeValue} />
        </form>
    );
}

export default FormTodoList;