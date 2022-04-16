import SignUp from "../../components/signup/signup";
import SignIn from "../../components/sign-in/signIn";
import "./authentication.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
