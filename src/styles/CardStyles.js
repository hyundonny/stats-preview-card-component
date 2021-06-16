import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 6rem auto;
  border-radius: 0.5rem;
  background-color: var(--primary-card-bg);
  text-align: center;

  & > * + * {
    margin-top: 2.5rem;
  }

  .card__image {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .card__content-area {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .card__text-area {
    & > * + * {
      margin-top: 0.75rem;
    }
  }

  .heading {
    color: var(--main-heading);
    font-family: Inter;
  }

  .card__text-heading {
    font-size: 1.75rem;
  }

  .heading--accent {
    color: var(--primary-accent);
  }

  .text {
    color: var(--main-paragraph);
    font-family: "Lexend Deca";
    line-height: 1.75;
  }

  .card__stats-list {
    list-style: none;
  }

  .card__stat {
    font-size: 1rem;
    padding-bottom: 1.75rem;
    line-height: 1.75;
  }

  .card__stat-text {
    text-transform: uppercase;
    font-size: 0.75rem;
    color: var(--stat-heading);
  }
`;

export default CardWrapper;
