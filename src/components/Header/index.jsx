import { Container, Profile } from './styles'

import { useAuth } from '../../hooks/auth'

import { Input } from '../Input'
import { ButtonLink } from '../ButtonLink'

export function Header() {
  const { signOut, user } = useAuth()

  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder="Pesquisar pelo título"/>
      <Profile to="/profile">
        <div>
          <h2>Michelle Laignier</h2>
          <ButtonLink title="sair" onClick={signOut}></ButtonLink>
        </div>
        <img src="https://github.com/Michelle-Laignier.png" alt="Foto de perfil" />
      </Profile>
      <div className='line'></div>
    </Container>
  )
}