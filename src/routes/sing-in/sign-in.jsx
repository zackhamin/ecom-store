import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/signup/signup";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <button onClick={logGoogleUser}> Sign in with Google</button>
      <SignUp />
    </div>
  );
};
export default SignIn;
