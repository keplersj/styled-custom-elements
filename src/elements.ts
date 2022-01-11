// Initially extracted from https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API#html_element_interfaces_2
// Orgnaized based on https://developer.mozilla.org/en-US/docs/Web/HTML/Element
export const elements = {
  // Main root: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#main_root
  html: HTMLHtmlElement,

  // Document metadata: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#document_metadata
  base: HTMLBaseElement,
  head: HTMLHeadElement,
  link: HTMLLinkElement,
  meta: HTMLMetaElement,
  style: HTMLStyleElement,
  title: HTMLTitleElement,

  // Sectioning root: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#sectioning_root
  body: HTMLBodyElement,

  // Content sectioning: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
  address: HTMLElement,
  article: HTMLElement,
  aside: HTMLElement,
  footer: HTMLElement,
  header: HTMLElement,
  h1: HTMLHeadingElement,
  h2: HTMLHeadingElement,
  h3: HTMLHeadingElement,
  h4: HTMLHeadingElement,
  h5: HTMLHeadingElement,
  h6: HTMLHeadingElement,
  main: HTMLElement,
  nav: HTMLElement,
  section: HTMLElement,

  // Text content: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#text_content
  blockquote: HTMLQuoteElement,
  dd: HTMLElement,
  div: HTMLDivElement,
  dl: HTMLDListElement,
  dt: HTMLElement,
  figcaption: HTMLElement,
  figure: HTMLElement,
  hr: HTMLHRElement,
  li: HTMLLIElement,
  ol: HTMLOListElement,
  p: HTMLParagraphElement,
  pre: HTMLPreElement,
  ul: HTMLUListElement,

  // Inline text semantics: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#inline_text_semantics
  a: HTMLAnchorElement,
  abbr: HTMLElement,
  b: HTMLElement,
  bdi: HTMLElement,
  bdo: HTMLElement,
  br: HTMLBRElement,
  cite: HTMLElement,
  code: HTMLElement,
  data: HTMLDataElement,
  dfn: HTMLElement,
  em: HTMLElement,
  i: HTMLElement,
  kbd: HTMLElement,
  mark: HTMLElement,
  q: HTMLQuoteElement,
  rp: HTMLElement,
  rt: HTMLElement,
  ruby: HTMLElement,
  s: HTMLElement,
  samp: HTMLElement,
  small: HTMLElement,
  span: HTMLSpanElement,
  strong: HTMLElement,
  sub: HTMLElement,
  sup: HTMLElement,
  time: HTMLTimeElement,
  u: HTMLElement,
  var: HTMLElement,
  wbr: HTMLElement,

  // Image and multimedia: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#image_and_multimedia
  area: HTMLAreaElement,
  audio: HTMLAudioElement,
  img: HTMLImageElement,
  map: HTMLMapElement,
  track: HTMLTrackElement,
  video: HTMLVideoElement,

  // Embedded content: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#embedded_content
  embed: HTMLEmbedElement,
  iframe: HTMLIFrameElement,
  object: HTMLObjectElement,
  param: HTMLParamElement,
  picture: HTMLPictureElement,
  // portal: HTMLPortalElement, // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
  source: HTMLSourceElement,

  // SVG and MathML: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#svg_and_mathml
  // svg: SVGElement,
  // math: MathMLElement,

  // Scripting: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#scripting
  canvas: HTMLCanvasElement,
  noscript: HTMLElement,
  script: HTMLScriptElement,

  // Demarcating edits: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#demarcating_edits
  del: HTMLModElement,
  ins: HTMLModElement,

  // Table content: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#table_content
  caption: HTMLTableCaptionElement,
  col: HTMLTableColElement,
  colgroup: HTMLTableColElement,
  table: HTMLTableElement,
  tbody: HTMLTableSectionElement,
  td: HTMLTableCellElement,
  tfoot: HTMLTableSectionElement,
  th: HTMLTableCellElement,
  thead: HTMLTableSectionElement,
  tr: HTMLTableRowElement,

  // Forms: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms
  button: HTMLButtonElement,
  datalist: HTMLDataListElement,
  fieldset: HTMLFieldSetElement,
  form: HTMLFormElement,
  input: HTMLInputElement,
  label: HTMLLabelElement,
  legend: HTMLLegendElement,
  meter: HTMLMeterElement,
  optgroup: HTMLOptGroupElement,
  option: HTMLOptionElement,
  output: HTMLOutputElement,
  progress: HTMLProgressElement,
  select: HTMLSelectElement,
  textarea: HTMLTextAreaElement,

  // Interactive elements: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#interactive_elements
  details: HTMLDetailsElement,
  // dialog: HTMLDialogElement, // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
  menu: HTMLMenuElement,
  summary: HTMLElement,

  // Web Components: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#web_components
  slot: HTMLSlotElement,
  template: HTMLTemplateElement,
};
