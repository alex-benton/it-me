import React from 'react';
import styled from 'styled-components';
import FramedContainer from '../components/FramedContainer';
import theme from "../components/theme";

/**
 * The index page.
 */
const Index = () => (
    <>
        <Container>
            <FramedContainer>
                <Content>
                    <Name/>
                    <Description/>
                    <Contact/>
                </Content>
            </FramedContainer>
        </Container>
    </>
);

export default Index;

/**
 * The index page container, which takes up the entire screen.
 */
const Container = styled.div`
    min-height: fit-content;
    height: 100%;
    min-width: 370px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/**
 * A component that displays my name.
 */
const Name = () => (<div>
    <div><Bigger>alex benton</Bigger></div>
    <div><Smaller>(he/him)</Smaller></div>
</div>)

/**
 * A component that displays a description.
 */
 const Description = () => (
    <div>
        <div>software engineer building back-end web services</div>
        <div>(and sometimes front-end apps)</div>
    </div>
)

/**
 * A component that displays contact information.
 */
 const Contact = () => (
    <div>
        <div><Link href={`mailto:${theme.consts.email}`}>{theme.consts.email}</Link></div>
        <div><Link href={theme.consts.github}>github</Link> | <Link href={theme.consts.linkedin}>linkedin</Link></div>
        <div>san francisco, ca</div>
    </div>
)

/**
 * A span with slightly bigger text.
 */
const Bigger = styled.span`
    font-size: ${theme.size.bigger};
    font-weight: bold;
`;

/**
 * A span with slightly smaller text.
 */
const Smaller = styled.span`
    font-size: ${theme.size.smaller};
`;

/**
 * The index page content.
 */
const Content = styled.div`
    color: white;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
`;

/**
 * A bluer link color.
 */
const Link = styled.a`
    color: ${theme.color.link};
`