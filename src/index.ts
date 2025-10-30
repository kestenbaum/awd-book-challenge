import { createBookRow } from "./components/createBookRow.js";
import { getBooks } from "./api/books.js";

const tbody = document.querySelector("tbody")!;
getBooks()
tbody.appendChild(createBookRow());
