import React, { useState } from "react";

const SignInForm = ({ onSwitchForm }) => {
  return (
    <div className="login">
      {/* Add your login form content here */}
      <button onClick={onSwitchForm}>Sign Up</button>
    </div>
  );
};

const SignUpForm = ({ onSwitchForm }) => {
  return (
    <div className="register">
      {/* Add your registration form content here */}
      <button onClick={onSwitchForm}>Sign In</button>
    </div>
  );
};
