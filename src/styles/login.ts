import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 32em;

    fieldset {
      border: none;

      div {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-top: 2em;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: IBM Plex Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: 0.01em;
          color: #7a7f8c;
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(76, 242, 142, 0.62);
          box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
          border: none;
          border-radius: 50px;
          width: 10em;
        }
      }
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 32em;

    button {
      margin-top: 2em;
      border: none;
      background: rgba(76, 122, 242, 0.25);
      box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
      border-radius: 50px;
      padding: 0.4em 3em;
    }
  }
`;
