import {useState} from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
      // categories.push(newCategory);
        // const newCategory = 'Naruto';
    // setCategories( [...categories, newCategory]);

    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    }


  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategory 
             onNewCategory={(value) => onAddCategory(value)}
        />
        {
            categories.map( (category, index) => (<GifGrid key={category} category={ category }/>))
        }
    </>
  )
}
