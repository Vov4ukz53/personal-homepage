import { StyledWrapper } from "../wrapper";
import { Info } from "../info";
import { LinkButton } from "../../linkButton";
import { ErrorIcon, ErrorTitle } from "./styled";

export const Error = () => {
  const linkToGitHub = "https://github.com/Vov4ukz53";

  return (
    <StyledWrapper>
      <ErrorIcon />
      <ErrorTitle>
        Ooops! Something went wrong...
      </ErrorTitle>
      <Info error>
        Sorry, failed to load Github projects. You can check them directly on Github.
      </Info>
      <LinkButton gitHub
        href={linkToGitHub}
        title={linkToGitHub}
        target="_blank"
      >
        Go to Github
      </LinkButton>
    </StyledWrapper>
  );
};