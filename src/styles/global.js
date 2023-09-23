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

    -webkit-font-smoothing: antialiased;
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