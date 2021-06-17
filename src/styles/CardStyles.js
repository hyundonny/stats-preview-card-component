import styled from "styled-components";
import mobileImg from "../assets/images/mobileImg.jpg";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 6rem auto;
  border-radius: 0.5rem;
  background-color: var(--primary-card-bg);

  .card__image {
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .card__content {
    text-align: center;

    & > * {
      padding-top: 2.25rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    &-text {
      &-heading {
        font-size: 1.75rem;
      }

      &-copy {
        margin-top: 0.8rem;
      }
    }

    &-stats {
      padding-bottom: 2.5rem;

      &-list {
        list-style: none;

        li {
          font-size: 1rem;
          line-height: 1.75;

          p {
            text-transform: uppercase;
            font-size: 0.75rem;
            color: var(--stat-heading);
          }
        }

        li + li {
          padding-top: 1.75rem;
        }
      }
    }
  }

  .heading {
    color: var(--main-heading);
    font-family: Inter;
  }

  .text {
    color: var(--main-paragraph);
    font-family: "Lexend Deca";
    line-height: 1.75;
  }

  .accent {
    color: var(--primary-accent);
  }
`;

export default CardWrapper;
