import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.EastBay};
  padding: 20px;
  border: 2px solid rgba(255, 255, 255, 0.478);
  border-radius: 20px;
  width: 80%;
  min-height: 65px;
  margin: auto;
  text-align: center;
  font-size: x-large;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
    padding: 10px;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.775);
  }
`;

export const Header = styled.header`
  text-decoration: none;
  font-weight: bolder;
`;

export const Content = styled.p`
  text-decoration: underline;

  ${({ $hidden }) =>
    $hidden &&
    css`
      color: transparent;
    `}
`;
