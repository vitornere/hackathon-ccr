import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgba(76, 122, 242, 0.11);
  border-radius: 42px;
  margin-top: 5em;
  padding: 0 2em 1em;

  div {
    display: flex;
    flex-direction: column;
    padding-top: 5em;

    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 110%;
      color: #212353;
      margin-bottom: 3.5rem;
    }

    span {
      font-size: 18px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: #000000;
    }
  }
`;
