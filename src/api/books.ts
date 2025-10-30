import { api } from "./instance.js";

export const getBooks = async (): Promise<IBook[]> => {
    const books = await api.get<IBook[]>("/books");
    return books;
};
