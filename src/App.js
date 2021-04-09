import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from './components/GifGrid';

function App() {
  
  const [categories, setCategories] = useState(['One punch']);

  return (
    <>
      <h2>GifExpert</h2>
      <AddCategory 
        setCategories={setCategories}
      />
      <hr />
      
      <ol>
        {categories.map(c => <GifGrid key={c} category={c} /> )}
      </ol>
    </>
  );
}

export default App;
