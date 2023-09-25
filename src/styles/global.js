import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BG};
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    overflow-y: hidden;

    -webkit-font-smoothing: antialiased;

    margin: 0 auto;
    width: 80vw;
  }

  body, input, button, textarea {
    border: none;
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.3s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  input:hover,
  input:focus,
  textarea:hover,
  textarea:focus {
    outline: 1px solid ${({ theme }) => theme.COLORS.PINK};
  }
`