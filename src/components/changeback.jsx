const Coloration = ({ value, setCurrentColor }) => {
    const handleClick = () => {
      setCurrentColor(value);
    };
  
    return (
      <button
        style={{ backgroundColor: value }}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  };
export default Coloration;