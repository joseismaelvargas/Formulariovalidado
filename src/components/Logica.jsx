import React,{useState} from 'react'

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
        <form action="" onSubmit={enviar} >
            <input className={verificador?"input":"vacio"} type="text" placeholder='Nombre..' onChange={nombreinput} value={nombre} /><br />
           
            <input className= {verificador?"input":"vacio"}type="text" placeholder='Apellido..' value={apellido} onChange={apellidoinput} /><br />
            <input className={verificador?"input":"vacio"} type="text" placeholder='DNI..' value={dni}  onChange={dniinput} /><br />
         
            <button style={{
                margin:" 10px 100px"
            }}   type='Submit' className=' btn btn-primary'onSubmit={enviar}>Enviar Formulario</button>
        </form>
    )
}

export default Logica
