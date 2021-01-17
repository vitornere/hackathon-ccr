import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;
      padding: 0.6em;
      border-radius: 50px;

      a {
        line-height: 160%;
      }

      &:hover {
        background: ${shade(0.1, '#fff')};
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

  @media (max-width: 900px) {
    display: none;
  }
`;
