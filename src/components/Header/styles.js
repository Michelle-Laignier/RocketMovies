import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  display: flex;
  gap: 64px;
  height: 116px;
  justify-content: space-between;
  margin: 0 auto;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
    transition: 0.3s;
  }

  > h1:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }

  input {
    width: 45vw;
  }

  .line {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    left: 0;
    position: absolute;
    top: 116px;
    width: 100%;
  }
`

export const Profile = styled.div`
  align-items: center;
  display: flex;
  gap: 9px;
  text-align: -webkit-right;

  > div {

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE_200};
      font-size: 14px;
      font-weight: 700;
      transition: 0.3s;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 14px;
      font-weight: 400;
      transition: 0.3s;
      width: fit-content;
    }
  }
  
  > img {
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    border-radius: 50%;
    height: 64px;
    transition: 0.3s;
    width: 64px;
  }

  h2:hover, p:hover, img:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`