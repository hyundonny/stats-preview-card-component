import styled from "styled-components";

const CardWrapper = styled.div`
  width: 100%;
  max-width: 330px;
  border-radius: 0.5rem;
  background-color: var(--primary-card-bg);

  .card__img {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    position: relative;

    &-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: hsla(277, 64%, 61%, 0.5);
    }

    picture {
      display: block;

      img {
        width: 100%;
      }
    }
  }

  .card__content {
    & > * {
      padding-top: 2.25rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    &-text {
      text-align: center;

      &-heading {
        font-size: 1.75rem;
      }

      &-copy {
        margin-top: 0.8rem;
      }
    }

    &-stats {
      text-align: center;
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

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    max-width: 1110px;

    .card__img {
      width: 100%;
      border-top-left-radius: 0rem;
      border-top-right-radius: 0.5rem;
    }

    .card__content {
      width: 100%;

      padding: 2.5rem 4rem 2.5rem 3rem;

      &-text {
        text-align: left;

        &-heading {
          font-size: 2.25rem;
        }

        &-copy {
          margin-top: 1.25rem;
        }
      }

      &-stats {
        padding-bottom: 0;
        text-align: left;

        &-list {
          display: flex;
          justify-content: space-between;
          width: 85%;

          li {
            font-size: 1rem;
            line-height: 1.75;

            p {
              font-size: 0.75rem;
            }
          }

          li + li {
            padding-top: 0rem;
          }
        }
      }
    }
  }
`;

export default CardWrapper;
