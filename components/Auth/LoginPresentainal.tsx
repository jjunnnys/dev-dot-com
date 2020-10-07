import React from 'react';
import { Form, Input } from 'antd';
import styled from 'styled-components';

interface Props {
  email: string;
  onChangeEmail: any;
  password: any;
  onChangePassword: any;
}

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: auto;

  .login-column {
    margin-top: 1rem;
  }
`;

const LoginInput = styled(Input)``;

const LoginPresentainal = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
}: Props) => {
  return (
    <LoginForm>
      <div className="login-column">
        <label htmlFor="email">email</label>
        <br />
        <LoginInput
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="login-column">
        <label htmlFor="password">password</label>
        <br />
        <LoginInput
          type="password"
          name="password"
          placeholder="패스워드를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
      </div>
    </LoginForm>
  );
};

export default LoginPresentainal;
