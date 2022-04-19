import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState, useContext } from "react";
import {
  createAuthUserEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import { UserContext } from "../../contexts/user.context";
import "./signUpForm.scss";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserEmailPassword(email, password);
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name={"displayName"}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name={"email"}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name={"password"}
          value={password}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name={"confirmPassword"}
          value={confirmPassword}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUp;
