import { EDEADLK } from 'constants';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  background: rgba(76, 242, 142, 0.06);
  border-radius: 42px;
  padding: 2em;
  margin-top: 5em;

  .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 110em;

    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 130%;
      display: flex;
      align-items: center;
      text-align: center;
      color: #212353;
    }

    img {
      width: 100%;
      height: auto;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .list-item {
      h2 {
        font-family: Cairo;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 110%;
        color: #212353;
      }

      .description {
        margin-top: 1em;
        font-size: 18px;
        line-height: 160%;
        display: flex;
        align-items: center;
        color: #4b5d68;
      }

      .benefits {
        margin-top: 1em;
        font-size: 18px;
        line-height: 160%;
        display: flex;
        align-items: center;
        color: #4b5d68;
      }

      &:not(:first-child) {
        margin-top: 2em;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .title {
      width: 100%;

      img {
        width: 70%;
      }
    }

    .list {
      text-align: justify;

      h2 {
        text-align: center;
      }
    }
  }
`;
