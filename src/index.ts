import { interfaces, InterfaceMap } from "html-tag-interfaces";
import { Interpolation, serializeStyles } from "@emotion/serialize";
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

  if ((interfaces as InterfaceMap)[elementName]) {
    return (interfaces as InterfaceMap)[elementName];
  }

  console.warn(
    `Element unknown to styled-custom-elements: <${elementName} /> Please report this to https://github.com/keplersj/styled-custom-elements/issues`
  );

  return HTMLElement;
}

type StyledCustomElement<E extends typeof HTMLElement = typeof HTMLElement> = (
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
  options?: Options
): StyledCustomElement {
  let ElementInterface = HTMLElement;
  if (typeof element === "string") {
    ElementInterface = getElementInterface(element);
  } else {
    ElementInterface = element;
  }

  return (...styles: Array<TemplateStringsArray | Interpolation<unknown>>) => {
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
  [element in keyof typeof interfaces]: StyledCustomElement<
    typeof interfaces[element]
  >;
};

export default styledProxy as Styled;
