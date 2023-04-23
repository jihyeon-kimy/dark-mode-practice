import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    hover: string;
    active: string;
    border: string;
    background: string;

    toggle: string;
    toggleBackground: string;
  }
}
