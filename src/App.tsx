import "./App.css";
import { BookList } from "./components/BookList";
import books from "./data/books.json";

function App() {
  return <BookList data={books} />;
}

export default App;
