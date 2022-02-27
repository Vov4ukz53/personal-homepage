import { LoadingIcon } from "./styled";
import { StyledWrapper } from "../wrapper";
import { Info } from "../info";

export const Loading = () => (
  <StyledWrapper>
    <Info>
      Please wait, projects are being loaded...
    </Info>
    <LoadingIcon />
  </StyledWrapper>
);