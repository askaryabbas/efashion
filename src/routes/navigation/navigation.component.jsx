import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as EfashionLogo } from "../../assets/efashion.svg";
import CartIcon from "../../components/cart-icon/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className='navigation'>
        <div className='logo-container'>
          <Link className='nav-link' to='/'>
            <EfashionLogo className='logo' />
          </Link>
        </div>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <Link className='nav-link' to='/auth' onClick={signOutUser}>
              Logout
            </Link>
          ) : (
            <Link className='nav-link' to='/auth'>
              Login
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
