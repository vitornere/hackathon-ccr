import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  width: 100%;

  h1 {
    font-family: Cairo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #000000;
    margin: 0 0 2em 1em;
  }

  .school {
    background: rgba(229, 229, 229, 0.8);
    padding: 1em 2em 1em;
    width: 50em;

    h2 {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 140%;
      color: #7a7f8c;
      margin-bottom: 1em;
    }

    p {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 143%;
      color: #000000;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 1em;

      button {
        width: 20em;
        height: 3em;
        border: none;
        background: #ffffff;
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
        border-radius: 50px;

        :hover {
          background-color: ${shade(0.1, '#ffffff')};
        }
      }
    }
  }

  .submit {
    margin-top: 3em;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      border: none;
      background: rgba(76, 242, 142, 0.62);
      box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      border-radius: 50px;
      width: 30em;
      height: 4em;
    }
  }
`;
