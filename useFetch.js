// Cada vez que el url cambie, se vuelve a diaparar el useEffect

// Creamos la funcion getFetch
// dentro la constante resp a la que a traves del parametro url le vamos a pasar el link a la API
// Luego data pasa los datos a json


// En el estate: data= el producto de la peticion a la API, isLoading para sabe cuando estoy
// cargando (por defecto cuando se monta tiene que estar cargando por eso el true) y despues
// el hasError para asber si hay un error (por defecto va en null pq no tenemos error)


// Si queremos volver a llamar el fetch, es posible que querramos poner un isLoading
// en true, por eso desestructuramos el state con el spread y ponemos el isLoading en true


// El state al ser un objeto tengo que mandar todas la propiedades, la data va a ser
// igual a la data de arriba (const data), isLoading en false pq ya cargo y el hasError
// en null pq no hay error

// En el return pasamos todas nuestras propiedades asi se pueden usar en donde importemos el hook




import { useEffect, useState } from "react";

const useFetch = (url) => {
const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })


    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }


    useEffect(() => {
        getFetch();
    }, [url])
    


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
};

export default useFetch;
