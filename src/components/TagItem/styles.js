import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: center;

  background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.BG_INPUT};
  border: ${({ theme, $isNew }) => $isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : 'none'};
  border-radius: 10px;
  padding: 16px;
  
  button,
  input {
    background: none;
  }
  
  input {
    color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE_100};
  }

  button {
    color: ${({ theme }) => theme.COLORS.PINK};
    transition: 0.3s;
  }

  button:hover {
    scale: 1.5;
  }
`
