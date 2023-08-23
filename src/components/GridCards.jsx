/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const GridCards = (props) => {
    return (
    <Row xs={1} md={4} className="g-4">
      {props.data.map((photo, idx) =>(
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={photo.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{`Usuário ${photo.id} - ${photo.title}`}</Card.Title>
              <Card.Text>{`Tenha acesso versão completa dessa immagem no link: ${photo.url}`}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>)
};
