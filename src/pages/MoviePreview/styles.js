import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`

export const Content = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE_200};
  height: 80vh;
  margin-top: 40px;
  padding: 0 24px 156px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.PINK};

    align-items: center;
    display: flex;
    gap: 8px;
    width: fit-content;
  }

  .title-div {
    align-items: center;
    display: flex;
    gap: 19px;
    margin: 24px 0;
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
  }

  .stars {
    color: ${({ theme }) => theme.COLORS.PINK};
    stroke: ${({ theme }) => theme.COLORS.PINK};

  }

  .info {
    align-items: center;
    display: flex;
    gap: 8px;

    img {
      border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
      border-radius: 50%;
      height: 16px;
      width: 16px;
    }
  }

  .clock {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .tags {
    display: flex;
    gap: 8px;
    margin: 40px 0;
  }

  .text {
    text-align: justify;
  }
`