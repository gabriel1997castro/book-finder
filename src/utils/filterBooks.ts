import type { Book } from "../types/Book";

export const filterBooks = (
  list: Book[],
  data: Omit<Book, "year"> & { year: string }
) => {
  console.log(data);
  const title = data.title.toLowerCase();
  const author = data.author.toLowerCase();
  const country = data.country.toLowerCase();
  const language = data.language.toLowerCase();
  const year = data.year;

  return list.filter(
    (item) =>
      item.title.toLowerCase().includes(title) &&
      item.author.toLowerCase().includes(author) &&
      item.country.toLowerCase().includes(country) &&
      item.language.toLowerCase().includes(language) &&
      item.year.toString().includes(year)
  );
};
