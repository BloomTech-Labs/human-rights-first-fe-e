import { formatCountdown } from 'antd/lib/statistic/utils';
import React, { useState } from 'react';
import { ModalDiv, XButton } from './styledElements';

const initialForm = {
  username: '',
  password: '',
  anythingElse: '',
};

const SignInModal = props => {
  const [formInput, setFormInput] = useState(initialForm);

  return (
    <ModalDiv>
      <p>{props.signIn === 'SignIn' ? 'Sign In' : 'Sign Up'}</p>
      <XButton
        onClick={e => {
          e.preventDefault();
          props.setSignIn(false);
        }}
      >
        X
      </XButton>
    </ModalDiv>
  );
};

export default SignInModal;
