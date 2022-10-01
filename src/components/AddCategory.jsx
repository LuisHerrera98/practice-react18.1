import { useState } from "react";

const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputOnChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const category = inputValue.trim();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(category)
    setInputValue('');
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputOnChange}
      />
    </form>
  );
};

export default AddCategory;
