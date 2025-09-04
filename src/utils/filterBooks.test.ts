import { describe, it, expect } from "vitest";
import { filterBooks } from "./filterBooks";
import type { Book } from "../types/Book";

const books: Book[] = [
  { title: "A", author: "Foo", year: 2000, country: "X", language: "English" },
  { title: "B", author: "Bar", year: 1990, country: "Y", language: "Spanish" },
  {
    title: "Alpha",
    author: "Baz",
    year: 1985,
    country: "Z",
    language: "French",
  },
];

const initialFilterState = {
  title: "",
  author: "",
  country: "",
  language: "",
  year: "",
};

describe("filterBooks", () => {
  it("returns all when filters empty", () => {
    expect(filterBooks(books, { ...initialFilterState })).toHaveLength(3);
  });

  it("filters by case-insensitive substring for title", () => {
    expect(filterBooks(books, { ...initialFilterState, title: "alP" })).toEqual(
      [books[2]]
    );
  });

  it("filters by author and language (AND logic)", () => {
    expect(
      filterBooks(books, {
        ...initialFilterState,
        author: "bar",
        language: "span",
      })
    ).toEqual([books[1]]);
  });

  it("filters by exact year", () => {
    expect(filterBooks(books, { ...initialFilterState, year: "2000" })).toEqual(
      [books[0]]
    );
  });
});
