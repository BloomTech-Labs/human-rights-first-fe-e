import React, { useState } from 'react';
import '../../styles/index.css';

const NavBar = () => {
  // STATE HELD FOR RENDERING LOGIN/SIGNUP FORMS
  const [signInUp, setSignInUp] = useState(false);

  return (
    <div className="logo-pane">
      <div className="company-info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Ubuntu_logo_copyleft_1.svg/1200px-Ubuntu_logo_copyleft_1.svg.png"
          alt="Human Rights First logo"
        />
        <h2 style={{ margin: 0 }}>Human Rights First</h2>
      </div>
      <div className="user-nav">
        <button
          onClick={e => {
            e.preventDefault();
            setSignInUp('login');
          }}
        >
          Sign In
        </button>

        <button
          onClick={e => {
            e.preventDefault();
            setSignInUp('signup');
          }}
        >
          Sign Up
        </button>
      </div>

      {signInUp && (
        <div
          style={{
            position: 'absolute',
            margin: 'auto',
            top: '50%',
            right: '30%',
            width: '20%',
            height: '20%',
            textAlign: 'center',
          }}
        >
          <p>{signInUp === 'login' ? 'Login' : 'Sign Up'}</p>
          <button
            onClick={e => {
              e.preventDefault();
              setSignInUp(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
export default NavBar;
