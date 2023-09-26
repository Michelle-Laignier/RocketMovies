import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 0;
  width: 100%;

  height: 100vh;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  > header {
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    display: flex;
    height: 144px;

    a {
      align-items: center;
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      gap: 8px;
      margin-left: 168px;
    }
  }
`

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;

  .div1, .div2 {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      padding: 18px 51px;
      width: 30vw;
    }

    svg {
      margin-left: 12px;
    }
  }

  .div2 {
    margin: 24px 0;
  }

  button {
    opacity: 0.5;
    margin-bottom: 203px;
    width: 30vw;
  }
`

export const Avatar = styled.div`
  position: relative;

  margin: -94px 0 64px;

  > img {
    border-radius: 50%;
    height: 186px;
    width: 186px;
  }

  > label {
    align-items: center;
    display: flex;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;
    color: ${({ theme }) => theme.COLORS.BG_TAG};
    cursor: pointer;
    transition: filter 0.3s;

    height: 48px;
    width: 48px;

    position: absolute;
    bottom: 7px;
    right: 7px;

    input {
      display: none;
    }

    svg {
      margin-left: 0;
      height: 20px;
      width: 20px;
    }

  }

  > label:hover {
    filter: brightness(0.8);
  }
`