import { FiMail, FiLock} from 'react-icons/fi'

import { Container, Form, Img } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

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
        <ButtonText title="Criar conta" />
      </Form>

      <Img/>
    </Container>
  )
}