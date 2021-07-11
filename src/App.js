import AuthContext from "./context/AuthContext";
import Router from './Router'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AuthContext>
        <Router />
        <Footer />
      </AuthContext>
    </>
  );
}

export default App;
