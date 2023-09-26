import { Container, Content, Form } from "./styles";

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { TagItem } from '../../components/TagItem'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return(
    <Container>
      <Header/>

      <Content>
        <div className="title-div">
          <a href="#"> <FiArrowLeft/> Voltar</a>
          <h1>Novo filme</h1>
        </div>

        <Form>
          <div className="inputs-div">
            <Input placeholder="Título" type="text" className="input"/>
            <Input placeholder="Sua nota (de 0 a 5)" type="number" min="0" max="5" className="input" />
          </div>

          <textarea placeholder="Observações" name="" id="" cols="30" rows="10"></textarea>

          <Section title="Marcadores">
            <div className="tags">
              <TagItem value="React" />
              <TagItem value="Novo marcador" $isNew={true}/>
            </div>
          </Section>

          <div className="buttons-div">
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </Content>
    </Container>
  )
}