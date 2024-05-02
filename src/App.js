import Sidebar from "./components/Sidebar";
import Events from "./components/Events";
import Players from "./components/Players";
import Teams from "./components/Teams";
import Header from "./components/Header";
import styled from "styled-components";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Container className="app">
        <aside>
          <Sidebar></Sidebar>
        </aside>
        <main>
          <div className="column-1">
            <Events />
          </div>
          <div className="column-2">
            <div>
              <Players />
            </div>
            <div>
              <Teams />
            </div>
          </div>
        </main>
      </Container>
    </React.Fragment>
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
  }

  & > main .column-1 {
    width: 60%;
  }

  .column-2 {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 36px;
  }
  & .column-2 > div:first-child {
    height: 50%;
  }

  & .column-2 > div:last-child {
    height: 50%;
  }
`;
