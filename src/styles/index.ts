import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin: 0 5em;
  }

  footer {
    margin-top: 3em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 8em;
    width: 100%;
    background: rgba(76, 122, 242, 0.06);

    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 15em;
    }

    span {
      font-family: sf pro text, -apple-system, BlinkMacSystemFont, Roboto,
        segoe ui, Helvetica, Arial, sans-serif, apple color emoji,
        segoe ui emoji, segoe ui symbol;
    }
  }
`;
