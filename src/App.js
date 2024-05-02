import Sidebar from "./components/Sidebar";
import Events from "./components/Events";
import Players from "./components/Players";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="app">
      <aside>
        <Sidebar />
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
    </div>
  );
}

export default App;
