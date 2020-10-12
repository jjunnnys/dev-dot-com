import React, { useCallback } from 'react';
import SignUpPresentainal from '../../components/Auth/SignUpPresentainal';
import useInput from '../../hooks/useInput';
import { onSubmitType } from '../../lib/types';

function Signup() {
  const [username, onChangeUsername] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [rePassword, onChangeRePassword] = useInput('');

  const onSubmitSignUp: onSubmitType = useCallback(
    (e) => {
      e.preventDefault();

      console.log(username, email, password, rePassword);
    },
    [username, email, password, rePassword],
  );

  return (
    <SignUpPresentainal
      name={username}
      onChangeName={onChangeUsername}
      email={email}
      onChangeEmail={onChangeEmail}
      password={password}
      onChangePassword={onChangePassword}
      rePassword={rePassword}
      onChangeRePassword={onChangeRePassword}
      onSubmitSignUp={onSubmitSignUp}
    />
  );
}

export default Signup;
