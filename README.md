# 📘 Challenge: “Book Finder”

## Goal

Build a small React app that renders a list of books and lets users filter the list by **title**, **author**, **year**, **country**, and **language**. Include automated tests that validate the UI behavior and filtering logic.

---

## Repo setup

1. Create the repo

```bash
mkdir book-finder && cd book-finder
git init
```

2. Scaffold (pick one)

- **Vite + React + TS (recommended)**

  ```bash
  npm create vite@latest . -- --template react-ts
  ```

- **Vite + React (JS)**

  ```bash
  npm create vite@latest . -- --template react
  ```

3. Install test deps

```bash
npm i -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

4. Add test script to `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest --environment jsdom",
    "test:ui": "vitest --ui --environment jsdom"
  }
}
```

5. Vitest setup
   Create `src/setupTests.ts` (or `.js`) and reference it in `vitest` config (vite config or `package.json`):

```ts
// src/setupTests.ts
import "@testing-library/jest-dom";
```

If using `vite.config.ts`, add:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
```

---

## Data

Create `src/data/books.json` with \~20 items (you can add more later). Example starter set:

```json
[
  {
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "year": 1605,
    "country": "Spain",
    "language": "Spanish"
  },
  {
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "year": 1869,
    "country": "Russia",
    "language": "Russian"
  },
  {
    "title": "The Trial",
    "author": "Franz Kafka",
    "year": 1925,
    "country": "Czechia",
    "language": "German"
  },
  {
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "year": 1967,
    "country": "Colombia",
    "language": "Spanish"
  },
  {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "year": 1813,
    "country": "United Kingdom",
    "language": "English"
  },
  {
    "title": "The Stranger",
    "author": "Albert Camus",
    "year": 1942,
    "country": "France",
    "language": "French"
  },
  {
    "title": "The Name of the Rose",
    "author": "Umberto Eco",
    "year": 1980,
    "country": "Italy",
    "language": "Italian"
  },
  {
    "title": "Blindness",
    "author": "José Saramago",
    "year": 1995,
    "country": "Portugal",
    "language": "Portuguese"
  },
  {
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "year": 1937,
    "country": "United Kingdom",
    "language": "English"
  },
  {
    "title": "Norwegian Wood",
    "author": "Haruki Murakami",
    "year": 1987,
    "country": "Japan",
    "language": "Japanese"
  },
  {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "year": 1988,
    "country": "Brazil",
    "language": "Portuguese"
  },
  {
    "title": "The Kite Runner",
    "author": "Khaled Hosseini",
    "year": 2003,
    "country": "Afghanistan",
    "language": "English"
  },
  {
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "year": 1958,
    "country": "Nigeria",
    "language": "English"
  },
  {
    "title": "The Little Prince",
    "author": "Antoine de Saint-Exupéry",
    "year": 1943,
    "country": "France",
    "language": "French"
  },
  {
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "year": 1866,
    "country": "Russia",
    "language": "Russian"
  },
  {
    "title": "The Master and Margarita",
    "author": "Mikhail Bulgakov",
    "year": 1967,
    "country": "Russia",
    "language": "Russian"
  },
  {
    "title": "Emma",
    "author": "Jane Austen",
    "year": 1815,
    "country": "United Kingdom",
    "language": "English"
  },
  {
    "title": "The Idiot",
    "author": "Fyodor Dostoevsky",
    "year": 1869,
    "country": "Russia",
    "language": "Russian"
  },
  {
    "title": "Ficciones",
    "author": "Jorge Luis Borges",
    "year": 1944,
    "country": "Argentina",
    "language": "Spanish"
  },
  {
    "title": "If on a winter's night a traveler",
    "author": "Italo Calvino",
    "year": 1979,
    "country": "Italy",
    "language": "Italian"
  }
]
```

---

## Requirements

### UI

- Render all books as a list of cards/rows.
- Provide **5 inputs** (free text except where noted):

  - Title
  - Author
  - Country
  - Language
  - Year

    - Accepts **exact year** (e.g. `1980`)
    - Also accept **range**: `"1900-1950"` (inclusive)

- Filtering is **AND** across fields.
- Matching for text fields is **case-insensitive substring**.
- Show a **results count** and an **empty state** message when no matches.
- Add a **Reset** button that clears all filters.

### UX & Accessibility

- Each input has a visible `<label>` associated via `htmlFor`.
- Keyboard friendly (focus order, no traps).
- Don’t debounce for this challenge.

### Architecture

- Keep filtering logic pure and unit-testable in a helper: `filterBooks(books, filters)`.
- Keep the component small; extract `BookList` and `BookCard` if helpful.

---

## Where to add `data-testid`s

Please add these so the tests can be straightforward and stable:

- Filters

  - `data-testid="title-input"`
  - `data-testid="author-input"`
  - `data-testid="year-input"`
  - `data-testid="country-input"`
  - `data-testid="language-input"`

- Results

  - `data-testid="book-list"` on the list container
  - `data-testid="book-card"` on each rendered book card/row (each card will be located via `getAllByTestId('book-card')`)
  - Optional per-field inside the card:

    - `data-testid="book-title"`, `"book-author"`, `"book-year"`, `"book-country"`, `"book-language"`

---

## Automated tests to implement

Create `src/App.test.tsx` (integration) and `src/lib/filter.test.ts` (unit). Below are **ready-to-run** examples—expand as you like.

### Unit tests for filtering logic

```ts
// src/lib/filter.test.ts
import { describe, it, expect } from "vitest";
import { filterBooks, type Book } from "./filter";

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

describe("filterBooks", () => {
  it("returns all when filters empty", () => {
    expect(filterBooks(books, {})).toHaveLength(3);
  });

  it("filters by case-insensitive substring for title", () => {
    expect(filterBooks(books, { title: "alP" })).toEqual([books[2]]);
  });

  it("filters by author and language (AND logic)", () => {
    expect(filterBooks(books, { author: "bar", language: "span" })).toEqual([
      books[1],
    ]);
  });

  it("filters by exact year", () => {
    expect(filterBooks(books, { year: "2000" })).toEqual([books[0]]);
  });

  it("filters by year range inclusive", () => {
    expect(filterBooks(books, { year: "1985-1990" })).toEqual([
      books[1],
      books[2],
    ]);
  });
});
```

### Integration tests (React Testing Library)

```tsx
// src/App.test.tsx
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

async function type(q: string, into: string) {
  await userEvent.clear(screen.getByTestId(into));
  await userEvent.type(screen.getByTestId(into), q);
}

describe("Book Finder UI", () => {
  beforeEach(() => render(<App />));

  it("renders full list initially and shows count", () => {
    const cards = screen.getAllByTestId("book-card");
    const count = screen.getByTestId("results-count");
    expect(cards.length).toBeGreaterThan(0);
    expect(count.textContent).toMatch(/Showing \d+ of \d+/);
  });

  it("filters by title substring (case-insensitive)", async () => {
    await type("hob", "title-input");
    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBe(1);
    expect(
      screen.getByTestId("book-title").textContent?.toLowerCase()
    ).toContain("hobbit");
  });

  it("applies AND logic across fields", async () => {
    await type("jane", "author-input");
    await type("united", "country-input");
    const cards = screen.getAllByTestId("book-card");
    // Jane Austen + UK should narrow to Pride and Prejudice + Emma
    expect(cards.length).toBe(2);
  });

  it("supports exact year and range", async () => {
    await type("1980-1990", "year-input");
    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("shows empty state when no matches", async () => {
    await type("zzzzzz", "title-input");
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });

  it("reset clears filters and restores full list", async () => {
    await type("hobbit", "title-input");
    const before = screen.getAllByTestId("book-card").length;
    expect(before).toBe(1);
    await userEvent.click(screen.getByTestId("reset-button"));
    const after = screen.getAllByTestId("book-card").length;
    expect(after).toBeGreaterThan(before);
  });
});
```

---

## Acceptance criteria (what your tests enforce)

- Renders all books on first load and shows total count.
- Filters by **Title/Author/Country/Language** as case-insensitive substring.
- Year accepts exact (`"1988"`) or range (`"1900-1950"`).
- Filters combine with **AND** logic.
- Empty state appears when there are 0 results.
- Reset clears inputs and restores full list.
- Accessibility: inputs have labels associated by `htmlFor`.
- All specified `data-testid`s exist and are stable.

---

## Stretch goals (optional)

- Persist filters in the query string.
- Add sorting (by title/year).
- Virtualize the list for large datasets.
- Add a small debounce (200ms) with tests updated accordingly.

---

## What to deliver

- A GitHub repo with:

  - Working app
  - Tests passing: `npm test`
  - A README explaining:

    - How to run (`npm i`, `npm run dev`)
    - How to test
    - Any design decisions or trade-offs

---
