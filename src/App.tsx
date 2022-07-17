import reset from 'styled-reset';
import styled, { createGlobalStyle } from 'styled-components';

import Input from './components/Input';
import useInput from './hooks/useInput';
import Textarea from './components/Textarea';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Wrapper = styled.div`
  padding: 30px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

function App() {
  const { value, onChange } = useInput('hello');

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <InputWrapper>
          <h2>Input components</h2>
          <Input placeholder="test" />
        </InputWrapper>

        <InputWrapper>
          <h2>useInput</h2>
          <input value={value} onChange={onChange} />
        </InputWrapper>

        <InputWrapper>
          <h2>Textarea</h2>
          <Textarea />
        </InputWrapper>
      </Wrapper>
    </>
  );
}

export default App;
