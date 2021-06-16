import React from "react";
import CardWrapper from "../styles/CardStyles.js";
import mobileImg from "../assets/images/mobileImg.jpg";
import desktopImg from "../assets/images/desktopImg.jpg";

const Card = () => {
  return (
    <CardWrapper>
      <div className="card__img-area card__img-container">
        <picture>
          <source media="(max-width: 375px)" srcset={mobileImg} />
          <img
            className="card__image"
            src={desktopImg}
            alt="A woman smiling at a meeting"
          />
        </picture>
      </div>
      <div className="card__content-area card__text-area">
        <h1 className="heading card__text-heading">
          Get <span className="heading--accent">insights</span> that help your
          business grow
        </h1>
        <p className="text card__main-text">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
      </div>
      <div className="card__content-area card__stats-area">
        <ul className="card__stats-list">
          <li className="card__stat">
            <h2 className="heading card__stat-heading">10k+</h2>
            <p className="text card__stat-text">companies</p>
          </li>
          <li className="card__stat">
            <h2 className="heading card__stat-heading">314</h2>
            <p className="text card__stat-text">templates</p>
          </li>
          <li className="card__stat">
            <h2 className="heading card__stat-heading">12M+</h2>
            <p className="text card__stat-text">queries</p>
          </li>
        </ul>
      </div>
    </CardWrapper>
  );
};

export default Card;
