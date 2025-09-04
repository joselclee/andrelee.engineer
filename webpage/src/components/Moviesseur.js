import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/movie-demo.mp4';

const Moviesseur = () => {
  return (
    <div>
        <Card className="normalize">
        <video src={asset} alt="Snippet" style={{borderRadius: '5px'}}className="img-custom" autoPlay loop muted />
            <Card.Body>
                <Card.Title>Moviesseur</Card.Title>
                <Card.Text>
                  Fullstack application that taught me about implementing APIs and how to connect and
                  troubleshoot between the backend and frontend.
                </Card.Text>
                <Button variant="dark" href="https://github.com/joselclee/Moviesseur" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Backend
                </Button>
                {" "}
                <Button variant="dark" href="https://github.com/joselclee/Moviesseur-Front-End" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> Frontend
                </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Moviesseur