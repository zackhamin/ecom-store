import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react";
import {
  createAuthUserEmailPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../formInput/formInput";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserEmailPassword(email, password);
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
    <div>
      <h1>Sign up with email and password</h1>
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
        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
