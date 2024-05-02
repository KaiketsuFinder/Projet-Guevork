import LinkButton from "./LinkButton";

const Sidebar = () => {
  return (
    <div className="dark sidebar">
      <LinkButton>Evenements</LinkButton>
      <LinkButton>Joueurs</LinkButton>
      <LinkButton>Equipes</LinkButton>
    </div>
  );
};

export default Sidebar;
