import { formatCountdown } from 'antd/lib/statistic/utils';
import React, { useState } from 'react';
import {
  ModalDiv,
  XButton,
  ModalInput,
  ModalForm,
  ModalSubmit,
} from './styledElements';

const initialForm = {
  username: '',
  password: '',
  anythingElse: '',
};

const SignInModal = props => {
  const [formInput, setFormInput] = useState(initialForm);

  const handleChanges = e => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (props.signIn === 'Sign Up') {
      // HANDLE SIGN UP
    } else {
      // HANDLE SIGN IN
    }
  };

  return (
    <ModalDiv>
      <p>{props.signIn}</p>
      <XButton
        onClick={e => {
          e.preventDefault();
          props.setSignIn(false);
        }}
      >
        X
      </XButton>

      <ModalForm>
        <label>Username: </label>
        <ModalInput
          type="text"
          name="username"
          onChange={handleChanges}
          value={formInput.username}
        ></ModalInput>
        <label>Password: </label>
        <ModalInput
          type="text"
          name="password"
          onChange={handleChanges}
          value={formInput.password}
        ></ModalInput>
        <ModalSubmit onClick={handleSubmit}>Submit</ModalSubmit>
      </ModalForm>
    </ModalDiv>
  );
};

export default SignInModal;
