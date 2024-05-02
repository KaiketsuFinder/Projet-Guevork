import styled from "styled-components";

function Header(props) {
  return (
    <HeaderContainer>
      <h2>{props.name}</h2>
      <p>{props.children}</p>
    </HeaderContainer>
  );
}

export default Header;
const HeaderContainer = styled.header`
  background: linear-gradient(90deg, rgba(46, 50, 63, 1) 0%, #2c2f3c 100%);
  border-radius: 0 0 8px 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 5px;
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  margin: 5px;
  font-size: 10px;
  font-weight: 800;
`;
