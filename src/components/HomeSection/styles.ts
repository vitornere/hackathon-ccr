import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 3.5em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  article {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 29em;

    h1 {
      font-family: Cairo;
      font-weight: normal;
      font-size: 36px;
      line-height: 110%;
    }

    span {
      font-size: 18px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: #000000;
      margin: 1em 0 2em;
    }

    button {
      margin-top: 1.5em;
      box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      border-radius: 50px;
      border-color: rgba(0, 0, 0, 0) transparent transparent;
      width: 26em;
      height: 4.3em;

      &:nth-of-type(1) {
        background: rgba(242, 201, 76, 0.62);
      }

      &:nth-of-type(2) {
        background: rgba(76, 242, 142, 0.62);
      }

      &:nth-of-type(3) {
        background: rgba(76, 122, 242, 0.6);
      }
    }
  }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50vw;
    height: 100%;

    img {
      width: 90%;
      height: auto;
    }
  }

  @media (max-width: 900px) {
    margin-top: 2em;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    article {
      width: 100%;
      justify-content: center;
      align-items: center;

      h1,
      span {
        text-align: center;
      }
      button {
        width: 100%;
      }
    }

    div {
      width: 80%;
    }
  }
`;
