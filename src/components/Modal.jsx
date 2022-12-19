import React from "react";
import { arrowRight, close, metaLogo, smallClose, walletLogo } from "../assets";
import ModalCss from "../styles/Modal.module.css";

const Modal = (props) => {
  const toggleState = props.toggle;
  const action = props.action;
  return (
    <>
      <section>
        <div
          className={`${ModalCss.hide} ${toggleState ? ModalCss.active : ""}`}>
          <div className={ModalCss.overlay}>
            <div className={ModalCss.modal}>
              <div className={ModalCss.modalFlex1}>
                <div className={ModalCss.heading}>
                  <h3 className={ModalCss.connect}>Connect Wallet</h3>
                  <img
                    className={ModalCss.closeBtn}
                    onClick={action}
                    src={smallClose}
                    alt="logo"
                  />
                </div>
                <hr className={ModalCss.line} />
              </div>

              <div className={ModalCss.modalFlex2}>
                <p className={ModalCss.option}>Choose your preferred wallet:</p>
                <div className={ModalCss.modalItem1}>
                  <div className={ModalCss.modalItem2}>
                    <img src={metaLogo} alt="logo" />
                    <h3 className={ModalCss.name}>Metamask</h3>
                  </div>
                  <img src={arrowRight} alt="logo" />
                </div>
                <div className={ModalCss.modalItem3}>
                  <div className={ModalCss.modalItem4}>
                    <img src={walletLogo} alt="logo" />
                    <h3 className={ModalCss.name}>WalletConnect</h3>
                  </div>
                  <img src={arrowRight} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Modal;
