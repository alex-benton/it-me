import {AppProps} from 'next/app';
import * as React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";
import Head from "next/head";
import theme from "../components/theme";

/**
 * Use the 'styled-components' global style mechanism to style the 'body' and default '__next' entrypoint div.
 *
 * See also: https://styled-components.com/docs/api#createglobalstyle
 */
const GlobalStyle = createGlobalStyle`

  html, body {
    height: 100%;
  }

  body {
    margin: 0px;
    font-family: ${theme.font.body};
    font-weight: 400;    
    background: ${theme.color.background};
    overflow: hidden;
  }
  
  #__next {
    height: 100%;
    overflow: auto;
  }
  
  a {
    text-decoration: inherit;
  }
`;

/**
 * The app component.
 *
 * Because this file is named '_app', through nextjs magic this will be rendered for each page. The 'Component'
 * component is the actual 'page' that's being rendered.
 *
 * @param Component provided by nextjs. The 'page' that's going to be rendered.
 * @param pageProps provided by nextjs. The props to be passed to the page.
 */
const App = ({Component, pageProps}: AppProps) => (<ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
            <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png`}/>
            <link rel="icon" type="image/png" sizes="32x32" href={`/favicon-32x32.png`}/>
            <link rel="icon" type="image/png" sizes="16x16" href={`/favicon-16x16.png`}/>
            <link rel="manifest" href={`/site.webmanifest`}/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;700&family=Space+Mono:wght@700&display=swap" rel="stylesheet"/>
            <title>alex benton, a software engineer</title>
        </Head>
        <Content>
            <Component {...pageProps} />
        </Content>
    </ThemeProvider>);

export default App;

/**
 * Main content div.
 */
const Content = styled.div`
  height: 100%;
  min-height: fit-content;
`;
