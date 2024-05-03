import styled from "styled-components";
import LinkButton from "./LinkButton";

const Sidebar = () => {
  const [ChangeColor,setChangeColor] = React.useState (Container.LinkButton)
  return (
    <Container>
      <LinkButton onClick={()=> this.setChangeColor}>Evenements</LinkButton>
      <LinkButton onClick={()=> this.setChangeColor}>Joueurs</LinkButton>
      <LinkButton onClick={()=> this.setChangeColor}>Equipes</LinkButton>
    </Container>
  );
};


export default Sidebar;

const Container = styled.div`
  background: radial-gradient(
    circle,
    rgba(46, 50, 63, 1) 0%,
    rgba(34, 38, 47, 1) 100%
  );
  box-shadow: none;
  border-radius: 0;
  padding: 36px 50px;
  height: calc(100% - 72px);
`;
