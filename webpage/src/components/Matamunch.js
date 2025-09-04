import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/matamunch-demo.jpg';

const Matamunch = () => {
  return (
    <div>
        <Card className="normalize">
        <Card.Img variant="top" src={asset} alt="Snippet" className="img-custom"/>
            <Card.Body>
                <Card.Title>Matamunch</Card.Title>
                <Card.Text>
                  Food searching program that can search for food using
                  prices, calories, location, and name.
                  <br/><br/>
                </Card.Text>
                <Button variant="dark" href="https://github.com/joselclee/COMP-282-Matamunch" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Java
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Matamunch