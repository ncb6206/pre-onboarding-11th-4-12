import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1f2328;
    background-color: #cae9ff;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: #1f2328;
    outline: none;
  }
`;

export default function GlobalStyle() {
  return <Global styles={style} />;
}
