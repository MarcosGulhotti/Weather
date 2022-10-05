import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--dark-gray);

  position: sticky;
  top: 0;

  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 30px;

  @media (max-width: 440px) {
    flex-direction: column;
    height: 180px;
    justify-content: flex-start;
  }

  .icon-container {
    display: flex;
    align-items: center;

    .texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 10px;

      .title {
        color: var(--white);
        font-weight: bold;
        font-size: 24px;

        font-family: var(--font-roboto);
      }
      .subtitle {
        font-size: 14px;
        color: var(--text-color);
        font-family: var(--font-roboto);
        margin-top: 5px;
      }
    }
  }

  .buttons-container {
    width: 220px;

    button {
      margin: 5px 5px;
    }
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;

  cursor: pointer;
`;

export { StyledHeader, StyledImage };
