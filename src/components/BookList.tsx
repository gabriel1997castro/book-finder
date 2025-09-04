import { useState, type ChangeEvent } from "react";
import type { Book } from "../types/Book";
import { BookCard } from "./BookCard";
import { filterBooks } from "../utils/filterBooks";

interface BookListProps {
  data: Book[];
}
export const BookList = ({ data }: BookListProps) => {
  const initialFilterState = {
    title: "",
    author: "",
    country: "",
    language: "",
    year: "",
  };
  const [filters, setFilters] = useState(initialFilterState);

  const handleChangeFilter = (
    event: ChangeEvent<HTMLInputElement>,
    filterName: keyof typeof initialFilterState
  ) => {
    setFilters((curr) => ({ ...curr, [filterName]: event.target.value }));
  };

  const inputStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div style={{ minWidth: "30rem" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <div style={inputStyle}>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            onChange={(e) => handleChangeFilter(e, "title")}
          />
        </div>

        <div style={inputStyle}>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            onChange={(e) => handleChangeFilter(e, "author")}
          />
        </div>

        <div style={inputStyle}>
          <label htmlFor="country">Country</label>
          <input
            name="country"
            onChange={(e) => handleChangeFilter(e, "country")}
          />
        </div>

        <div style={inputStyle}>
          <label htmlFor="language">Language</label>
          <input
            name="language"
            onChange={(e) => handleChangeFilter(e, "language")}
          />
        </div>

        <div style={inputStyle}>
          <label htmlFor="year">Year</label>
          <input name="year" onChange={(e) => handleChangeFilter(e, "year")} />
        </div>
      </form>

      <br />
      <div style={{ width: "80%" }}>
        {filterBooks(data, filters).map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </div>
  );
};
