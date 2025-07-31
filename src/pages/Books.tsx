import React from "react";
import BookCard from '../components/BookCard';
import type { Book } from "../types";
import ReadingCounter from "../components/ReadingCounter";

const mockBooks: Book[] = [
    {
        id: 1,
        title: 'Atomic Habits',
        author: 'James Clear',
        status: 'reading',
    },
    {
        id: 2,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        status: 'finished',
    },
];


const Books = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">📚 My Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mockBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
                <ReadingCounter />
            </div>

        </div>

    )
}

export default Books;