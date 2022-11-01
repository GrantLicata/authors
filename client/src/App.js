import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import List from './components/List';
import Form from './components/Form';
import Edit from './components/Edit';
import Error from './components/Error';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<List />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/edit/:id" element={<Edit />}/>
            <Route path='/error' element={<Error />}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
