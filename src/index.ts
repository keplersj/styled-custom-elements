import {
  interfaces,
  getInterface as getElementInterface,
} from "html-tag-interfaces";
import { Interpolation, serializeStyles } from "@emotion/serialize";
import emotionCache from "@emotion/cache";
import { insertStyles } from "@emotion/utils";

// Packaging is broken?
const createCache: typeof emotionCache =
  typeof emotionCache == "function"
    ? emotionCache
    : (emotionCache as any).default;

const cache = createCache({ key: "css" });

type StyledCustomElement<E extends typeof HTMLElement = typeof HTMLElement> = (
  // eslint-disable-next-line no-unused-vars
  ...styles: Array<TemplateStringsArray | Interpolation<unknown>>
) => E;

const defaultOptions = {
  extend: true,
  shadow: true,
  target: undefined as string | undefined,
};

type Options = Partial<typeof defaultOptions>;

function styledElementFactory(
  element: string | typeof HTMLElement,
  // eslint-disable-next-line no-unused-vars
  options?: Options
): StyledCustomElement {
  let ElementInterface =
    typeof element === "string" ? getElementInterface(element) : element;
  ElementInterface =
    ElementInterface.name === "HTMLUnknownElement"
      ? HTMLElement
      : ElementInterface;

  return (...styles: Array<TemplateStringsArray | Interpolation<unknown>>) => {
    return class StyledCustomElement extends ElementInterface {
      constructor() {
        super();
        const serialized = serializeStyles(styles, cache.registered);
        insertStyles(cache, serialized, false);
        const className = `${cache.key}-${serialized.name}`;
        this.className = className;
      }
    };
  };
}

const styledProxy = new Proxy(styledElementFactory, {
  get: (target, property) => {
    return target(String(property));
  },
});

type Styled = typeof styledElementFactory & {
  [element in keyof typeof interfaces]: StyledCustomElement<
    typeof interfaces[element]
  >;
};

export default styledProxy as Styled;
