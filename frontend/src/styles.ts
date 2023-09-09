import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;

  main {
    height: calc(100vh - 100px);
    width: 80%;
    max-width: 1500px;
    margin: 0 auto;
    padding: 50px 0;
    section {
      h2 {
        color: rgb(13, 171, 119);
      }

      > p {
        margin-bottom: 1rem;
      }
    }
  }
`;
