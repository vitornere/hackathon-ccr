import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 3em;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: Cairo;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: #000000;
      margin-bottom: 1em;
    }

    p {
      margin: 0;
    }

    span {
      margin-top: 1em;
    }

    p,
    span {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
    }
  }
`;
