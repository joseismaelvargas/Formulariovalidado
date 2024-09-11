import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Carta({peli,descripcion,genero,id}) {
  return (
    <Card className='my-3' style={{ width: '18rem' }} key={id}>
      <Card.Header> la pelicula es {peli}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Title:{peli}</ListGroup.Item>
        <ListGroup.Item>Descripcion :{descripcion}</ListGroup.Item>
        <ListGroup.Item>genero:{genero}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Carta;