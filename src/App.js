import './App.css';
import { Navigate,Route, Routes} from 'react-router-dom';
// import  '../src/pages/dobfind/dobfind';
import DobFind from "./pages/dobfind/dobfind";

function App() {
  return (

      <div className="mt-2">
        <Routes>

          <Route path={'/dobfind'} element={<DobFind/>} key={'todo'}/>
        </Routes>
      </div>
  );
}

export default App;

