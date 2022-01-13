import styled from "./index.js";

describe("Styled Custom Elements", () => {
  afterEach(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  describe("string element, template string style", () => {
    const element = styled("div")`
      color: red;
    `;

    customElements.define("custom-div-param", element, { extends: "div" });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toBeInstanceOf(HTMLDivElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-1gqet3"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });

    it("attaches to the document and styles", () => {
      const element = document.createElement("div", { is: "custom-div-param" });
      document.body.appendChild(element);
      expect(document.documentElement).toMatchInlineSnapshot(`
        <html>
          <head />
          <body>
            StyledCustomElement {}
          </body>
        </html>
      `);
    });
  });

  describe("getter element, template string style", () => {
    const element = styled.div`
      color: orange;
    `;

    customElements.define("custom-div-prop", element, { extends: "div" });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toBeInstanceOf(HTMLDivElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-150xw99"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });

    it("attaches to the document and styles", () => {
      const element = document.createElement("div", { is: "custom-div-prop" });
      document.body.appendChild(element);
      expect(document.documentElement).toMatchInlineSnapshot(`
        <html>
          <head />
          <body>
            StyledCustomElement {}
          </body>
        </html>
      `);
    });
  });

  describe("direct element, template string style", () => {
    class CustomDivElement extends HTMLDivElement {
      constructor() {
        super();
      }
    }

    const element = styled(CustomDivElement)`
      color: yellow;
    `;

    customElements.define("custom-div-element", element, { extends: "div" });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toBeInstanceOf(HTMLDivElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-th2k9n"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });

    it("attaches to the document and styles", () => {
      const element = document.createElement("div", {
        is: "custom-div-element",
      });
      document.body.appendChild(element);
      expect(document.documentElement).toMatchInlineSnapshot(`
          <html>
            <head />
            <body>
              StyledCustomElement {}
            </body>
          </html>
        `);
    });
  });

  describe("custom element string, template string style", () => {
    class CustomDivElement extends HTMLDivElement {
      constructor() {
        super();
      }
    }

    customElements.define("custom-div-base", CustomDivElement, {
      extends: "div",
    });

    const element = styled("custom-div-base")`
      color: green;
    `;

    customElements.define("custom-div-ext", element, { extends: "div" });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toBeInstanceOf(HTMLDivElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-7o6h5j"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });

    it("attaches to the document and styles", () => {
      const element = document.createElement("div", {
        is: "custom-div-ext",
      });
      document.body.appendChild(element);
      expect(document.documentElement).toMatchInlineSnapshot(`
            <html>
              <head />
              <body>
                StyledCustomElement {}
              </body>
            </html>
          `);
    });
  });

  describe("unknown element string, template string style", () => {
    const element = styled("unknown")`
      color: blue;
    `;

    customElements.define("custom-unknown-element", element);

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toMatchInlineSnapshot(`
        <custom-unknown-element
          class="css-cy897j"
        />
      `);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-cy897j"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });
  });

  describe("CSS object syntax", () => {
    const element = styled.div({
      color: "red",
    });

    customElements.define("custom-object-element", element, { extends: "div" });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-tokvmb"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });
  });

  describe("plain string style, optimized by @emotion/babel", () => {
    // Extracted from a build of https://github.com/keplersj/website
    const element = styled("div", { target: "e1k87xmt4" })({
      name: "flzhjp",
      styles: "display:flex;overflow:scroll",
    });

    customElements.define("custom-optimized-plain-element", element, {
      extends: "div",
    });

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toMatchInlineSnapshot(`StyledCustomElement {}`);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-flzhjp"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });
  });

  describe("string style, with interpolation, optimized by @emotion/babel", () => {
    // Extracted from a build of https://github.com/keplersj/website
    const element = styled("kepler-image", { target: "e1k87xmt1" })(
      "picture{display:block;min-width:20em;max-width:25vw;position:relative;padding-top:",
      (3 / 4) * 100,
      "%;}img{border-top-left-radius:10px;border-top-right-radius:10px;position:absolute;top:0;object-fit:cover;height:100%;width:100%;}"
    );

    customElements.define("custom-optimized-interpolted-element", element);

    it("returns a valid custom element", () => {
      expect(element).toMatchInlineSnapshot(`[Function]`);

      const elementInstance = new element();

      expect(elementInstance).toBeInstanceOf(HTMLElement);
      expect(elementInstance).toMatchInlineSnapshot(`
        <custom-optimized-interpolted-element
          class="css-1xyaj47"
        />
      `);
      expect(elementInstance.className).toMatchInlineSnapshot(`"css-1xyaj47"`);
      expect(elementInstance.style).toMatchInlineSnapshot(`
        CSSStyleDeclaration {
          "_importants": Object {},
          "_length": 0,
          "_onChange": [Function],
          "_values": Object {},
        }
      `);
    });
  });
});
