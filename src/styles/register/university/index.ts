import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2em;

  h1 {
    font-family: Cairo;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 110%;
    color: #212353;
  }

  h2 {
    font-family: Cairo;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 160%;
    display: flex;
    align-items: center;
    color: #000000;
  }

  fieldset {
    border: none;
  }

  .first {
    display: flex;
    margin-top: 2em;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;

        button {
          width: 48%;
          padding: 0.5em 0.5em;
          border: none;
          background: #ffffff;
          box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
          border-radius: 50px;
          margin-bottom: 4em;

          font-family: Cairo;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 160%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: rgba(75, 93, 104, 0.63);

          &:hover {
            background-color: ${shade(0.1, '#ffffff')};
          }
        }
      }
    }
  }

  .second {
    margin-top: 3em;

    > div {
      margin-top: 2em;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      * div {
        width: 33em;

        &:not(:first-child) {
          margin-top: 2em;
        }
      }
    }
  }

  .third {
    margin-top: 3em;

    .input {
      margin: 2em 0;
    }

    .about-project input {
      min-height: 10em;
    }

    .file {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      margin-top: 1em;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        font-family: IBM Plex Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #7a7f8c;
        order: 0;
        align-self: stretch;
        margin: 0px 2px;
        background: inherit;
        cursor: pointer;

        img {
          padding: 0 2em;
        }
      }
    }

    .project-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-top: 3em;

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18em;
        height: 3em;
        border: none;
        background: #ffffff;
        box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
        border-radius: 50px;
        font-family: Cairo;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 160%;
        text-align: center;
        color: rgba(75, 93, 104, 0.63);

        :hover {
          background-color: ${shade(0.1, '#ffffff')};
        }
      }
    }

    .location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 3em;

      .input {
        width: 32em;
        margin-top: 1em;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: inherit;
        border: none;
      }
    }
  }
`;
