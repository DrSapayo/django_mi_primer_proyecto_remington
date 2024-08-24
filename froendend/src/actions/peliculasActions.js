import axios from "axios";

const API_URL = 'http://localhost:8000'

export const getPeliculas = async () => {
    try{
        const response = await axios.get(`${API_URL}/api/peliculas/`);
        return response.data;
    }catch(error){
        console.error("Error al recuperar las peliculas: ", error)
        throw error;
    }
};

export const getPeliculasById = async (id) => {
    try{
        const response = await axios.get(`${API_URL}/api/peliculas/${id}/`);
        return response.data;
    }catch(error){
        console.error(`Error al recuperar la pelicula ${id}: `, error)
        throw error;
    }
};

export const createPeliculas = async (pelicula) => {
    try{
        const formData = new FormData();
        formData.append('titulo', pelicula.titulo);
        formData.append('descripcion', pelicula.descripcion);
        if(pelicula.image){
            formData.append('image', pelicula.image);
        }
        const response = await axios.post(`${API_URL}/api/peliculas/`,formData);
        return response.data;
    }catch(error){
        console.error(`Error al crear una la pelicula : `, error)
        throw error;
    }
};

export const updatePeliculas = async (id,pelicula) => {
    try{
        const formData = new FormData();
        formData.append('titulo', pelicula.titulo);
        formData.append('descripcion', pelicula.descripcion);
        if(pelicula.image){
            formData.append('image', pelicula.image);
        }
        const response = await axios.put(`${API_URL}/api/peliculas/${id}/`,formData);
        return response.data;
    }catch(error){
        console.error(`Error al actualizar la pelicula ${id}: `, error)
        throw error;
    }
};

export const deletePelicula = async (id) => {
    try{
        await axios.delete(`${API_URL}/api/peliculas/${id}/`);
    }catch(error){
        console.error(`Error al eliminar la pelicula ${id}: `, error)
        throw error;
    }
}