import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: #7a7f8c;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 2px;
  }

  input {
    display: flex;
    background: #f2f2f2;
    border: none;
    border-radius: 4px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 0px 2px;
    padding: 0.5em 1em;

    &::placeholder {
      font-family: IBM Plex Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 150%;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      color: #b8bcca;
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      margin: 0px 10px;
    }
  }
`;
