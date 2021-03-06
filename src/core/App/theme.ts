import { DefaultTheme } from "styled-components";

const common = {
  breakpoints: {
    container: 1216,
    tablets: 992,
    mobile: 767,
    small: 600,
  },
};

export const lightMode: DefaultTheme = {
  ...common,
  colors: {
    background: "#FBFBFE",
    backgroundTile: "#FFFFFF",
    borderTile: "rgba(209, 213, 218, 0.3)",
    hoverBorderTile: "#CDE0F7",
    shadowTile: "rgba(9, 10, 51, 0.02)",
    backgroundSwitch: "#E5E5E5",
    mainText: "#6E7E91",
    title: "#252525",
    backgroundButton: "#0366D6",
    borderButton: "#4187D7",
    textButton: "#FFFFFF",
    onHoverButton: "#8CC2FF",
    focusButton: "#8CC2FF",
    selectedButton: "rgba(20, 70, 32, 0.2)",
    borderColor: "#F1F2F4",
    nameRepository: "#0366D6",
    icon: "#FFFFFF",
  },
};

export const darkMode: DefaultTheme = {
  ...common,
  colors: {
    background: "#252525",
    backgroundTile: "#313132",
    borderTile: "#414143",
    hoverBorderTile: "#34659E",
    shadowTile: "rgba(9, 10, 51, 0.03)",
    backgroundSwitch: "#6E6E6E",
    mainText: "#FFFFFF",
    title: "#FFFFFF",
    backgroundButton: "#2188FF",
    borderButton: "#569FF4",
    textButton: "#FFFFFF",
    onHoverButton: "#6D93BE",
    focusButton: "#6D93BE",
    selectedButton: "rgba(20, 70, 32, 0.2)",
    borderColor: "#414143",
    nameRepository: "#FFFFFF",
    icon: "#252525",
  },
};
