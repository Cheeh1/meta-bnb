import React, { useState } from "react";
import MenuCss from '../styles/Menu.module.css'
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
// import { close } from "../assets";

const Menu = (props) => {
    const modalState = props.toggle
    const [modalOpen, setModalOpen] = useState(false)

    const modalToggle = () => {
      setModalOpen(!modalOpen)
    }
    
    // const action = props.action

  return (
    <>
      <nav className={`${MenuCss.display} ${ modalState ? MenuCss.active : ''}`}>
        <div className={MenuCss.mobileFlex}>
            {/* <img className={MenuCss.closeBtn} onClick={action} src={close} alt="close-btn" /> */}
          <ul className={MenuCss.mobileList}>
            <li>
              <NavLink className={(navData) => navData.isActive ? MenuCss.activelink  : MenuCss.mobilelink } to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? MenuCss.activelink  : MenuCss.mobilelink } to="/placeToStay">
                Place to stay
              </NavLink>
            </li>
            <li>
              <a className={MenuCss.mobilelink} href="nfts">
                NFTs
              </a>
            </li>
            <li>
              <a className={MenuCss.mobilelink} href="#community">
                Community
              </a>
            </li>
          </ul>
          <div>
            <button onClick={modalToggle} className={MenuCss.mobileBtn2}>Connect wallet</button>
            < Modal toggle={modalOpen} action={modalToggle}/>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
