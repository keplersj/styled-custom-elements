# styled-custom-elements

**_UNSTABLE AND EXPERIMENTAL UNTIL FURTHER NOTICE_**

[![npm](https://img.shields.io/npm/v/styled-custom-elements)](https://www.npmjs.com/package/styled-custom-elements)
[![npm](https://img.shields.io/npm/dw/styled-custom-elements)](https://www.npmjs.com/package/styled-custom-elements)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/styled-custom-elements)](https://app.codecov.io/gh/keplersj/styled-custom-elements)
[![Bundle Size](https://img.shields.io/bundlephobia/min/styled-custom-elements)](https://bundlephobia.com/package/styled-custom-elements)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)

Styled (comparable to [@emotion/styled](https://emotion.sh/docs/@emotion/styled)) API for custom elements, built on top of [Emotion](https://emotion.sh/).

## Installation

Install using [npm](https://www.npmjs.com/):

```sh
$ npm install styled-custom-elements
```

## Usage

At the moment this package defaults to creating Custom Elements that extend their base elements (see MDN for [Extended Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#customized_built-in_elements)). In the future this will not be the case, with the package offering you the ability to opt-out of automatic extending and creating a wrapper around the base element in a Shadow DOM.

To create an extended element, use the following JavaScript:

```js
import styled from "styled-custom-elements";

const StyledAnchor = styled.a`
  color: pink;
  padding: 1rem;
`;

customElements.define("styled-anchor", StyledAnchor, { extends: "a" });
```

Then use your extended element in an HTML document:

```html
<a is="styled-anchor">This is my padded, pink anchor!</a>
```

## License

Copyright 2022 [Kepler Sticka-Jones](https://keplersj.com). Licensed MIT.
