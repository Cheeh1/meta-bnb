import React from "react";
import { Link } from "react-router-dom";
import { arrowLeft } from "../assets";
import Navbar from "../components/Navbar";
import ErrorPageCss from "../styles/ErrorPage.module.css"

const ErrorPage = () => {
  return (
    <>
    < Navbar />
      <section className={ErrorPageCss.errorflex}>
        <div className={ErrorPageCss.errorflexcol}>
          <p className={ErrorPageCss.errorpagetxt}>404 error</p>
          <h3 className={ErrorPageCss.errorheader}>We can’t find that page</h3>
          <p className={ErrorPageCss.errortxt1}>
            Sorry, the page you are looking for doesn't exist.
          </p>
        </div>

        <div className={ErrorPageCss.errorflexrow}>
          <Link to="/">
            <button className={ErrorPageCss.errorbtnflex}>
              <img src={arrowLeft} alt="arrow" />
              <p className={ErrorPageCss.errorbtntxt}>Go back</p>
            </button>
          </Link>

          {/* <div>
            <Link to="/">
              <button className={ErrorPageCss.errorbtn2}>Take me home</button>
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};
export default ErrorPage;
