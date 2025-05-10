import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, onAddIngredient }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index}
          ingredient={ingredient}
          onClick={() => onAddIngredient(ingredient)}
          buttonLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
