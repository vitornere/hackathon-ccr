import styled from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  menuOpened: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ menuOpened }) =>
      menuOpened ? shade(0.1, '#000') : '#000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuOpened }) =>
        menuOpened ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ menuOpened }) => (menuOpened ? '0' : '1')};
      transform: ${({ menuOpened }) =>
        menuOpened ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ menuOpened }) =>
        menuOpened ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
