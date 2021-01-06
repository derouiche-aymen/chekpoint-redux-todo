import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {edit} from '../Const/Actions'

const Edit = ({el}) => {
    const [edited, setEdited] = useState(el.text)
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(edit({Newtext:edited,index:el.id}))
        toggle ()
    } 

  const [modal, setModal] = useState(false);

  const toggle = () => {setModal(!modal)
  };

  return (
    <div>
      <button onClick={toggle}>Edit</button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
<input type='text' value={edited} onChange={(e)=>setEdited(e.target.value) }>
</input>        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleEdit}>Change</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edit;
