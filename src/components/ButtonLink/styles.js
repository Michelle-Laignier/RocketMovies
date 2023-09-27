import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  // to be used at Home
  background-color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.BG_TAG};
  font-weight: 500;
  padding: 16px 0;
  width: auto;
`