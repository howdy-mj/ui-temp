import { ChangeEvent, useCallback, useState } from 'react';

const useInput = (initialValue = '') => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;
