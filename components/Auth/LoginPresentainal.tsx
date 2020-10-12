import React from 'react';
import { Button } from 'antd';
import { AuthInput, AuthForm } from './styles';
import { onChangeType } from '../../lib/types';

type LoginPresentainalProps = {
  email: string;
  onChangeEmail: onChangeType;
  password: string;
  onChangePassword: onChangeType;
};

function LoginPresentainal({
  email,
  onChangeEmail,
  password,
  onChangePassword,
}: LoginPresentainalProps) {
  return (
    <AuthForm>
      <h1 style={{ fontSize: '2rem' }}>로그인</h1>
      <div className="auth-column">
        <label htmlFor="email">이메일</label>
        <br />
        <AuthInput
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={onChangeEmail}
          size="large"
          required
        />
      </div>
      <div className="auth-column">
        <label htmlFor="password">비밀번호</label>
        <br />
        <AuthInput
          type="password"
          name="password"
          placeholder="패스워드를 입력해주세요"
          value={password}
          onChange={onChangePassword}
          size="large"
          required
        />
      </div>
      <Button type="primary" htmlType="submit" size="large">
        로그인
      </Button>
    </AuthForm>
  );
}

export default LoginPresentainal;
