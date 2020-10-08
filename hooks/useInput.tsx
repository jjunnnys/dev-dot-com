import { useState, useCallback } from 'react';
import { onChangeType } from '../lib/types';

const useInput = (initialValue = ''): [string, onChangeType, () => void] => {
  const [value, setVlaue] = useState(initialValue);

  const handler: onChangeType = useCallback((e) => {
    const { value } = e.target;

    setVlaue(() => value);
  }, []);

  const reset = () => setVlaue(() => '');

  return [value, handler, reset];
};

export default useInput;
