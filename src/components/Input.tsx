import styled from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';

const StyledInput = styled.input`
  outline: none;
`;

type InputProps = {} & ComponentPropsWithoutRef<'input'>;

const Input = ({ ...restProps }: InputProps) => {
  return <StyledInput {...restProps} />;
};

export default Input;
