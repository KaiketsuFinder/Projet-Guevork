import Sidebar from "./components/Sidebar";
import Events from "./components/Events";
import Players from "./components/Players";
import Teams from "./components/Teams";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <div>
          <Events />
        </div>
        <div>
          <div>
            <Players />
          </div>
          <div>
            <Teams />
          </div>
        </div>
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;

  & > aside {
    width: 336px;
  }

  & > main {
    flex-grow: 1;
    display: flex;
    gap: 36px;
    padding: 36px;

    & > div:first-child {
      width: 60%;
    }

    & > div:last-child {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 36px;

      & > div:first-child {
        height: 50%;
      }

      & > div:last-child {
        height: 50%;
      }
    }
  }
`;
