import { Container } from './styles'
import { Tag } from '../Tag'

import Rating from '@mui/material/Rating';

export function Note({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Rating name="half-rating" defaultValue={3.5} precision={0.5} className='stars' readOnly />
      
      <p>{data.text}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map( tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  )
}