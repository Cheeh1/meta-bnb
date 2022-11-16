import React from "react";
import { arrow, setting } from "../assets";
import OptionsCss from "../styles/Options.module.css";

const Options = () => {
  return (
    <>
      {/* Desktop view */}
      <section className={OptionsCss.flex}>
        <ul className={OptionsCss.list}>
          <li className={OptionsCss.link}>Resturant</li>
          <li className={OptionsCss.link}>Cottage</li>
          <li className={OptionsCss.link}>Castle</li>
          <li className={OptionsCss.link}>fantast city</li>
          <li className={OptionsCss.link}>beach</li>
          <li className={OptionsCss.link}>Carbins</li>
          <li className={OptionsCss.link}>Off-grid</li>
          <li className={OptionsCss.link}>Farm</li>
        </ul>
        <div className={OptionsCss.btn}>
          <p className={OptionsCss.btnTxt}>Location</p>
          <img src={setting} alt="logo" />
        </div>
      </section>

      {/* Mobile view */}
      <section className={OptionsCss.navFlex}>
        <div className={OptionsCss.navDropdown}>
          <div className={OptionsCss.dropdown}>
            <div className={OptionsCss.dropdownBtn}>
              <p className={OptionsCss.btnTxt}>Location Options</p>
              <img src={arrow} alt="logo" />
            </div>
            <div className={OptionsCss.dropdownContent}>
              <p>Resturant</p>
              <p>Cottage</p>
              <p>Castle</p>
              <p>fantast city</p>
              <p>beach</p>
              <p>Carbins</p>
              <p>Off-grid</p>
              <p>Farm</p>
            </div>
          </div>
        </div>

        <div className={OptionsCss.btn}>
          <p className={OptionsCss.btnTxt}>Location</p>
          <img src={setting} alt="logo" />
        </div>
      </section>
    </>
  );
};
export default Options;
