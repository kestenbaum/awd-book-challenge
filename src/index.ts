import { createBookRow } from "./components/createBookRow";

const tbody = document.querySelector("tbody")!;
tbody.appendChild(createBookRow());
