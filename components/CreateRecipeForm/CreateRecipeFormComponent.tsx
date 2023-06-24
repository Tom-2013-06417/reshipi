import { Fragment } from "react";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import Button from "../UI/Button/Button";

export default function CreateRecipeFormComponent() {

  return (
    <Fragment>
      <Input label="Title" placeholder="Recipe name"></Input>
      <Textarea
        label="Quick description"
        placeholder="A few notes about the recipe"
      ></Textarea>

      <div className="flex justify-end">
        <Button variant="primary">Ship it</Button>
      </div>
    </Fragment>
  );
}
