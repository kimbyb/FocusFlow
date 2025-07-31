import React from "react";

type Book = {
    id: number;
    title: String;
    author: String;
    status: 'reading' | 'finished';
};

type Props = {
    book: Book;
}

const BookCard = ({ book }: Props) => {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p
                className={`mt-2 inline-block px-2 py-1 text-xs rounded ${book.status === 'reading' ? 'bg-yellow-200' : 'bg-green-200'
                    }`}
            >
                {book.status}
            </p>
        </div>
    );
}

export default BookCard;