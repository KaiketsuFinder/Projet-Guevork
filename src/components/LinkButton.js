const LinkButton = (props) => {
  const handleClick = () => {
    console.log(props.children);
  };
  return (
    <button className="link-button" onClick={handleClick}>
      {props.children}
    </button>
  );
};

export default LinkButton;
