import { Container, Profile } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../Input'

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to="/profile">
        <div>
          <h2>Michelle Laignier</h2>
          <Link to="/login">sair</Link>
        </div>
        <img src="https://github.com/Michelle-Laignier.png" alt="Foto de perfil" />
      </Profile>
      <div className='line'></div>
    </Container>
  )
}