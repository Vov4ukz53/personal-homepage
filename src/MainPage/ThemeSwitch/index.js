import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Wrapper, Button, Text, SwitchBody, Icon, IconBody } from "./styled";

export const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

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

