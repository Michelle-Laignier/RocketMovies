import styled from "styled-components";

export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.BG_TAG};
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.TAG_COLOR};
  font-size: 12px;
  padding: 5px 16px;
`