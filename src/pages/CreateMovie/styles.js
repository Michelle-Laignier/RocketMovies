import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`

export const Content = styled.div`

  height: 80vh;
  margin-top: 40px;
  padding-right: 24px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
  
  .title-div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};

    align-items: center;
    display: flex;
    gap: 8px;
    width: fit-content;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 36px;
    font-weight: 500;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 1px 93px;

  .inputs-div {
    display: flex;
    gap: 40px;

  }
  
  .cvaxea,
  input {
    width: 100%;
  }

  > textarea {
    background-color: ${({ theme }) => theme.COLORS.BG_INPUT};
    border-radius: 10px;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    min-height: 274px;
    padding: 19px 16px;
    width: 100%;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  section h1 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    min-height: 88px;
    padding: 16px;
  }

  .buttons-div {
    display: flex;
    gap:40px ;

    button {
      width: 100%;
    }
  }

  button:first-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`