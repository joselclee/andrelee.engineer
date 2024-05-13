import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/item6.png';

const Item6 = () => {
  return (
    <div>
        <Card className="normalize">
        <Card.Img variant="top" src={asset} alt="Snippet" className="img-custom"/>
            <Card.Body>
                <Card.Title>Skincare Ecommerce Site</Card.Title>
                <Card.Text>
                    A full-stack ecommerce site that allows users to create an account and browse, search, and <s>purchase</s> skincare products. Accounts and 
                    product information are stored in a database.
                  <br/><br/>
                </Card.Text>
                <Button variant="dark" href="https://github.com/Three-cats-and-an-owl/Website-front-end" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Frontend
                </Button>
                {" "}
                <Button variant="dark" href="https://github.com/Three-cats-and-an-owl/Website-back-end" target = "_blank">
                    <FontAwesomeIcon icon={faCode} /> Backend
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Item6