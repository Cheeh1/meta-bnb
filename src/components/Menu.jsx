import React, { useState } from "react";
import MenuCss from '../styles/Menu.module.css'
import { Link } from "react-router-dom";
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
              <Link className={MenuCss.mobilelink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={MenuCss.mobilelink} to="/placeToStay">
                Place to stay
              </Link>
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
