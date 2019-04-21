import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const DeleteModal = ({modal, toggle, removeClient}) => {

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h4 className="text-center">Do you want to delete client?</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={removeClient}>Delete</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteModal;