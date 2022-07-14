import React from "react";
import { LoadingIcon } from "./styled";
import { StyledWrapper } from "../Wrapper";
import { Info } from "../Info";

export const Loading = () => (
  <StyledWrapper>
    <Info>
      Please wait, projects are being loaded...
    </Info>
    <LoadingIcon />
  </StyledWrapper>
);