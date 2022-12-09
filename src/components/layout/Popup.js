import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>User Not Logged In</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Please Log in to explore more!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default Popup;