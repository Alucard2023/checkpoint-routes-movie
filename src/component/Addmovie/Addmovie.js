
import React,{useState} from 'react'; 
import { ModalBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const Addmovie = ({add}) => {
    const [show,setShow]=useState(false);   /*declaration of state*/
    const handleShow=()=> setShow(true);   /*handleshow et handleclose=update of state*/
    const handleClose=()=>setShow(false);

//initialisation state
const [title,setTitle]= useState("");
const [description,setDescription]= useState("");
const [rate,setRate]= useState("")
const [posterUrl,setPosterUrl]= useState("");
//update state
const handleTitle=(e)=>
{
    setTitle(e.target.value);
}
const handleDescription=(e)=>
{
    setDescription(e.target.value);
}
const handleRate=(e)=>{
    setRate(e.target.value);
}
const handlePosterUrl=(e)=>{
    setPosterUrl(e.target.value);
}
//function add movie
const handlemovie =(e)=>{
    let newMovie = { title,description,rate,posterUrl} 
    add(newMovie)

}


  return (
    
    <div>
       <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <ModalBody>
        <Form.Label className='sss'>movie Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e)=> handleTitle(e)} />
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description"value={description} onChange={(e)=> handleDescription(e)} />
        <Form.Label>Rate</Form.Label>
        <Form.Control type="number" placeholder="Enter Rate"value={rate} onChange={(e)=> handleRate(e)} />
        <Form.Label>Url</Form.Label>
        <Form.Control type="Url" placeholder="Enter URL" value={posterUrl} onChange={(e)=> handlePosterUrl(e)}/>
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handlemovie()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addmovie
