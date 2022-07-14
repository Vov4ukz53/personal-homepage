import React from "react";
import { useAppSelector } from "../../../core/App/hooks";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Title } from "../../../common/Title";
import { GithubIcon } from "../../../common/GithubIcon";
import { Repositories } from "./Repositories";
import {
  Wrapper,
  Header,
  SubTitle,
} from "./styled";
import {
  selectError,
  selectLoading,
} from "../../../core/personalPageSlice";

export const Portfolio = () => {
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  return (
    <Wrapper>
      <Header>
        <GithubIcon portfolio="true" />
        <Title portfolio>Portfolio</Title>
        <SubTitle>My recent projects</SubTitle>
      </Header>
      {loading ? <Loading />
        : error ? <Error />
          : <Repositories />
      }
    </Wrapper >
  );
};