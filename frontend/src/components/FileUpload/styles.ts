import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    border: 0;
    padding: 1rem;
    border-radius: 10px;
    background: #0dab77;
    font-size: 1.2rem;
    color: #ffffff;
    cursor: pointer;

    &:hover {
      filter: brightness(1.2);
    }
  }

  p {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: bold;

    span {
      font-weight: normal;
      font-size: 16px;
    }
  }
`;
