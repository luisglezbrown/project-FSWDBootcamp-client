import { useEffect, useState } from 'react';

//TODO: meter el POST para hacer la reserva.

const useForm = (initialState, categoriesList, daysList) => {
    /* 
        Custom Hook que gestiona los estados de cualquier formulario, con cualquier tamaño.
        Necesita como estado inicial un objeto que tenga tantas propiedades
        como inputs tenga el formulario. Además, deberán ser iguales los nombres
        de las propiedades del obj con las etiquetas "name" de los inputs.
    */
    const [form, setForm] = useState(initialState);

    const handleInputChange = e => {
        /*
            Utilizada por todos los inputs del formulario en cada cambio.
            Diferencia el responsable del cambio gracias a su atributo "name".
        */

        const inputName = e.target.name;
        const inputValue = e.target.value;

        setForm(previousState => {
            /* Actualiza sólo la propiedad correspondiente al input específico */
            return {...previousState, [inputName]: inputValue}
        });
    }


    // const [categoriesList, setCategoriesList] = useState([]);
    // useEffect(() => {
    //     fetch("http://127.0.0.1:8000/api/categorieslist")
    //     .then(response => response.json())
    //     .then(data => setCategoriesList(data));
    // }, []);

    const [catCheckedState, setCatCheckedState] = useState();
    useEffect(() => setCatCheckedState(new Array(categoriesList?.length).fill(false)), [categoriesList]);
    const handleCatCheckboxChange = (position) => {
        const updatedcatCheckedState = catCheckedState.map((item, index) =>
          index === position ? !item : item
        );
        setCatCheckedState(updatedcatCheckedState);
    
        const catIdsArray = [];
        updatedcatCheckedState.map(
          (state, index) => {
            if (state === true) {
              catIdsArray.push(categoriesList[index].id);
            }
            return 0;
          }
        );
  
        setForm(previousState => {
          return {...previousState, 'categories': catIdsArray}
      });
    };



    const [daysCheckedState, setDaysCheckedState] = useState(new Array(7).fill(false));

    const handleDaysCheckboxChange = (position) => {
      const updatedDaysCheckedState = daysCheckedState.map((item, index) =>
        index === position ? !item : item
      );
      setDaysCheckedState(updatedDaysCheckedState);
  
      const idsArray = [];
      updatedDaysCheckedState.map(
        (day, index) => {
          if (day === true) {
            idsArray.push(daysList[index].id);
          }
          return 0;
        }
      );
      setForm(previousState => {
        return {...previousState, 'weekDays': idsArray}
    });
    };

      
    /*
        Decidimos que devuelva el estado (objeto form) y la función
        que actualiza una propiedad individual, en lugar del setForm
     */
    return [form, handleInputChange, handleCatCheckboxChange, catCheckedState, handleDaysCheckboxChange, daysCheckedState];
}

export {useForm};