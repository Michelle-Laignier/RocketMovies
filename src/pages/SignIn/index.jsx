import { FiMail, FiLock} from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <div>
          <Input placeholder="E-mail" type="text" icon={FiMail} className='box'/>
          <Input placeholder="Senha" type="password" icon={FiLock}/>
        </div>

        <Button title="Entrar"/>
        <Link to="/register">Criar conta</Link>
      </Form>

      <Img/>
    </Container>
  )
}