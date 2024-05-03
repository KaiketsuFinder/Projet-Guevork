import styled from "styled-components";

const LinkButton = (props) => {
  const handleClick = () => {
    console.log(props.children);
  };

  return <Container onClick={handleClick}>{props.children}</Container>;
};

export default LinkButton;

const Container = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 24px;
  border-radius: 12px;
  padding: 18px 16px;
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg, rgba(46, 50, 63, 1) 0%, #2c2f3c 100%);
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px;
  color: white;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background: #2c2f3c;
  }
`;
