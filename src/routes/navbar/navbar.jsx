import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signUserOut } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";

import "./navigation.styles.scss";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { IsCartOpen, setIsCartOpen } = useContext(CartContext);

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
        {IsCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
