import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as EfashionLogo } from "../../assets/efashion.svg";
import "./navigation.styles.scss";
const Navigation = () => {
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
          <Link className='nav-link' to='/login'>
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
