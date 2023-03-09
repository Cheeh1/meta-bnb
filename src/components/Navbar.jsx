import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { close, logo, menuBtn } from "../assets";
import NavbarCss from "../styles/Navbar.module.css";
import Menu from "./Menu";
import Modal from "./Modal";

const Navbar = () => {
  const [modalState, setModalState] = useState(false)
  const [toggleState, setToggleState] = useState(false)

  const openModal = () => {
    setModalState(!modalState)
  }

  const openToggle = () => {
    setToggleState(!toggleState)
  }

  return (
    <>
      <nav className={NavbarCss.nav}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className={NavbarCss.navlist}>
          <li>
            <NavLink className={(navData) => navData.isActive ? NavbarCss.active : NavbarCss.navlink } to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? NavbarCss.active  : NavbarCss.navlink } to="/placeToStay">
              Place to stay
            </NavLink>
          </li>
          <li>
            <a className={NavbarCss.navlink} href="#nfts">
              NFTs
            </a>
          </li>
          <li>
            <a className={NavbarCss.navlink} href="#community">
              Community
            </a>
          </li>
        </ul>

        <div>
          <button onClick={openToggle} className={NavbarCss.navbtn}>
            Connect waallet
          </button>
          <Modal toggle={toggleState} action={openToggle} />
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className={NavbarCss.mobileNav}>
        <img src={logo} alt="logo" />
        <div onClick={openModal} className={NavbarCss.mobileBtn}>
          {!modalState ? (
            <img src={menuBtn} alt="logo" />
          ) : (
            <img className={NavbarCss.closeBtn} src={close} alt="close-btn" />
          )}
        </div>
      </nav>

      {/* Mobile Navbar menu */}
      <Menu toggle={modalState} action={openModal} />
    </>
  );
};
export default Navbar;
