import { Container } from "./styles";

export function ButtonLink({ title, ...rest}) {
  return(
    <Container type="button" {...rest}>
      {title}
    </Container>
  )
}