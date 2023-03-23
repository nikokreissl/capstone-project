import styled from "styled-components";
import Link from "next/link";

export const StyledArticle = styled.article`
  width: 70vw;
  margin: 25px;
  padding: 25px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledDetailsLink = styled(Link)`
  padding: 8px 15px 8px 15px;
  border: 1px solid black;
  border-radius: 5px;
  text-decoration: none;
  align-self: center;
`;
