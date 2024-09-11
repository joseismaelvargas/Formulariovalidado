import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Carta from './Carta';
import { useForm } from "react-hook-form"
import { useState ,useEffect} from 'react';
import{ v4 as uuidv4}from'uuid'


function Formularipeli() {
  const { register, handleSubmit ,formState:{errors}} = useForm();
  let leerlocal=JSON.parse(localStorage.getItem("peliculasguardada"))||[]
  const [peliculas,setpeliculas]=useState(leerlocal)

  useEffect(() => {
    localStorage.setItem("peliculasguardada",JSON.stringify(peliculas))
    
  }, [peliculas]);



  const enviar=(data,e)=>{
    e.preventDefault()
    e.target.reset()
    let pelicula={
      pelicula:data.pelicula,
      descripcion:data.descripcion,
      genero:data.genero,
      id:uuidv4()
    }
   
    setpeliculas([pelicula,...peliculas])
    
     
  }
  console.log(peliculas)
  return (
    <>
    <div className=' d-flex justify-content-center align-items-center ' >
    <Form onSubmit={handleSubmit(enviar)} >
      <FloatingLabel
        controlId="floatingInput"
        label="Pelicula"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Pelicula"  name="pelicula" {...register("pelicula")} />
      </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Descripcion">
        <Form.Control
          as="textarea"
          placeholder="Descripcion"
          style={{ height: '100px',
            width:"200px"
           }} name='descripcion'{...register("descripcion")}
        />
      </FloatingLabel>
    <Form.Select aria-label="genero" name='genero'{...register("genero")}>
      <option>Genero de Peliculas</option>
      <option value="Terror">Terror</option>
      <option value="Accion">Accion</option>
      <option value="Comedia">Comedia</option>
      <option value="Fantacia">Fantacia</option>
    </Form.Select>
      
        <button className="btn btn-primary" type='submit'>Enviar</button>
    </Form>
 
 </div>
 <hr />
 <div className='container div'>
 {
  peliculas.map((element)=>(
      <Carta 
      key={element.id} peli={element.pelicula} descripcion={element.descripcion} genero={element.genero} id={element.id}> </Carta> 
  ))
 }
</div>
 
</>
  );
}

export default Formularipeli;