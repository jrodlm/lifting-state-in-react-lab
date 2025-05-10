const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
    return (
      <li 
        style={{ 
          backgroundColor: ingredient.color, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '4px 8px', 
          marginBottom: '4px',
          borderRadius: '4px'
        }}
      >
        {ingredient.name}
        {onClick && (
          <button onClick={onClick}>{buttonLabel}</button>
        )}
      </li>
    );
  };
  
  export default Ingredient;
  