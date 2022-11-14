import React from "react";
import { mbtoken, metamask, opensea } from "../assets";
import FeaturesCss from "../styles/Features.module.css";

const Features = () => {
  return (
    <>
      <section className={FeaturesCss.location}>
        <div className={FeaturesCss.flex}>
          <h3 className={FeaturesCss.header}>
            Rent a <span className={FeaturesCss.span}>Place</span> away from{" "}
            <span className={FeaturesCss.span}>Home</span> in the{" "}
            <span className={FeaturesCss.span}>Metaverse</span>
          </h3>
          <p className={FeaturesCss.txt}>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className={FeaturesCss.search}>
            <input
              className={FeaturesCss.input}
              type="text"
              name=""
              placeholder="Search for a location"
              id=""
            />
            <button className={FeaturesCss.btn}>Search</button>
          </div>
        </div>
        <img src="/images/grid-pics.png" alt="grid-pictures" />
      </section>

      <section className={FeaturesCss.logo}>
        <img src={mbtoken} alt="mbtoken" />
        <img src={metamask} alt="metamusk" />
        <img src={opensea} alt="opensea" />
      </section>

      <h3 className={FeaturesCss.title}>
        Inspiration for your next adventure
      </h3>
    </>
  );
};
export default Features;
