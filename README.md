# styled-custom-elements

**_UNSTABLE AND EXPERIMENTAL UNTIL FURTHER NOTICE_**

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
