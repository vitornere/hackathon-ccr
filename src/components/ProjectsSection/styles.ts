import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;

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

  span {
    font-size: 24px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: #212353;
  }

  .all-projects {
    margin-top: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 20em;
  }
`;

interface ArticleProps {
  logoImg: string;
}

export const Article = styled.article<ArticleProps>`
  position: relative;
  width: 100%;
  margin-top: 3em;

  .logo {
    position: absolute;
    width: 357px;
    height: 337px;
    top: 0;
    left: 0;
    border-radius: 34px;
    background: url(${props => props.logoImg});
  }

  .content {
    display: flex;
    flex-direction: column;
    margin: 3em 0 0 10em;
    padding: 1em 0 1em 15em;
    background: rgba(76, 122, 242, 0.1);
    border-radius: 50px;

    span {
      font-size: 24px;
      line-height: 130%;
      display: flex;
      align-items: center;
      color: #212353;
    }

    ul {
      font-family: Cairo;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 160%;
      color: #4b5d68;
      margin-top: 2em;

      li {
        list-style: none;
      }
    }

    a {
      margin: 2em auto 2em;
      width: 15em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &:nth-of-type(2) {
    .content {
      background: rgba(156, 105, 226, 0.1);
    }
  }

  @media (max-width: 900px) {
    .logo {
      display: none;
    }

    .content {
      margin: 0;
      padding: 2em 1em 0 2em;
      align-items: center;
      justify-content: center;

      span {
        text-align: center;
      }
    }
  }
`;
