import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/numbers-demo.mp4';

const DigitClassifier = () => {
  return (
    <div>
        <Card className="normalize">
            <video src={asset} alt="Snippet" className="img-custom" autoPlay loop muted />
            <Card.Body>
                <Card.Title>Digit Classifier Model</Card.Title>
                <Card.Text>
                  This marks my first step into machine learning! For this model, I provided 18 self-drawn 
                  images with the current real-world accuracy of the model at 50%.
                </Card.Text>
                <Button variant="dark" href="https://github.com/joselclee/Handwritten-Number-Identifier" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Python
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default DigitClassifier