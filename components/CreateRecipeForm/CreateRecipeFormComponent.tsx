import { Fragment } from "react";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";
import IngredientsForm from "./IngredientsForm/IngredientsForm";

export default function CreateRecipeFormComponent() {

  return (
    <Fragment>
      <Input label="Title" placeholder="Recipe name"></Input>
      <Textarea
        label="Quick description"
        placeholder="A few notes about the recipe"
      ></Textarea>

      <h2 className="mb-2">Ingredients</h2>
      <IngredientsForm></IngredientsForm>

      <div className="flex justify-end">
        <Button variant="primary">Ship it</Button>
      </div>

    </Fragment>
  );
}
