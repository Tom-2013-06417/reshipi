import CreateRecipeFormComponent from "../CreateRecipeForm/CreateRecipeFormComponent";

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
      <h3>Form</h3>
      <input type="text" placeholder="Title"></input>
      <textarea placeholder="Description"></textarea>
      <CreateRecipeFormComponent />
    </div>
  );
}
