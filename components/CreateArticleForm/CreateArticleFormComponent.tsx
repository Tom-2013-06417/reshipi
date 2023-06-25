import CreateRecipeFormComponent from "../CreateRecipeForm/CreateRecipeFormComponent";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";

export default function CreateArticleFormComponent() {
//   const ingredientsHtml = recipe.ingredients.map((ingredient, index) => (
//     <div key={index} className="flex items-center mb-1">
//       <input type="checkbox" className="mr-3 w-4 h-4" />
//       <span>
//         {ingredient?.amount?.value} {ingredient?.amount?.unit} {ingredient.name}
//       </span>
//     </div>
//   ));

//   const stepsHtml = recipe.steps.map((step, index) => (
//     <p key={index} className="mb-3">
//       {step.value}
//     </p>
//   ));

  return (
    <div>
      <Input
        label="Title"
        placeholder="This is a new recipe"
      ></Input>
      <Textarea
        label="Description"
        placeholder="This is a new article"
        rows="6"
      ></Textarea>

      <CreateRecipeFormComponent />
    </div>
  );
}
