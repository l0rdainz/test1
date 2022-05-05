import React from 'react'
import { Modal,Button } from "react-bootstrap";
function Cardmodal({Recipes,Cardbutton}) {
  return (
    <div>
        <Modal show={Cardbutton}>

<Modal.Header closeButton>

  <Modal.Title>sdasdas</Modal.Title>

</Modal.Header>

<Modal.Body>dsadsadas</Modal.Body>

<Modal.Footer>

  <Button variant="secondary">Close</Button>

</Modal.Footer>

</Modal>
    </div>
  )
}

export default Cardmodal