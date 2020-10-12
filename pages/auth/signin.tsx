import React from 'react';

import LoginPresentainal from '../../components/Auth/LoginPresentainal';
import useInput from '../../hooks/useInput';

function SignIn() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  return (
    <LoginPresentainal
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
    />
  );
}

export default SignIn;
