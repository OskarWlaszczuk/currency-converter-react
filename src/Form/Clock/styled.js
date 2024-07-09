import styled from "styled-components";

export const Container = styled.div`
  text-align: end;
  margin-bottom: 25px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tabletHorizontal}px) {
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled.p`
  font-family: monospace, monospace;
  color: #fff7f7b3;
`;
