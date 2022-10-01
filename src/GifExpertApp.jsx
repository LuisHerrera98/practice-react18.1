import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch", "Goku"]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory])
    }


  return (
    <>
        <h1>GifApp</h1>
        <AddCategory onNewCategory={(value) => onAddCategory(value)} />
        <ol>
            {
                categories.map(category => {
                    return <li key={category}>{category}</li>
                })
            }
        </ol>
    </>
  )
}

export default GifExpertApp