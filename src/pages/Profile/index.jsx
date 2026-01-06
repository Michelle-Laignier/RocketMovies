import { useState } from 'react';
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera} from 'react-icons/fi'

import { useAuth } from '../../hooks/auth'

import { Container, Form, Avatar } from "./styles";

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOld_password] = useState()
  const [newPassword, setNewPassword] = useState()

  async function handleUpdate() {
    if(!oldPassword) {
      return alert("Digite sua senha atual para confirmar as alterações.")
    }

    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    if(!user.old_password) {
      return alert("Senha atual incorreta.")
    }
    console.log(user);
    await updateProfile({ user })
  }

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
          <Input placeholder="Nome" value={name} type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
          <Input placeholder="E-mail" value={email} type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className='div2'>
          <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setOld_password(e.target.value)}/>
          <Input placeholder="Nova senha" type="password" icon={FiLock} onChange={e => setNewPassword(e.target.value)}/>
        </div>

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  )
}