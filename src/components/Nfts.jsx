import React from "react";
import NftsCss from "../styles/Nfts.module.css";
import { star } from "../assets";

const Nfts = (props) => {
  return (
    <>
      <section className={NftsCss.segment}>
        <div className={NftsCss.segmentItem}>
          <img
            className={NftsCss.segmentImg}
            src={props.nft.img}
            alt="image-1"
          />
          <div className={NftsCss.segmentItem1}>
            <div className={NftsCss.segmentItem2}>
              <p>{props.nft.name}</p>
              <p>{props.nft.distance}</p>
              <img src={star} alt="rating" />
            </div>
            <div className={NftsCss.segmentItem3}>
              <p>{props.nft.fee}</p>
              <p>{props.nft.duration}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Nfts;
