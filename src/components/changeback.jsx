const Coloration = ({ value, setCurrentColor }) => {
    const handleClick = () => {
      setCurrentColor(value);
    };
  
    return (
      <button
        style={{ backgroundColor: value ,marginLeft:'10px'}}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  };
export default Coloration;