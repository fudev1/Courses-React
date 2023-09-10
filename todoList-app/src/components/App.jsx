import "bootstrap/dist/css/bootstrap.min.css";
import {ToDoList} from "./ToDoList";
import {Footer} from "./Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AddTask } from "./AddTask";
import '../css/todo.css'

function App() {
  return (

    <section id="todo">
      <BrowserRouter>

        <Routes>
          <Route path="/:filter?" element={<ToDoList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>   
    </section>

  );
}

export default App;
