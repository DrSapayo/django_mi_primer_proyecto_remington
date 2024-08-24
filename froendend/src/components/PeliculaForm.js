import React, { useEffect,useState} from 'react';
import {useParams, useNavigate } from 'react-router-dom'
import { getPeliculasById, createPeliculas, updatePeliculas } from '../actions/peliculasActions';

const PeliculaForm = () => {
    const {id} = useParams();
    const navigate = useNavigate ();

    const[pelicula, setPeliculas] = useState({
        titulo: '',
        descripcion:'',
        imagen: null,
    });

    useEffect(()=>{
        const fetchPeliculas = async() =>{
            try{
                const data = await getPeliculasById(id);
                setPeliculas(data);
            }catch(error){
                console.error("error: ", error)
            }
        };
        fetchPeliculas()
    },[id]);

    const handleChange = async(e) =>{
        setPeliculas({
            ...pelicula,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
            if(id){
                await updatePeliculas(id,pelicula);
            }else {
                await createPeliculas(pelicula);
            }
            navigate('/');
        }catch(error){
            console.error("error: ", error)
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Titulo:</label>
                <input type='text' name="titulo" value={pelicula.titulo} onChange={handleChange} required></input>
            </div>
            <div>
                <label>Descripcion:</label>
                <input type='text' name="descripcion" value={pelicula.descripcion} onChange={handleChange} required></input>
            </div>
            <div>
                <label>Imagen:</label>
                <img src={`${pelicula.imagen}`} alt={pelicula.titulo} />
                <input type='file' name="imagen"  onChange={handleChange} ></input>
            </div>
            <button type='submit'>Guardar</button>
        </form>
    )


} 
export default PeliculaForm;