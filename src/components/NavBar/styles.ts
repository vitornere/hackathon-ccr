import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;
      padding: 0.6em;

      a {
        line-height: 160%;
      }
    }
  }

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    width: 7.8rem;
    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
    border-radius: 50px;
    border-color: #ffffff transparent transparent;
  }
`;
