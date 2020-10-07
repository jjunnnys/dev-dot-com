import React, { FC, useState } from 'react';

import LoginPresentainal from '../components/Auth/LoginPresentainal';

interface Props {}

const Login: FC = (props: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginPresentainal
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
    />
  );
};

export default Login;
