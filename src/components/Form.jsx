import './Form.css'
import React, {useState} from 'react'
import Card from "./Card";
import imgPerro from '../assets/dog.png'

const Form = () => {
    const [user, setUser] = useState({
        nombrePerro: '',
        resposableDePerro:'',
        tipoDeCita:'' 
    })
    const [show, setShow] = useState(false)
    const[err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombrePerro.length >= 3 && user.nombrePerro.charAt(0) != " " && user.resposableDePerro.length >= 6){
            setShow(true)
            setErr(false)
        }else{
            setErr(true)
        }
    }

    return (
        <div>
            <h2>Centro veterinario San Juan</h2>
            <form onSubmit={handleSubmit} className="formEstilo">
                
                <label>Nombre de tu canHijo</label>
                <input   tyre = "text" value ={user.nombrePerro} onChange={(e) => setUser({...user, nombrePerro: e.target.value})}/>

                <label>Ingresa tu nombre</label>
                <input tyre = "text" value ={user.resposableDePerro} onChange={(e) => setUser({...user, resposableDePerro: e.target.value})}/>

                <select value={user.tipoDeCita} onChange={(e) => setUser({...user, tipoDeCita: e.target.value})}>
                    <option value="">Selecciona</option>
                    <option value="veterinario">Control veterinario</option>
                    <option valu="Peluqueria">Peluqueria</option>
                </select>
                <button>Enviar</button>
                {err && 'Por favor chequea que la información sea correcta'}
                <img src = {imgPerro} alt="Imagen de perro" />
            </form>
            {show && <Card nombrePerro={user.nombrePerro} resposableDePerro={user.resposableDePerro} tipoDeCita={user.tipoDeCita}/>}

        </div>

    )
}

export default Form