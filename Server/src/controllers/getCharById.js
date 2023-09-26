const axios = require ("axios"); //siempre q hacemos peticion a la api traemos a axios
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => { // con este async definimos que va a ser asincrono: asinc await
    try {
        const { id } = req.params;  //hacemos peticion a la api a partir del id que recibimos por Params. (llega a través de request)
        const {data} = await axios(`${URL}/${id}`)//la respuesta q se espera, del response nos quedamos con data.
        
        if (!data.name) throw Error(`Faltan datos del personaje con ID: ${id}`);
        // si no llega la data lanza un throwpara q lo agarre el catch
        const character = { 
            id: data.id,
            name: data.name,
            species: data.species, 
            origin: data.origin,
            image: data.image,
            gender: data.gender,
            status: data.status
        }
        return res.status(200).json(character) //enviamos la respuesta (el personaje creado) en formato json
             

    } catch (error) { //error es un objeto y en su propiedad message nos llega el mensajito de error q mandamos.
        return error.message.includes("ID")
        ? res.status(404).send(error.message) //si el mensaje incluye ID va a retornar 4004 con el mensaje
        : res.status(500).send(error.response.data.error) // si no retorna 500 con el mensaje
  
    }    
}


module.exports = {
    getCharById
}