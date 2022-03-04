import "@ungap/custom-elements";
import styled from "./index";

const StyledButton = styled.button`
  color: turquoise;
  font-size: 24px;
`;

customElements.define("styled-button", StyledButton, { extends: "button" });

export default {
  title: "StyledButton",
  component: StyledButton,
};

export const BasicUsage = () => `<button is="styled-button">
  This my button component.
</button>`;
