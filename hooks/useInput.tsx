import { useState, useCallback } from 'react';

interface Props {
  initialValue: string;
}

const useInput = ({ initialValue }: Props) => {
  const [value, setVlaue] = useState<string>(initialValue);

  const handler = useCallback((e) => {
    setVlaue(e.target.value);
  }, []);

  return [value, handler, setVlaue];
};

export default useInput;
