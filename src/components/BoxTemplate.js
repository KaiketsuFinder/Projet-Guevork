import styled from "styled-components";

const BoxTemplate = (props) => {
  const { title, children } = props;
  return (
    <Container className="dark">
      <header>{title}</header>
      <section>{children}</section>
    </Container>
  );
};

export default BoxTemplate;

BoxTemplate.defaultProps = {
  title: "Mon titre par défaut",
};

const Container = styled.div`
  & > header {
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
