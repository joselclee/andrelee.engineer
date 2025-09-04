import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/source-demo.jpg';

const Website = () => {
  return (
    <div>
        <Card className="normalize">
        <Card.Img variant="top" src={asset} alt="Snippet" className="img-custom"/>
            <Card.Body>
                <Card.Title>Source code</Card.Title>
                <Card.Text>
                  This is a snippet of the code behind this website.
                  Click the button below to view the repository.
                  <br/><br/>
                </Card.Text>
                <Button variant="dark" href="https://github.com/joselclee/andrelee.dev" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> JavaScript
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Website