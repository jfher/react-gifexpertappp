import React,{useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => { // puede ser props y luego props.setCategories o directo {setCategories}

    const [inputValue, setInputValue] = useState(''); //siempre pasar un estado inicial
    const handleInputChange = (e) => {
        setInputValue(e.target.value); //necesario para atrapar todo cambio en el input
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();  //previene el refresh al enviar el form
        if(inputValue.trim().length > 2 ) {
            setCategories(cats => [inputValue,...cats]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
                type = 'text'
                value = {inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

//Definir props por defecto
AddCategory.defaultProps = {
    setCategories: ''
}
