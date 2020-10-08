import { Input } from 'antd';
import styled from 'styled-components';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: auto;

  .auth-column {
    margin-top: 1rem;
  }
`;

export const AuthInput = styled(Input)`
  border-radius: 10px;
`;
