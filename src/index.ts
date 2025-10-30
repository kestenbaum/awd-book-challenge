import { createBookRow } from "./components/createBookRow.js";
import { getBooks } from "./api/books.js";

const tbody = document.querySelector("tbody")!;

async function renderBooks() {
    try {
        const books = await getBooks();
        books.map(book => tbody.appendChild(createBookRow(book)));
    } catch (err) {
        console.error(err);
    }
}

renderBooks();
