import { useState } from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  
  //const[categories,setCategories]=  useState(['One Punch','Dragon Ball']);
  const[categories,setCategories]=  useState(['One Punch']);

  const onAddCategory=( newCategory )=>{
    //console.log(newCategory);
    
    if(categories.includes(newCategory)) return;
    
    setCategories([newCategory,...categories]);
    //setCategories(cat=>[...cat,'Valorant']);

  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          //setCategories={ setCategories }
          //por lo general todo lo comensado con on se lo considera un evento
          onNewCategory={ onAddCategory }
        />

        {/* Estado de Git */}

        {/* ol son order list */}
        
        {/* <ol> */}
            {/* itemde la lista (List Item) */}
            
            {categories.map ( category=>(
                  // <div key={category}>
                  //   <h3>{category}</h3>
                  //   <li>{category}</li>
                  // </div>
                  
                  <GifGrid 
                    key={ category } 
                    category={category}/>
                  )
                  
            )}

            {/* <li>ABC</li>
            <li>123</li> */}
        {/* </ol> */}
            {/* Gift Item */}

    </>
    
  )
}
