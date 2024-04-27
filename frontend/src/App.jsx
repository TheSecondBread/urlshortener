import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContextProvider from './Store/ContextProvider';
function App() {
  return(
    <ContextProvider>
    <Header></Header>
    </ContextProvider>
  );
}

export default App
