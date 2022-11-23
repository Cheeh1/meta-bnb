import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { close, logo, menuBtn } from "../assets";
import NavbarCss from "../styles/Navbar.module.css";
import Menu from "./Menu";
import Modal from "./Modal";

const Navbar = () => {
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(!modalState)
  }

  return (
    <>
      <nav className={NavbarCss.nav}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className={NavbarCss.navlist}>
          <li>
            <Link className={NavbarCss.navlink} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={NavbarCss.navlink} to="/placeToStay">
              Place to stay
            </Link>
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
          <button className={NavbarCss.navbtn}>Connect waallet</button>
        </div>
      </nav>

      < Modal />

      {/* Mobile Navbar */}
      <nav className={NavbarCss.mobileNav}>
        <img src={logo} alt="logo" />
        <div onClick={openModal}  className={NavbarCss.mobileBtn}>
          { !modalState 
            ? 
          (<img
            src={menuBtn}
            alt="logo"
          />) 
            :
          (<img  
            className={NavbarCss.closeBtn}
            src={close} 
            alt="close-btn" 
          />)
          }
        </div>
      </nav>

          {/* Mobile Navbar menu */}
      < Menu toggle={modalState} action={openModal}/>
    </>
  );
};
export default Navbar;
