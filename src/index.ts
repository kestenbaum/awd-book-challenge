import { createBookRow } from "./components/createBookRow.js";
import { getBooks } from "./api/books.js";

const tbody = document.querySelector("tbody")!;
const title = document.querySelector("h2") as HTMLElement;

async function renderBooks() {
    try {
        const books = await getBooks();
        title.innerText = ` ${books.length} Books displayed`
        books.map(book => tbody.appendChild(createBookRow(book)));
    } catch (err) {
        console.error(err);
    }
}

renderBooks();
