import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle` // 이부분 추가
  ${reset}
  :root {
    --main-color: #6327FE;
    --txt-color: #333333;
    --border-color: #C4C4C4;
    --sub-border-color: #E0E0E0;
    --bg-color: #F2F2F2;
    --emphasis-txt-color: #EB5757;
    --sub-txt-color: #828282;
    --button-border: #BDBDBD;
}
  
div, span, article, section, header, main, footer, p, ul, li, label, a, nav, h1, h2, h3, form, input, button, img, textarea, table, thead, tbody, tr, th, td {
    box-sizing: border-box;
}
  
body, html {
    width: 100%;
    height: 100%;
}
  
body, button {
    font-family: "Spoqa Han Sans Neo", "sans-serif";
}

body {
    font-weight: 400;
    color: var(--txt-color);
}

img {
    width: 100%;
    height: auto;
    vertical-align: top;
}

a {
    display: block;
    text-decoration: none;
    color: #000;
}

table, thead, tbody, tr {
    display: block;
}

/* Image Replacement 약자 스크린리더가 읽을 수 있도록 대체텍스트 */
.ir {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

/* 한줄 말줄임 */
.sl-ellipsis {
    display:block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

/* 두줄 말줄임 */
.multi-ellipsis {
  overflow: hidden;
  display: -webkit-box; 
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
}

/* button 스타일 */
button {
    border: none;
    cursor: pointer;
    padding: 0;
}
`

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
  {/* reset.css를 root에 적용해서 모든 파일에 적용 */}
    
    <GlobalStyle /> 
    <App tab="home" />
  </BrowserRouter>
);