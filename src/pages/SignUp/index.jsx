import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

import { Container, Form, Img } from './styles'

import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(name === "" || email === "" || password === "") {
      return alert("Preencha nome, email e senha.")
    } else if(!email.includes("@")) {
      return alert("Coloque um email válido.")
    } else {
      console.log(name, email, password);

      api.post("/users", {name, email, password})
      .then(() => {
        alert("Usuário cadastrado com sucesso! :D")
        navigate("/")
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar. :(")
        }
      }) 
    }
  }

  function handleBack() {
    navigate("/")
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <div>
          <Input placeholder="Nome" type="text" icon={FiUser} onChange={e => setName(e.target.value)}/>
          <Input placeholder="E-mail" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
          <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        </div>

        <Button title="Cadastrar" onClick={handleSignUp}/>
        <button onClick={handleBack}> <FiArrowLeft/> Voltar para o login</button>
      </Form>

      <Img/>
    </Container>
  )
}