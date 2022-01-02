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
});
