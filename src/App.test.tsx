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
    await type("1980", "year-input");
    const cards = screen.getAllByTestId("book-card");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("shows empty state when no matches", async () => {
    await type("zzzzzz", "title-input");
    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });
});
