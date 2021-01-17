import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  menuOpened: boolean;
}

export const Container = styled.nav<ContainerProps>`
  display: ${({ menuOpened }) => (menuOpened ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background: ${shade(0.1, '#FFFFFF')};
  height: 100vh;
  text-align: left;
  padding: 7em 2em 0 2em;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ menuOpened }) => (menuOpened ? 0 : '+100%')});

  @media (min-width: 900px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      list-style: none;
      padding: 0.6em;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 160%;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.2rem;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 900px) {
          font-size: 1.5rem;
          text-align: center;
        }

        &:hover {
          color: ${shade(0.2, '#212353')};
        }
      }
    }
  }

  button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    width: 7.8rem;
    box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
    border-radius: 50px;
    border-color: #ffffff transparent transparent;

    &:hover {
      color: ${shade(0.2, '#212353')};
    }
  }
`;

export const BurgerButtom = styled.button`
  background: none;
  border: none;
  z-index: 10;

  i::before {
    font-size: 2em;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
