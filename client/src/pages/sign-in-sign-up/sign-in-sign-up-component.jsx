import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up-page background">
    <div className="sign-in-and-sign-up--container">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
