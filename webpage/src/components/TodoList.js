import './Item.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import asset from './assets/item-assets/tracker-demo.mp4';

const TodoList = () => {
  return (
    <div>
        <Card className="normalize">
        <video src={asset} alt="Snippet" className="img-custom" autoPlay loop muted />
            <Card.Body>
                <Card.Title>Todo List</Card.Title>
                <Card.Text>
                  Simple Todo list in React with basic functionality like 
                  adding, removing, and marking tasks as complete.
                  <br/><br/>
                </Card.Text>
                <Button variant="dark" href="https://github.com/joselclee/todo-list" target = "_blank">
                  <FontAwesomeIcon icon={faCode} /> JavaScript
                  </Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default TodoList