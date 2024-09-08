import React,{useState} from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Logica() {
    const [verificador,setverificador]=useState(true)
    const [nombre,setnombre]=useState("")
    const [apellido,setapellido]=useState("")
    const [dni,setDni]=useState("")
 const enviar =(e)=>{
    e.preventDefault()
    if(nombre.length===0||apellido.length===0||dni.length===0){
          alert("“Completar todos los datos”")
          setverificador(false)
         
    }else{
        alert("Formulario Enviado con Exito...")
        setnombre("")
        setapellido("")
        setDni("")
    }
 }
 const nombreinput=(e)=>{
    setnombre(e.target.value)
    
 }
 const apellidoinput=(e)=>{
    setapellido(e.target.value)
 }
 const dniinput=(e)=>{
    setDni(e.target.value)
 }

    return (
        <>
        <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Multiple files input example</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group controlId="formFileDisabled" className="mb-3">
        <Form.Label>Disabled file input example</Form.Label>
        <Form.Control type="file" disabled />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>
    </>
        
    )
}

export default Logica
