import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.BG_TAG};
  font-weight: 500;
  padding: 16px 0;
  width: auto;
`