import styled from "styled-components";
import React, { ReactChild } from "react";
import theme from "./theme";

/**
 * Component that frames its children in stylized open and closed braces.
 */
const FramedContainer = ({children} : {children: ReactChild | ReactChild[]}) => (
    <Container>
        <Start/>
        <Content>{children}</Content>
        <End/>
    </Container>
)

export default FramedContainer;

/**
 * Container div.
 */
 const Container = styled.div`
    display: grid;
    grid-template-columns: 200px minmax(400px, max-content) 200px;
    
    @media (${theme.media.small}) {
        grid-template-columns: 1fr;
        grid-template-rows: 100px minmax(400px, max-content) 100px;
    }

    align-items: center;
`

/**
 * The 'open bracket' div.
 */
const Start = styled.div`
    font-size: ${theme.size.logo};
    font-family: ${theme.font.logo};
    ::before {
        color: limegreen;
        content: "\{";
    }
`
/**
 * Content div.
 */
const Content = styled.div``

/**
 * The 'closed bracket' div.
 */
const End = styled.div`
    text-align: right;
    font-size: ${theme.size.logo};
    font-family: ${theme.font.logo};
    ::after {
        color: limegreen;
        content: "\}";
    }
`