import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 24px;
    font-weight: 700;
  }
`