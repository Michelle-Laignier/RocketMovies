import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles";

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  return(
    <Container>
      <header>
        <Link to ="/"> <FiArrowLeft/> Voltar</Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Michelle-Laignier.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <div className='div1'>
          <Input placeholder="Nome" type="text" icon={FiUser}/>
          <Input placeholder="E-mail" type="text" icon={FiMail}/>
        </div>

        <div className='div2'>
          <Input placeholder="Senha atual" type="password" icon={FiLock}/>
          <Input placeholder="Nova senha" type="password" icon={FiLock}/>
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}