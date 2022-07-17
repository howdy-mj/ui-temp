import styled from 'styled-components';
import { ComponentPropsWithoutRef } from 'react';

const StyledTextarea = styled.textarea`
  outline: none;
`;

type TextareaProps = {} & ComponentPropsWithoutRef<'textarea'>;

const Textarea = ({ ...restProps }: TextareaProps) => {
  return <StyledTextarea {...restProps} />;
};

export default Textarea;
