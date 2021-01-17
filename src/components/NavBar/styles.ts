import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  width: 100%;

  @media (max-width: 900px) {
    align-items: flex-start;
  }
`;
