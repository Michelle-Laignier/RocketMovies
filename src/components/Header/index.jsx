import { Container, Profile } from './styles'

import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile>
        <div>
          <h2>Michelle Laignier</h2>
          <p>sair</p>
        </div>
        <img src="https://github.com/Michelle-Laignier.png" alt="Foto de perfil" />
      </Profile>
      <div className='line'></div>
    </Container>
  )
}