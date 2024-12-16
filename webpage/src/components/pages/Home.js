import '../Header.css'
import Header from '../Header';
import Footer from '../Footer';
// import Giffy from '../Giffy';
import Typewriter from '../Typewriter';
import { Container } from 'react-bootstrap';
import Featured from '../Featured';

const Home = () => {
  return (
    <div className="Home">
      <Container fluid>
        <Header/>
        <br/>
        <div className="animation">
          <Typewriter text="Hi, I'm Andre." speed={125} />
            {/* <Giffy/> */}
        </div>
        <br/>
        <div className="home-container">
          <div className="med-text">
            favorite project!
            <br/>
          </div>
          <Featured/>
        </div>
      </Container>
      <br/><br/>
      <Footer/>
      </div>
  )
}

export default Home