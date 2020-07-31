import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './style';

const FormField = ({
  label, type, name, value, onChange,
}) => (
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
    <label htmlFor={name}>{label}</label>
  </InputWrapper>
);

FormField.defaultProps = {
  type: 'text',
  value: 'text',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
