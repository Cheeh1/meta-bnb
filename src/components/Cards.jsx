import React from "react";
import CardsCss from "../styles/Cards.module.css";
import { heart, heartFill, star } from "../assets";
import { useToggle } from "../useToggle";

const Cards = (props) => {

  // Using Custom Hook
  const [toggleState, toggle] = useToggle();

  return (
    <>
      <section className={CardsCss.segment}>
        <div className={CardsCss.segmentItem}>
          <img
            className={CardsCss.segmentImg}
            src={props.card.img}
            alt="image-1"
          />
          <div onClick={toggle}>
            {!toggleState ? (
              <img
                className={CardsCss.segmentIcon}
                src={heart}
                alt="heart-icon"
              />
            ) : (
              <img
                className={CardsCss.segmentIcon}
                src={heartFill}
                alt="heart-icon"
              />
            )}
          </div>
          <div className={CardsCss.segmentItem1}>
            <div className={CardsCss.segmentItem2}>
              <p>{props.card.name}</p>
              <p>{props.card.distance}</p>
              <img src={star} alt="rating" />
            </div>
            <div className={CardsCss.segmentItem3}>
              <p>{props.card.fee}</p>
              <p>{props.card.duration}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
