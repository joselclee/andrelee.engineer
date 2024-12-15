import Header from '../Header';
import Footer from '../Footer';
import Container from 'react-bootstrap/Container';
import pdfLink from '../assets/castillolee-joseleandre-12-15-2024.pdf';
const Resume = () => {
  return (
    <div className="Resume">
        <Header/>
          <Container fluid>
            <br/>
            <iframe src={pdfLink}
            title="Resume" alt="resume" width="100%" height="1000vh"/>
            <br/><br/>
          </Container>
          <br/>
          <Footer/>       
    </div>
  );
};

export default Resume;
