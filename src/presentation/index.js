import React from 'react';

import {
  Deck,
  Slide
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

import "normalize.css";

const images = {
};

preloader(images);

const theme = createTheme({
  primary: "black",
  secondary: "#f06",
  tertiary: "white",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const slidesImports = [
  import("../slides/1"),
  import("../slides/2"),
  import("../slides/3")
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />)
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then((slidesImportsResolved) => {
      slidesImportsResolved.forEach((slide) => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck
        progress="pacman"
        theme={theme}
        transition={["fade"]}
        transitionDuration={500}
      >
        {
          slides.map((slide, index) => {
            return React.cloneElement(slide, {key: index});
          })
        }
      </Deck>
    );
  }
}
