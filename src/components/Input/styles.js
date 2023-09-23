import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;

  > input {
    background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    padding: 18px 24px;
  }

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 14px;
  }

  svg {
    position: absolute;
    margin-left: 16px;
  }
`