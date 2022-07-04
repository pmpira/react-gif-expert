import { useState } from 'react'


export const AddCategory = ({ onNewCategory }) => {
  //cada componente puede manejar su propio estado

  const [inputValue, setinputValue] = useState('');

  const onInputChange=({target})=>{
    setinputValue(target.value);

  }

  const onSubmit=(event)=>{
    event.preventDefault();
     
    if (inputValue.trim().length <=1) return;
    //setCategories(categories=>[ inputValue,...categories ]);
    onNewCategory(inputValue.trim());
    setinputValue('');
  }
  
  return (
    //con el form hace un full refresh del navegador web
    <form onSubmit={onSubmit}>
        
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ onInputChange }
        />

    </form>
    
  )
}
