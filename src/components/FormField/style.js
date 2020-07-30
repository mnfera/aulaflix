import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 28px;
  padding-top: 12px;
  position: relative;
  label {
    color: var(--color-gray-dark);
    font-size: 18px;
    left: 0;
    margin-left: 8px;
    margin-top: 26px;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: all 0.3s ease-out;
  }
  input,
  textarea {
    background: #53585D;
    border: 0;
    border-radius: 4px;
    color: var(--color-gray-dark);
    font-size: 18px;
    outline: 0;
    transition: all 0.2s ease-out;
    width: 100%;
    &::placeholder {
      color: transparent;
    }
    &:focus ~ label,
    &:not(:placeholder-shown) + label {
      font-size: 11px;
      margin-top: -5px;
      margin-left: 3px;
      opacity: 0.7;
    }
  }
  input {
    display: ${(props) => (props.type === "textarea" ? "none" : "block")};
    padding: ${(props) => (props.type === "color" ? "0" : "15px 7px")};
  }
  textarea {
    display: ${(props) => (props.type === "textarea" ? "block" : "none")};
    padding: 15px 7px;
  }
`;

export default InputWrapper;