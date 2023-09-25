import styled from 'styled-components'
import signImg from '../../assets/img-bg.svg'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100vh;

  position: absolute;
  right: 0;
  left: 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 48px;
    font-weight: 700;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE_300};
    font-size: 14px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 24px;
    font-weight: 500;
    margin: 48px 0;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    input {
      padding: 18px 55px;
      width: 100%;
    }
  }

  > button {
    margin: 24px 0 42px;
  }

  >button:last-child {
    margin: 0;
  }
`

export const Img = styled.div`
  background: url(${signImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.5);
  flex: 1;
`