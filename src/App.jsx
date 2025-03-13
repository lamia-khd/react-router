import { Routes, Route, Link } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import TodoList from "./pages/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <nav className="mb-5">
        <Link to="/" className="mx-3 text-blue-500 hover:underline">Tic-Tac-Toe</Link>
        <Link to="/todo" className="mx-3 text-blue-500 hover:underline">To-Do List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TicTacToe />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
}
