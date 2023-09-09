import styled from "styled-components";

export const Container = styled.footer`
  background: #060937;
  min-height: 320px;
  display: flex;
  align-items: center;

  .footer {
    max-width: 1500px;
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 0 auto;
    flex-wrap: wrap;

    .address {
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .links {
      ul {
        color: #ffffff;
        li {
          line-height: 24px;
          a {
            color: #ffffff;
            text-decoration: none;

            &:hover {
              color: #0dab77;
            }
          }
          &:first-child {
            font-weight: 900;
          }
        }
      }
    }
    .plataform {
      p {
        font-weight: 900;
      }

      &-icons {
        display: flex;
        padding-bottom: 10px;
        gap: 4px;
      }

      &-type {
        display: flex;
        padding-bottom: 10px;
        gap: 1rem;
        li {
          margin-top: 12px;
          img {
            width: 108px;
          }
        }
      }
    }
  }

  img {
    width: 203px;
  }

  p {
    color: #ffffff;
  }
`;
