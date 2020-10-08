import React from 'react';
import { Button } from 'antd';
import { AuthInput, AuthForm } from './styles';
import { onChangeType, onSubmitType } from '../../lib/types';

type SignUpPresentainalProps = {
  name: string;
  onChangeName: onChangeType;
  email: string;
  onChangeEmail: onChangeType;
  password: string;
  onChangePassword: onChangeType;
  rePassword: string;
  onChangeRePassword: onChangeType;
  onSubmitSignUp: onSubmitType;
};

function SignUpPresentainal({
  name,
  onChangeName,
  email,
  onChangeEmail,
  password,
  onChangePassword,
  rePassword,
  onChangeRePassword,
  onSubmitSignUp,
}: SignUpPresentainalProps) {
  return (
    <AuthForm onSubmit={onSubmitSignUp}>
      <h1 style={{ fontSize: '2rem' }}>회원가입</h1>
      <div className="auth-column">
        <label htmlFor="name">이름</label>
        <br />
        <AuthInput
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={onChangeName}
          size="large"
          required
        />
      </div>
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
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
          size="large"
          required
        />
      </div>
      <div className="auth-column">
        <label htmlFor="re-password">비밀번호 확인</label>
        <br />
        <AuthInput
          type="password"
          name="re-password"
          placeholder="패스워드 확인"
          value={rePassword}
          onChange={onChangeRePassword}
          size="large"
          required
        />
      </div>
      <Button type="primary" htmlType="submit" size="large">
        회원가입
      </Button>
    </AuthForm>
  );
}

export default SignUpPresentainal;
