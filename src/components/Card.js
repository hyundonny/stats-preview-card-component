import React from "react";
import CardWrapper from "../styles/CardStyles.js";
import mobileImg from "../assets/images/mobileImg.jpg";
import desktopImg from "../assets/images/desktopImg.jpg";

const Card = () => {
  return (
    <CardWrapper>
      <div className="card__img">
        <picture>
          <source media="(max-width: 375px)" srcset={mobileImg} />
          <img
            className="card__image"
            src={desktopImg}
            alt="A woman smiling at a meeting"
          />
        </picture>
      </div>
      <div className="card__content">
        <div className="card__content-text">
          <h1 className="heading card__content-text-heading">
            Get <span className="accent">insights</span> that help your business
            grow
          </h1>
          <p className="text card__content-text-copy">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
        </div>
        <div className="card__content-stats">
          <ul className="card__content-stats-list">
            <li>
              <h2 className="heading card__content-stat-heading">10k+</h2>
              <p className="text card__content-stat-text">companies</p>
            </li>
            <li>
              <h2 className="heading card__content-stat-heading">314</h2>
              <p className="text card__content-stat-text">templates</p>
            </li>
            <li>
              <h2 className="heading card__content-stat-heading">12M+</h2>
              <p className="text card__content-stat-text">queries</p>
            </li>
          </ul>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Card;
