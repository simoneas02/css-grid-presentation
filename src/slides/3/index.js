import React from "react";
import { Heading, Slide } from "spectacle";
import LiveEdit from './LiveEdit';

const noInlineExample = (`
    const Wrapper = ({ children }) => (
    <div style={{
        background: 'papayawhip',
        width: '100%',
        padding: '2rem'
    }}>
        {children}
    </div>
    )
    const Title = () => (
    <h3 style={{ color: 'palevioletred' }}>
        Hello World!
    </h3>
    )
    render(
    <Wrapper>
        <Title />
    </Wrapper>
    )
`).trim()

export default (
    <Slide transition={["zoom", "slide"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS Grid is Awesome <span role="img" aria-label="A heart emoji">💞</span>
        </Heading>
        <LiveEdit noInline code={noInlineExample} />
    </Slide>
);