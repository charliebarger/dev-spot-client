import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Rings } from "react-loader-spinner";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

const StyledLink = styled.div`
  background: none;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: 0.5s;
  text-align: center;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 250px;
  min-width: 250px;
  background: white;
  box-shadow: 10px 5px 10px grey;
  border-radius: 5px;
  border: black solid 2px;
  position: relative;

  &:hover {
    > div:first-child {
      transition: 0.5s all ease-in-out;
      background: hsla(0, 0%, 0%, 0.8);
    }
    > div:first-child div {
      transition: 0.5s opacity ease-in-out;
      opacity: 1;
    }
  }
`;

const StyledShadow = styled.div`
  background: hsla(0, 0%, 50%, 0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2.5px;
  //   display: flex;
  //   flex-direction: column;
  //   gap: 32px;
  //   justify-content: center;
  //   align-items: center;
`;

const StyledEditButton = styled(StyledLink)`
  transition: 0.5s all ease-in-out;
  background: hsl(215, 100%, 50%);
  color: white;
  opacity: 0;
  font-size: 1rem;
  transition: 0.5s transform ease-in-out;
  &:hover {
    background: hsl(215, 100%, 59%);
    transform: translateY(-3px);
  }
`;

const StyledViewButton = styled(StyledLink)`
  transition: 0.5s all ease-in-out;
  background: hsla(0, 0%, 90%, 1);
  color: black;
  opacity: 0;
  font-size: 1rem;
  transition: 0.5s transform ease-in-out;
  &:hover {
    background: hsla(0, 0%, 100%, 1);
    transform: translateY(-3px);
  }
`;

const StyledDeleteButton = styled(StyledLink)`
  background: hsl(0, 100%, 50%);
  color: white;
  opacity: 0;
  font-size: 1rem;
  transition: 0.5s transform ease-in-out;
  &:hover {
    background: hsl(0, 100%, 59%);
    transform: translateY(-3px);
  }
`;

const StyledTopDivWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const StyledImgWrapper = styled.div`
  flex: 1;
  width: 100%;
  background: ${({ image }) =>
      image
        ? `url(${image})`
        : "url(https://mbfn.org/wp-content/uploads/2020/09/image-coming-soon-placeholder.png)"}
    no-repeat;
  background-size: ${({ image }) => (image ? "cover" : "contain")};
  background-position: center;
`;

const StyledArticleHeader = styled.h4`
  text-transform: capitalize;
  text-align: center;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  font-weight: 400;
  margin: 0;
  padding: 0.75rem;
  border-bottom: 1px solid black;
`;

const StyledSpan = styled.span`
  display: block;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding: 0.75rem;
`;

const StyledFooter = styled.footer`
  background: black;
`;

const StyledButtonWrapper = styled.div`
  width: max-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  height: 100%;
`;

const DashboardArticlePreview = (props) => {
  console.log(props.image);
  return (
    <StyledArticle>
      <StyledShadow>
        <StyledButtonWrapper>
          {props.post && (
            <Link to="">
              <StyledViewButton>View</StyledViewButton>
            </Link>
          )}
          <Link to="">
            <StyledEditButton>Edit</StyledEditButton>
          </Link>
          <Link to="">
            <StyledDeleteButton to="">Delete</StyledDeleteButton>
          </Link>
        </StyledButtonWrapper>
      </StyledShadow>
      <StyledTopDivWrapper>
        <StyledArticleHeader>{props.title}</StyledArticleHeader>
        <StyledImgWrapper image={props.image}></StyledImgWrapper>
      </StyledTopDivWrapper>
      <StyledFooter>
        <StyledSpan>Last Edited: {props.shortDate}</StyledSpan>
      </StyledFooter>
    </StyledArticle>
  );
};

export default DashboardArticlePreview;