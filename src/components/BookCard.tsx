import type { Book } from "../types/Book";

export const BookCard = ({ book }: { book: Book }) => {
  return (
    <div
      style={{ width: "100%", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
      data-testid="book-card"
    >
      <li
        style={{
          listStyleType: "none",
          textAlign: "start",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong data-testid="book-title">title: {book.title}</strong>
        <span>author: {book.author}</span>
        <span>country: {book.country}</span>
        <span>language: {book.language}</span>
        <span>year: {book.year}</span>
      </li>
    </div>
  );
};
