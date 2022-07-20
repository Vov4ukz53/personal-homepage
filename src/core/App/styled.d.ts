import "styled-components";

declare module "styled-components" {

  interface IBreakpoints {
    container: number,
    tablets: number,
    mobile: number,
    small: number,
  }

  interface IColors {
    background: string,
    backgroundTile: string,
    borderTile: string,
    hoverBorderTile: string,
    shadowTile: string,
    backgroundSwitch: string,
    mainText: string,
    title: string,
    backgroundButton: string,
    borderButton: string,
    textButton: string,
    onHoverButton: string,
    focusButton: string,
    selectedButton: string,
    borderColor: string,
    nameRepository: string,
    icon: string,
  }
  export interface DefaultTheme {
    breakpoints: IBreakpoints,
    colors: IColors,
  }
}