import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, onRemoveIngredient }) => {
    return (
      <div>
        <h2>Your Burger Stack</h2>
        {stack.length === 0 ? (
          <p>No Ingredients</p>
        ) : (
          <ul>
            {stack.map((ingredient, index) => (
              <Ingredient 
                key={index}
                ingredient={ingredient}
                onClick={() => onRemoveIngredient(index)}
                buttonLabel="X"
              />
            ))}
          </ul>
        )}
      </div>
    );
  };
  
export default BurgerStack;

  