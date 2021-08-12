import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignInDropdown from "../sign-in-dropdown/sign-in-dropdown.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

import { useDetectOutsideClick } from "./useDetectOutsideClick";

import { createStructuredSelector } from "reselect";
import {
  selectCurrentUser,
  selectUserSignInHidden,
} from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  toggleUserSignInHidden,
  signOutStart,
} from "../../redux/user/user.actions";

import Logo from "../../assets/svg/logo.svg";
import SignOutIcon from "../../assets/svg/logout.svg";
import UserIcon from "../../assets/svg/user.svg";
import MenuIcon from "../../assets/svg/menu.svg";
import HomeIcon from "../../assets/svg/home.svg";
import ShopIcon from "../../assets/svg/shop.svg";
import RentIcon from "../../assets/svg/snowflake-o.svg";
import ContactIcon from "../../assets/svg/phone.svg";
import ResturantIcon from "../../assets/svg/spoon-knife.svg";
import SignInIcon from "../../assets/svg/enter.svg";

// * pass properties into functional Component
function Header({
  currentUser,
  userSignInHidden,
  cartHidden,
  toggleUserSignInHidden,
  signOutStart,
}) {
  const [smallScreen, setScreen] = useState(
    document.documentElement.clientWidth < 600
  );

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // * ture/false depending on the screen size -> render normal OR mobile navigation
  const setScreenSize = () => {
    setScreen(document.documentElement.clientWidth < 600);
  };

  window.addEventListener("resize", setScreenSize);

  return (
    <div className="header">
      <Link className="header__logo-container" to="/">
        <img src={Logo} className="header__logo" alt="logo" />
      </Link>

      {/* render normal or mobile navigation depending on the screen size */}
      {smallScreen ? (
        <div className="mobile-menu">
          <button onClick={onClick} className="mobile-menu--trigger">
            <img
              src={MenuIcon}
              className="mobile-menu__icon"
              alt="User avatar"
            />
          </button>
          <nav
            ref={dropdownRef}
            className={`mobile-menu__dropdown ${
              isActive ? "active" : "inactive"
            }`}
          >
            <ul>
              <li>
                {currentUser ? (
                  <div
                    className="header__options--option"
                    onClick={signOutStart}
                  >
                    <img
                      src={UserIcon}
                      alt="User Icon"
                      className="mobile-menu__dropdown__icon"
                    />
                    <span>
                      {currentUser.firstName + " " + currentUser.lastName}
                    </span>
                  </div>
                ) : (
                  <div
                    className="header__options--option header__options--option--SignIn"
                    onClick={toggleUserSignInHidden}
                  >
                    <img
                      src={SignInIcon}
                      alt="SignIn Icon"
                      className="mobile-menu__dropdown__icon"
                    />
                    SIGN IN / REGISTER
                  </div>
                )}
              </li>

              <li>
                <Link className="header__options--option" to="/">
                  <img
                    src={HomeIcon}
                    alt="Home Icon"
                    className="mobile-menu__dropdown__icon"
                  />
                  HOME
                </Link>
              </li>

              <li>
                <Link className="header__options--option" to="/restaurant">
                  <img
                    src={ResturantIcon}
                    alt="Resturant Icon"
                    className="mobile-menu__dropdown__icon"
                  />
                  RESTAURANT
                </Link>
              </li>

              <li>
                <a
                  className="header__options--option"
                  href="https://www.tracksport.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ShopIcon}
                    alt="Shop Icon"
                    className="mobile-menu__dropdown__icon"
                  />
                  SHOP
                </a>
              </li>

              <li>
                <Link className="header__options--option" to="/rental">
                  <img
                    src={RentIcon}
                    alt="Rent Icon"
                    className="mobile-menu__dropdown__icon"
                  />
                  RENTAL
                </Link>
              </li>

              <li>
                <Link className="header__options--option" to="/contact">
                  <img
                    src={ContactIcon}
                    alt="Contact Icon"
                    className="mobile-menu__dropdown__icon"
                  />
                  CONTACT
                </Link>
              </li>

              <li>
                {currentUser ? (
                  <div
                    className="header__options--option"
                    onClick={signOutStart}
                  >
                    <img
                      src={SignOutIcon}
                      alt="SignOut Icon"
                      className="mobile-menu__dropdown__icon"
                    />
                    SIGN OUT
                  </div>
                ) : null}
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header__options">
          <Link className="header__options--option" to="/">
            <img src={HomeIcon} alt="Home Icon" className="header__icon" />
            HOME
          </Link>

          <Link className="header__options--option" to="/restaurant">
            <img
              src={ResturantIcon}
              alt="Resturant Icon"
              className="header__icon"
            />
            RESTAURANT
          </Link>

          <a
            className="header__options--option"
            href="https://www.tracksport.ro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ShopIcon} alt="Shop Icon" className="header__icon" />
            SHOP
          </a>

          <Link className="header__options--option" to="/rental">
            <img src={RentIcon} alt="Rent Icon" className="header__icon" />
            RENTAL
          </Link>

          <Link className="header__options--option" to="/contact">
            <img
              src={ContactIcon}
              alt="Contact Icon"
              className="header__icon"
            />
            CONTACT
          </Link>

          {currentUser ? (
            <Link className="header__options--option" onClick={signOutStart}>
              <img src={UserIcon} alt="User Icon" className="header__icon" />
              <div className="header__options--user">
                <span className="header__options--user header__options--user__visible">
                  {currentUser.firstName + " " + currentUser.lastName}
                </span>
                <span className="header__options--user header__options--user__invisible">
                  SIGN OUT
                </span>
              </div>
            </Link>
          ) : (
            <div
              className="header__options--option header__options--option--SignIn"
              onClick={toggleUserSignInHidden}
            >
              <img
                src={SignInIcon}
                alt="SignIn Icon"
                className="header__icon"
              />
              SIGN IN / REGISTER
            </div>
          )}

          <CartIcon />
        </div>
      )}
      {/* render Components depending on the state */}
      {userSignInHidden ? null : <SignInDropdown />}
      {cartHidden ? null : <CartDropdown />}
    </div>
  );
}

// * connect to Redux state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden,
  userSignInHidden: selectUserSignInHidden,
});

// * dispatch function to the Redux store
const mapDispatchToProps = (dispatch) => ({
  toggleUserSignInHidden: () => dispatch(toggleUserSignInHidden()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
