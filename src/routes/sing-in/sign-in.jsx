import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response);
  };
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}> Sign in with Google</button>
    </div>
  );
};
export default SignIn;
