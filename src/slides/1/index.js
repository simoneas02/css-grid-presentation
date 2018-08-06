import React from "react";
import { Heading, Slide, Text } from "spectacle";

export default (
    <Slide transition={["zoom", "slide"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            CSS Grid is Awesome <span role="img" aria-label="A heart emoji">💞</span>
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            How enjoy your life with CSS Grid!!!
        </Text>
        <Text margin="50px 0 0" textColor="tertiary" size={3}>
            by Simone Amorim <small>- @samorim02</small>
        </Text>
        <Text margin="50px 0 0" textColor="yellow" size={1}>
            August 06, 2018
        </Text>
    </Slide>
);