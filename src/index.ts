import { elements } from "./elements";
import { serializeStyles } from "@emotion/serialize";
import emotionCache from "@emotion/cache";
import { insertStyles } from "@emotion/utils";

// Packaging is broken?
const createCache: typeof emotionCache =
  typeof emotionCache == "function"
    ? emotionCache
    : (emotionCache as any).default;

const cache = createCache({ key: "css" });

function getElementInterface(elementName: string): typeof HTMLElement {
  if (elementName.includes("-")) {
    const registered = customElements.get(elementName);

    if (registered) {
      return registered;
    }
  }

  if ((elements as { [name: string]: typeof HTMLElement })[elementName]) {
    return (elements as { [name: string]: typeof HTMLElement })[elementName];
  }

  console.warn(`Element unknown to styled-custom-elements: ${elementName}`);

  return HTMLElement;
}

type StyledCustomElement<E extends typeof HTMLElement = typeof HTMLElement> =
  | ((styleObject: object) => E)
  | ((substrings: TemplateStringsArray, ...expressions: any) => E);

const defaultOptions = {
  extend: true,
  shadow: true,
};

type Options = Partial<typeof defaultOptions>;

function styledElementFactory(
  element: string | typeof HTMLElement,
  options?: Options
): StyledCustomElement {
  let ElementInterface = HTMLElement;
  if (typeof element === "string") {
    ElementInterface = getElementInterface(element);
  } else {
    ElementInterface = element;
  }

  return (...styles: Array<TemplateStringsArray>) => {
    return class StyledCustomElement extends ElementInterface {
      constructor() {
        super();
        const serialized = serializeStyles(styles, cache.registered, undefined);
        insertStyles(cache, serialized, false);
        const className = `${cache.key}-${serialized.name}`;
        this.className = className;
      }
    };
  };
}

const styledProxy = new Proxy(styledElementFactory, {
  get: (target, property, receiver) => {
    return target(String(property));
  },
});

type Styled = typeof styledElementFactory & {
  [element in keyof typeof elements]: StyledCustomElement<
    typeof elements[element]
  >;
};

export default styledProxy as Styled;
