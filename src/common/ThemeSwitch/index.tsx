import React from "react";
import { useAppSelector, useAppDispatch } from "../../core/App/hooks";
import { selectIsDarkTheme, toggleTheme } from "./themeSlice";
import {
  Wrapper,
  Button,
  Text,
  SwitchBody,
  Icon,
  IconBody
} from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useAppSelector(selectIsDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(toggleTheme())}
      >
        <Text>
          Dark mode {isDarkTheme ? "on" : "off"}
        </Text>
        <SwitchBody>
          <IconBody
            active={isDarkTheme}
          >
            <Icon />
          </IconBody>
        </SwitchBody>
      </Button>
    </Wrapper>
  );
};

