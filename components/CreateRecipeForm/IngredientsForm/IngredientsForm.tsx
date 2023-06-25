import { Fragment, useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

export default function IngredientsForm() {
  const [ingredientControl, setIngredientControl] = useState([{ quantity: '', name: ''}]);

  function handleAddIngredient() {
    setIngredientControl([...ingredientControl, {quantity: '', name: ''}]);
  }

  function handleInputChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
    const values = [...ingredientControl];
    const { name, value } = event.target;
    values[index] = {
      ...values[index],
      [name]: value
    };

    setIngredientControl(values);
  }

  return (
    <Fragment>
      {ingredientControl.map((control, index) => (
        <div key={index} className="flex">
          <Input
            className="basis-4/12 mr-4"
            placeholder="Quantity"
            name="quantity"
            value={control.quantity}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
          ></Input>
          <Input
            className="basis-8/12"
            placeholder="Name"
            name="name"
            value={control.name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
          ></Input>
        </div>
      ))}

      <div className="flex justify-center">
        <Button variant="secondary" onClick={handleAddIngredient}>+</Button>
      </div>
    </Fragment>
  );
}
