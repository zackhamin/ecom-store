import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";

import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />{" "}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="auth" onClick={signUserOut}>
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="auth">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
