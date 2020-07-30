import React from 'react';
import InputWrapper from './style';

const FormField = ({ label, type, name, value, onChange }) => (
    <InputWrapper filled={!!value} type={type}>
        <textarea
            value={value}
            name={name}
            placeholder={label}
            onChange={onChange}
            rows="4"
        />
        <input
            type={type}
            value={value}
            name={name}
            placeholder={label}
            onChange={onChange}
        />
        <label>{label}</label>
    </InputWrapper>
);

export default FormField;