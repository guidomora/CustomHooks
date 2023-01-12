// para agregarle la funcionalidad hay que crear las funciones y pasarselas al return
// y luego llamarlas en el componente en el que usamos el custom hook


// a las funciones dec/incrementar les pasamos un value para que se poueda modificar las cantidades
// que van a modificar el counter


import React, { useState } from "react";

const useCounter = ( initialValue = 10 ) => {
  const [counter, setCounter] = useState(initialValue);

  const incrementar = (value = 1) => {
    setCounter(counter + value)
  }

  const decrementar = (value = 1) => {
    // no deja que de numero negativo el counter
    if (counter === 0) return 
    setCounter(counter - value)
  }

  const reset = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};

export default useCounter;
