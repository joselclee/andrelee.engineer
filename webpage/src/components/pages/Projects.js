import Header from '../Header';
import Footer from '../Footer';
import Website from '../Website';
import DigitClassifier from '../DigitClassifier';
import Moviesseur from '../Moviesseur';
import TodoList from '../TodoList';
import Matamunch from '../Matamunch';
import SkincareSite from '../SkincareSite';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <div>
        <Header/>
        <br/>
        <Container fluid='lg'>
        <Row>
          <Col>
            <Website />
          </Col>

          <Col>
            <SkincareSite/>
          </Col>

          <Col>
            <Moviesseur />
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <TodoList />
          </Col>
            
          <Col>
            <DigitClassifier />
          </Col>

          <Col>
            <Matamunch />
          </Col>

        </Row>
      </Container>
      <br/>
      <Footer/>
    </div>
  )
}

export default Projects