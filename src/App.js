import AuthContext from "./context/AuthContext";
import Router from './Router'

function App() {
  return (
    <div id="content-wrap">
      <AuthContext>

        <Router />

      </AuthContext>
    </div>
  );
}

export default App;