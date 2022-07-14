import React from "react";
import { StyledWrapper } from "../Wrapper";
import { Info } from "../Info";
import { LinkButton } from "../../LinkButton";
import { ErrorIcon, ErrorTitle } from "./styled";
import { github } from "../../../PersonalPage/links";

export const Error = () => (
  <StyledWrapper>
    <ErrorIcon />
    <ErrorTitle>
      Ooops! Something went wrong...
    </ErrorTitle>
    <Info error>
      Sorry, failed to load Github projects. You can check them directly on Github.
    </Info>
    <LinkButton gitHub
      href={github}
      title={github}
      target="_blank"
    >
      Go to Github
    </LinkButton>
  </StyledWrapper>
);
